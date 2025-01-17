import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../setup/axiosClient";

export const initializeAppData = createAsyncThunk(
  "app/initializeData",
  async (_, { rejectWithValue }) => {
    try {
      const [
        bannersResponse,
        middleBanners,
        upperSection,
        productSections,
        lowerSection,
        blogs,
        videos,
        statistics,
        testimonials,
      ] = await Promise.all([
        client.get("/ecommerce/banners/?sequence=Upper"),
        client.get("/ecommerce/banners/?sequence=Middle"),
        client.get("/upper-section/"),
        client.get("/product-section/"),
        client.get("/lower-section/"),
        client.get("/home/blogs/"),
        client.get("/youtubevideo-section/"),
        client.get("/statistics-section/"),
        client.get("/testimonials-section/"),
      ]);

      return {
        banners: bannersResponse.data.banner || [],
        middleBanners: middleBanners.data.banner || [],
        upperSection: upperSection.data.data || [],
        productSections: productSections.data.data || [],
        lowerSection: lowerSection.data.data || [],
        blogs: blogs.data.blogs || [],
        videos: videos.data.data || [],
        statistics: statistics.data.data || [],
        testimonials: testimonials.data.data || [],
      };
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || error.message);
    }
  }
);

const initialState = {
  banners: [],
  middleBanners: [],
  loader: false,
  error: null,
  hasFetched: false,
  upperSection: {
    giftHamperSection: [],
    viewMoreSection: [],
    newArrivalsSection: [],
    certificateSection: [],
    girGauProductSection: [],
    shopSection: [],
    groceriesSection: [],
    whoSection: [],
    inspireSection: [],
    missionSection: [],
  },
  productSections: {
    all: [],
    newArrivalList: [],
    tryOurList: [],
    instantMixList: [],
    mustTryGirList: [],
    mustTryNaturalList: [],
    bestOfList: [],
    allTimeList: [],
  },
  lowerSection: {
    awardsSection: [],
    availableSection: [],
    brandSection: [],
    licenseSection: [],
    nonGMOSection: [],
    servicesSection: [],
    masalaImageSection: [],
  },
  blogs: [],
  videos: [],
  statistics: [],
  testimonials: [],
};

const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initializeAppData.pending, (state) => {
        state.loader = true;
      })
      .addCase(initializeAppData.fulfilled, (state, action) => {
        state.loader = false;
        const {
          banners,
          middleBanners,
          upperSection,
          productSections,
          lowerSection,
          blogs,
          videos,
          statistics,
          testimonials,
        } = action.payload;

        state.banners = banners;
        state.middleBanners = middleBanners;

        state.upperSection = {
          giftHamperSection: upperSection.filter((section) => section.id === 1),
          viewMoreSection: upperSection.filter((section) => section.id === 2),
          newArrivalsSection: upperSection.filter((section) => section.id === 3),
          certificateSection: upperSection.filter((section) => section.id === 4),
          girGauProductSection: upperSection.filter((section) => section.id === 5),
          shopSection: upperSection.filter((section) => section.id === 6),
          whoSection: upperSection.filter((section) => section.id === 10),
          inspireSection: upperSection.filter((section) => section.id === 11),
          missionSection: upperSection.filter((section) => section.id === 12),
          groceriesSection: upperSection.filter((section) => section.id === 13),
        };

        state.productSections = {
          all: productSections,
          newArrivalList: productSections.filter((section) => section.id === 1),
          tryOurList: productSections.filter((section) => section.id === 2),
          instantMixList: productSections.filter((section) => section.id === 3),
          mustTryGirList: productSections.filter((section) => section.id === 4),
          mustTryNaturalList: productSections.filter((section) => section.id === 5),
          bestOfList: productSections.filter((section) => section.id === 6),
          allTimeList: productSections.filter((section) => section.id === 7),
        };

        state.lowerSection = {
          awardsSection: lowerSection.filter((section) => section.id === 1),
          servicesSection: lowerSection.filter((section) => section.id === 2),
          availableSection: lowerSection.filter((section) => section.id === 3),
          licenseSection: lowerSection.filter((section) => section.id === 4),
          nonGMOSection: lowerSection.filter((section) => section.id === 8),
          brandSection: lowerSection.filter((section) => section.id === 9),
          masalaImageSection: lowerSection.filter((section) => section.id === 11),
        };

        state.blogs = blogs;
        state.videos = videos;
        state.statistics = statistics;
        state.testimonials = testimonials;
        state.hasFetched = true;
      })
      .addCase(initializeAppData.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      });
  },
});

export default bannerSlice.reducer;

