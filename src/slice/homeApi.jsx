import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import client from "../setup/axiosClient";

// Initial state for banners
const initialState = {
  banners: [],
  middleBanners: [],
  loader: false,
  error: null,
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
  },
  blogs: [],
  // lowerSection: [],
  videos: [],
  statistics: [],
};

const getResponseData = (response, key) => {
  if (!response || !response.status) return [];
  return response[key] || response.data || [];
};
// Async thunk for fetching banners
export const fetchBanners = createAsyncThunk(
  "banners/fetchBanners",
  async () => {
    const response = await client.get("/ecommerce/banners/?sequence=Upper");
    return response.data;
  }
);

export const fetchMiddleBanners = createAsyncThunk(
  "banners/fetchMiddleBanners",
  async () => {
    const response = await client.get("/ecommerce/banners/?sequence=Middle");
    return response.data;
  }
);

export const fetchUpperSection = createAsyncThunk(
  "home/fetchUpperSection",
  async () => {
    const response = await client.get("/upper-section/");
    return response.data;
  }
);

export const fetchProductSections = createAsyncThunk(
  "home/fetchProductSections",
  async () => {
    const response = await client.get("/product-section/");
    return response.data;
  }
);

export const fetchBlogs = createAsyncThunk("home/fetchBlogs", async () => {
  const response = await client.get("/home/blogs/");
  return response.data;
});

export const fetchLowerSection = createAsyncThunk(
  "home/fetchLowerSection",
  async () => {
    const response = await client.get("/lower-section/");
    return response.data;
  }
);

export const fetchVideos = createAsyncThunk("home/fetchVideos", async () => {
  const response = await client.get("/youtubevideo-section/");
  return response.data;
});

export const fetchStatistics = createAsyncThunk(
  "home/fetchStatistics",
  async () => {
    const response = await client.get("/statistics-section/");
    return response.data;
  }
);

const bannerSlice = createSlice({
  name: "banners",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBanners.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchBanners.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload.status === true) {
          state.banners = getResponseData(action.payload, "banner");
        }
      })
      .addCase(fetchBanners.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })

      // Middle Banners
      .addCase(fetchMiddleBanners.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchMiddleBanners.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload.status === true) {
          state.middleBanners = getResponseData(action.payload, "bannerMiddle");
        }
      })
      .addCase(fetchMiddleBanners.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })

      // Upper Section
      .addCase(fetchUpperSection.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchUpperSection.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload.status === true) {
          const data = getResponseData(action.payload, "data");
          state.upperSection = {
            giftHamperSection: data.filter((section) => section.id === 1),
            viewMoreSection: data.filter((section) => section.id === 2),
            newArrivalsSection: data.filter((section) => section.id === 3),
            certificateSection: data.filter((section) => section.id === 4),
            girGauProductSection: data.filter((section) => section.id === 5),
            shopSection: data.filter((section) => section.id === 6),
            groceriesSection: data.filter((section) => section.id === 13),
            whoSection: data.filter((section) => section.id === 10),
            inspireSection: data.filter((section) => section.id === 11),
            missionSection: data.filter((section) => section.id === 12),
          };
        }
      })
      .addCase(fetchUpperSection.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })

      // Product Sections
      .addCase(fetchProductSections.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchProductSections.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload.status === true) {
          const data = getResponseData(action.payload, "data");
          state.productSections = {
            all: data,
            newArrivalList: data.filter((section) => section.id === 1),
            tryOurList: data.filter((section) => section.id === 2),
            instantMixList: data.filter((section) => section.id === 3),
            mustTryGirList: data.filter((section) => section.id === 4),
            mustTryNaturalList: data.filter((section) => section.id === 5),
            bestOfList: data.filter((section) => section.id === 6),
            allTimeList: data.filter((section) => section.id === 7),
          };
        }
      })
      .addCase(fetchProductSections.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })

      // Blogs
      .addCase(fetchBlogs.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload.status === true) {
          state.blogs = getResponseData(action.payload, "blogs");
        }
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })

      // Lower Section
      .addCase(fetchLowerSection.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchLowerSection.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload.status === true) {
          const data = getResponseData(action.payload, "data");
          state.lowerSection = {
            awardsSection: data.filter((section) => section.id === 1),
            availableSection: data.filter((section) => section.id === 2),
            brandSection: data.filter((section) => section.id === 3),
          };
        }
      })
      .addCase(fetchLowerSection.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })

      // Videos
      .addCase(fetchVideos.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchVideos.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload.status === true) {
          state.videos = getResponseData(action.payload, "data");
        }
      })
      .addCase(fetchVideos.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      })

      // Statistics
      .addCase(fetchStatistics.pending, (state) => {
        state.loader = true;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.loader = false;
        if (action.payload.status === true) {
          state.statistics = getResponseData(action.payload, "data");
        }
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.loader = false;
        state.error = action.error.message;
      });
  },
});

export default bannerSlice.reducer;
