import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Carousel from "../components/Carousel";
import CarouselWithLinks from "../components/CarouselWithLinks";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ScrollToTop from "../components/ScrollToTop";
import ProductListSection from "../components/ProductListSection";
import {
  Container,
  Flex,
  Image,
  Heading,
  Stat,
  StatNumber,
  StatHelpText,
  SimpleGrid,
  Box,
  Link,
  Center,
  useMediaQuery,
  Text,
  Grid,
  GridItem,
  LinkBox,
  LinkOverlay,
  useBreakpointValue,
  Card,
  Skeleton,
  Button,
} from "@chakra-ui/react";
import client from "../setup/axiosClient";
import CheckOrSetUDID from "../utils/checkOrSetUDID";
import { useNavigate, NavLink as RouterLink } from "react-router-dom";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Testimonials from "../components/testimonials";
import LoginModal from "../components/LoginModal";
import checkLogin from "../utils/checkLogin";

export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState([]);
  const [middleBanners, SetMiddleBanners] = useState([]);
  const [brandSection, setBrandSection] = useState();
  const [awardsSection, setAwardSection] = useState();
  const [servicesSection, setServicesSection] = useState();
  const [availableSection, setAvailableSection] = useState();
  const [nonGMOSection, setNonGMOSection] = useState();
  const [licensesSection, setLicensesSection] = useState();
  const [giftHamperSection, setGiftHamperSection] = useState();
  const [viewMoreSection, setViewMoreSection] = useState();
  const [newArrivalsSection, setNewArrivalsSection] = useState();
  const [certificateSection, setCertificateSection] = useState();
  const [girGauProductSection, setGirGauProductSection] = useState();
  const [shopSection, setShopSection] = useState();
  const [groceriesSection, setGroceriesSection] = useState();
  const [productListSections, setProductListSections] = useState([]);
  const [newArrivalList, setNewArrivalList] = useState();
  const [tryOurList, setTryOurList] = useState();
  const [instantMixList, setInstantMixList] = useState();
  const [mustTryGirList, setMustTryGirList] = useState();
  const [mustTryNaturalList, setMustTryNaturalList] = useState();
  const [bestOfList, setBestOfList] = useState();
  const [allTimeList, setAllTimeList] = useState();
  const [masalaIamgeSection, setMasalaImageSection] = useState();
  const [videos, setVideos] = useState([]);
  const [statisticsSection , setStatisticsSection ] = useState([])

  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [whoSection, setWhoSection] = useState();
  const [inspireSection, setInspireSection] = useState();
  const [missionSection, setMissionSection] = useState();
  const [homeData, setHome] = useState({});
  const [sections, setSections] = useState([]);
  const [error, setError] = useState(null);
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const loginInfo = checkLogin();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(
    sessionStorage.getItem("hasShownPopup")
  );
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    // getHomePageData();
    getBanners();
    getUpperSection();
    getProductListSection();
    getBlogs();
    getLowerSection();
    getVideos();
    getStatisticsSection() 
    if (showPopup === null && !loginInfo.isLoggedIn) {
      setIsLoginModalOpen(true);
    }
  }, []);

  async function getVideos() {
    const params = {};
    const response = await client.get("/youtubevideo-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setVideos(response?.data?.data);
    }
  }

  async function getStatisticsSection() {
    const params = {};
    const response = await client.get("/statistics-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setStatisticsSection(response?.data?.data);
    }
  }

  async function getBanners() {
    const promise1 = await client.get("/ecommerce/banners/?sequence=Upper");
    const promise2 = await client.get("/ecommerce/banners/?sequence=Middle");

    Promise.all([promise1, promise2])
      .then(function (responses) {
        if (responses[0].data.status === true) {
          setBanners(responses[0].data?.banner);
        }
        if (responses[1].data.status === true) {
          SetMiddleBanners(responses[1].data?.banner);
        }

        setLoading(false);
      })
      .catch(function (error) {
        setLoading(false);
        console.error("Error fetching data:", error);
      });
  }
  async function getBlogs() {
    const params = {};
    const response = await client.get("/home/blogs/", {
      params: params,
    });
    if (response.data.status === true) {
      setBlogs(response.data.blogs);
    }
  }

  async function getLowerSection() {
    const params = {};
    const response = await client.get("/lower-section/", {
      params: params,
    });
    if (response.data.status === true) {
      setSections(response.data.data);
      const ourAwardsSection = response.data.data?.filter(
        (section) => section.id === 1
      );
      const ourServicesSection = response.data.data?.filter(
        (section) => section.id === 2
      );
      const availableAtSection = response.data.data?.filter(
        (section) => section.id === 3
      );
      const licensesSection = response.data.data?.filter(
        (section) => section.id === 4
      );
      const brandSection = response.data.data?.filter(
        (section) => section.id === 9
      );
      const nonGMOSection = response.data.data?.filter(
        (section) => section.id === 8
      );
      const masalaImage = response.data.data?.filter(
        (section) => section.id === 11
      );
      setAwardSection(ourAwardsSection);
      setServicesSection(ourServicesSection);
      setAvailableSection(availableAtSection);
      setLicensesSection(licensesSection);
      setBrandSection(brandSection);
      setNonGMOSection(nonGMOSection);
      setMasalaImageSection(masalaImage);
    }
  }

  const getProductListSection = async () => {
    const response = await client.get("/product-section/");
    if (response.data.status === true) {
      setProductListSections(response.data.data);
      const newArrival = response.data.data?.filter(
        (section) => section.id === 1
      );
      const tryOur = response.data.data?.filter((section) => section.id === 2);
      const instantMix = response.data.data?.filter(
        (section) => section.id === 3
      );
      const mustTryGir = response.data.data?.filter(
        (section) => section.id === 4
      );
      const mustTryNatural = response.data.data?.filter(
        (section) => section.id === 5
      );
      const bestOf = response.data.data?.filter((section) => section.id === 6);
      const allTime = response.data.data?.filter((section) => section.id === 7);
      setNewArrivalList(newArrival);
      setTryOurList(tryOur);
      setInstantMixList(instantMix);
      setMustTryGirList(mustTryGir);
      setMustTryNaturalList(mustTryNatural);
      setBestOfList(bestOf);
      setAllTimeList(allTime);
    }
  };
  const getUpperSection = async () => {
    const response = await client.get("/upper-section/");
    if (response.data.status === true) {
      const giftHamper = response.data.data?.filter(
        (section) => section.id === 1
      );
      const viewMore = response.data.data?.filter(
        (section) => section.id === 2
      );
      const newArrivals = response.data.data?.filter(
        (section) => section.id === 3
      );
      const certificate = response.data.data?.filter(
        (section) => section.id === 4
      );
      const girGauProduct = response.data.data?.filter(
        (section) => section.id === 5
      );
      const shop = response.data.data?.filter((section) => section.id === 6);
      const groceries = response.data.data?.filter(
        (section) => section.id === 13
      );
      const whoSection = response.data.data?.filter(
        (section) => section.id === 10
      );
      const inspireSection = response.data.data?.filter(
        (section) => section.id === 11
      );
      const missionSection = response.data.data?.filter(
        (section) => section.id === 12
      );

      setGiftHamperSection(giftHamper);
      setViewMoreSection(viewMore);
      setNewArrivalsSection(newArrivals);
      setCertificateSection(certificate);
      setGirGauProductSection(girGauProduct);
      setShopSection(shop);
      setGroceriesSection(groceries);
      setWhoSection(whoSection);
      setInspireSection(inspireSection);
      setMissionSection(missionSection);
    }
  };

  

 
  return (
    <>
      {/* {loading === true ? (
        <Center h="100vh" w="100vw" backgroundColor={"bg.500"}>
          <Loader site={true} />
        </Center>
      ) : (
        <> */}
      <Navbar />
      <Container maxW={"container.xl"} px={0}>
        {loading === true ? (
          <Skeleton h={489}></Skeleton>
        ) : (
          <Carousel banners={banners?.length > 0 && banners} />
        )}
      </Container>
      {giftHamperSection?.length > 0 &&
        giftHamperSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} mb={5} centerContent>
            <LazyLoadImage
              src={giftHamperSection?.length > 0 && giftHamperSection[0]?.image}
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={6}
              my={6}
              px={15}
            >
              {giftHamperSection[0]?.images?.length > 0 &&
                giftHamperSection[0]?.images?.map((product) => (
                  <GridItem
                    key={product.id}
                    onClick={() => {
                      if (product.id) {
                        navigate(`/products/${product.product}`);
                      }
                    }}
                    cursor={product.id ? "pointer" : "default"}
                  >
                    <LazyLoadImage
                      src={product.image}
                      style={{
                        opacity: 1,
                        transition: "opacity 0.7s",
                      }}
                    />
                  </GridItem>
                ))}
            </Grid>
            {viewMoreSection?.length > 0 &&
              viewMoreSection[0]?.images?.length > 0 && (
                <Button
                  as={Link}
                  mb={8}
                  mt={3}
                  size={"lg"}
                  border={"1px"}
                  borderRadius={"8px"}
                  variant="solid"
                  colorScheme="brand"
                  _hover={{
                    color: "brand.500",
                    bgColor: "#fff",
                    border: "1px",
                    borderColor: "brand.500",
                    textDecoration: "none",
                  }}
                  href={`/shop?page=1&category=${viewMoreSection[0]?.images[0]?.category}&category_name=${viewMoreSection[0]?.images[0]?.category_name}`}
                >
                  {viewMoreSection[0]?.label}
                </Button>
              )}
          </Container>
        )}

      {newArrivalsSection?.length > 0 &&
        newArrivalsSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} mb={5} centerContent>
            <LazyLoadImage
              src={
                newArrivalsSection?.length > 0 && newArrivalsSection[0]?.image
              }
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(3, 1fr)",
              }}
              gap={6}
              my={6}
              px={15}
            >
              {newArrivalsSection[0]?.images?.length > 0 &&
                newArrivalsSection[0]?.images?.map((product) => (
                  <GridItem
                    key={product.id}
                    onClick={() => {
                      if (product.id) {
                        navigate(`/products/${product.product}`);
                      }
                    }}
                    cursor={product.product ? "pointer" : "default"}
                  >
                    <LazyLoadImage
                      src={product.image}
                      style={{
                        opacity: 1,
                        transition: "opacity 0.7s",
                      }}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}

      {certificateSection?.length > 0 &&
        certificateSection[0]?.is_visible_on_website === true && (
          <Container mb={5} px={0} maxW={"container.xl"} centerContent>
            <LazyLoadImage
              src={
                certificateSection?.length > 0 && certificateSection[0]?.image
              }
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
          </Container>
        )}
      <Container maxW={"6xl"} mb={5}>
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
        >
          {whoSection?.length > 0 && (
            <>
              {" "}
              <GridItem mt={6}>
                <Image src={whoSection[0]?.image} alt="" />
              </GridItem>
              <GridItem mt={6} px={{ base: 2, md: 2, lg: 5 }}>
                <Text
                  fontWeight={500}
                  align={{ base: "justify" }}
                  color="text.500"
                  fontSize={{ base: "24", lg: "28" }}
                >
                  {whoSection?.length > 0 && whoSection[0]?.label}
                </Text>
                <Text
                  fontWeight={400}
                  align={{ base: "justify" }}
                  mt={4}
                  fontSize={{ base: "14px", lg: "16px" }}
                >
                  {/* <span>Suryan Organic </span> is founded by a family of farmers who
              are engaged in Bharat's traditional & fully natural farming
              practices for at least the last 11 generations. The Founders
              firmly believe that embracing modernity while reviving Bharat's
              ancient & vibrant cultural traditions holds the key to solving the
              problems facing the country as well as humanity as a whole.
              <br />
              Suryan Organic is inspired by <b>
                {" "}
                "​Bansi​​ Gir​​ Gaushala​"{" "}
              </b>{" "}
              , and its mission to revive Bharat's ancient and glorious ‘Gau
              Sanskriti’. We aim to make a positive difference to rural
              economies by empowering farmers and helping them adopt ethical
              farming & production practices that are friendly to the ecosystem. */}
                  {whoSection[0]?.description}
                </Text>

                <Button
                  mt={4}
                  variant={"outline"}
                  border={"1px"}
                  borderColor={"text.500"}
                  color="text.500"
                  backgroundColor="white"
                  borderRadius={"10px"}
                  size={"md"}
                  onClick={() => navigate("/about-us")}
                  alignItems={"center"}
                  _hover={{ color: "white", bgColor: "text.500" }}
                >
                  Read More
                </Button>
              </GridItem>
            </>
          )}

          {inspireSection?.length > 0 && (
            <>
              {" "}
              <GridItem mt={12}>
                <Image
                  src={inspireSection?.length > 0 && inspireSection[0]?.image}
                  alt=""
                />
              </GridItem>
              <GridItem mt={12} px={{ base: 2, md: 2, lg: 5 }}>
                <Text
                  fontWeight={500}
                  align={{ base: "justify" }}
                  color="text.500"
                  fontSize={{ base: "24", lg: "28" }}
                >
                  {inspireSection?.length > 0 && inspireSection[0]?.label}
                </Text>
                <Text
                  fontWeight={400}
                  align={{ base: "justify" }}
                  mt={3}
                  lineHeight={7}
                  fontSize={{ base: "14px", lg: "16px" }}
                >
                  {/* <b>​Bansi Gir Gaushala​ </b> was established in 2006 by{" "}
              <b>
                <span color="text.300">Shri Gopalbhai Sutariya </span>{" "}
              </b>
              as an effort to revive, regain and re-establish Bharat’s ancient
              Vedic culture. In Vedic traditions, the Cow was revered as Divine
              Mother, the Gaumata, and one which bestows health, knowledge, and
              prosperity. In Sanskrit, the word “Go” also means “Light”.
              <br />
              <br />
              With Gaumata blessings, Bansi Gir Gaushala is working as a living
              laboratory to revive Bharat’s ancient Vedic “Go Sanskriti”, and
              introduce time tested Vedic paradigms in all aspects of modern
              life, be it nutrition, health, education, agriculture or business. */}
                  {inspireSection?.length > 0 && inspireSection[0]?.description}
                  <a href="https://www.bansigir.in/mission">(Read More)</a>
                </Text>
              </GridItem>{" "}
            </>
          )}

          {missionSection?.length > 0 && (
            <>
              {" "}
              <GridItem mt={12}>
                <Image
                  src={missionSection?.length > 0 && missionSection[0]?.image}
                  alt=""
                />
              </GridItem>
              <GridItem mt={12} px={{ base: 2, md: 2, lg: 5 }}>
                <Text
                  fontWeight={500}
                  align={{ base: "justify" }}
                  color="text.500"
                  fontSize={{ base: "24px", lg: "30px" }}
                >
                  {missionSection?.length > 0 && missionSection[0]?.label}
                </Text>
                <Text
                  fontWeight={400}
                  align={{ base: "justify" }}
                  mt={3}
                  fontSize={{ base: "14", lg: "16" }}
                >
                  {/* Supporting <b>'SOSE-Sidha Kisan Se' </b> : ‘Samruddh Kisan,
              Samruddh Bharat’ (Prosperous farmers, prosperous Bharat) - Under
              this initiative we facilitate the supply of authentic natural farm
              produces from our network of thousands of trusted farmers. This
              helps farmers to find a ready market with steady revenue, while
              consumers can find authentic natural farm products at a reasonable
              price.
              <br />
              Supporting <b>'Gir Gauveda' </b> : ‘Swasth Parivar, Swasth Bharat’
              ( Healthy family, healthy Bharat) - Gir Gauveda exploits the
              synergies between Vedic Gopalan and Ayurveda following the highest
              traditions of ancient Gau Adharit Ayurveda. Our Ethical and Herbal
              Products like Ghee, Medicated Ghee, Herbal Supplements & Medicines
              and Herbal Beauty products have helped bring lasting health to
              thousands of people over the last few years. */}
                  {missionSection?.length > 0 && missionSection[0]?.description}
                </Text>
              </GridItem>
            </>
          )}
        </Grid>
      </Container>
      {/* <Container maxW={"container.xl"} px={0}>
        <Image src="./Suryan Organic/home/sweet_banner.jpg" alt="" />
      </Container> */}

      <Container maxW={"container.xl"} px={0}>
        <Text
          fontSize={{ base: "xl", sm: "2xl", xl: "3xl" }}
          bgColor={"bg.500"}
          px={{ base: 2, md: 8 }}
          py={4}
          textAlign={{ base: "center", md: "start" }}
          fontWeight={500}
        >
          {"Ethical and Natural Sweets"}
        </Text>
        <Carousel banners={middleBanners?.length > 0 && middleBanners} />
      </Container>

      {groceriesSection?.length > 0 &&
        groceriesSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} px={30}>
            <Text
              align="center"
              color={"text.500"}
              fontSize={{ md: 38, base: 24 }}
              mt={4}
            >
              {" "}
              {groceriesSection?.length > 0 && groceriesSection[0]?.label}
            </Text>
            <Grid
              templateColumns={{
                base: "repeat(2, 1fr)",
                md: "repeat(5, 1fr)",
              }}
              gap={{ base: 2, md: 2 }}
            >
              {groceriesSection[0]?.images?.length > 0 &&
                groceriesSection[0]?.images?.map((data) => (
                  <>
                    <GridItem cursor={"pointer"} align={"center"}>
                      <Image
                        h={"70%"}
                        mt={8}
                        cursor={"pointer"}
                        // transition="all 1s ease"
                        // _hover={{
                        //   transform: "scale(1.1)",
                        // }}
                        src={data.image}
                        alt={data.category_name}
                        onClick={() =>
                          navigate(
                            `/shop?page=1&category=${data.category}&category_name=${data.category_name}`
                          )
                        }
                      />
                      <GridItem
                        align={"center"}
                        color={"text.500"}
                        mt={2}
                        fontSize={"16"}
                      >
                        {data.category_name}
                      </GridItem>
                    </GridItem>
                  </>
                ))}
            </Grid>
          </Container>
        )}

      {newArrivalList?.length > 0 && (
        <ProductListSection
          title={newArrivalList?.length > 0 && newArrivalList[0]?.label}
          loading={loading}
          products={newArrivalList?.length > 0 && newArrivalList[0]?.images}
          type={isMobile && "carousal"}
        />
      )}

      {mustTryGirList?.length > 0 && (
        <ProductListSection
          title={mustTryGirList?.length > 0 && mustTryGirList[0]?.label}
          loading={loading}
          products={mustTryGirList?.length > 0 && mustTryGirList[0]?.images}
          type={isMobile && "carousal"}
        />
      )}

      {mustTryNaturalList?.length > 0 && (
        <ProductListSection
          title={mustTryNaturalList?.length > 0 && mustTryNaturalList[0]?.label}
          loading={loading}
          products={
            mustTryNaturalList?.length > 0 && mustTryNaturalList[0]?.images
          }
          type={isMobile && "carousal"}
        />
      )}
      {tryOurList?.length > 0 && (
        <ProductListSection
          title={tryOurList?.length > 0 && tryOurList[0]?.label}
          loading={loading}
          products={tryOurList?.length > 0 && tryOurList[0]?.images}
          type={isMobile && "carousal"}
        />
      )}
      {instantMixList?.length > 0 && (
        <ProductListSection
          title={instantMixList?.length > 0 && instantMixList[0]?.label}
          loading={loading}
          products={instantMixList?.length > 0 && instantMixList[0]?.images}
          type={isMobile && "carousal"}
        />
      )}
      {bestOfList?.length > 0 && (
        <ProductListSection
          title={bestOfList?.length > 0 && bestOfList[0]?.label}
          loading={loading}
          products={bestOfList?.length > 0 && bestOfList[0]?.images}
          type={isMobile && "carousal"}
        />
      )}

      {allTimeList?.length > 0 && (
        <ProductListSection
          title={allTimeList?.length > 0 && allTimeList[0]?.label}
          loading={loading}
          products={allTimeList?.length > 0 && allTimeList[0]?.images}
          type={isMobile && "carousal"}
        />
      )}
      {/* <ProductListSection
        title="Best Of The Year"
        loading={loading}
        products={homeData?.best_of_the_year}
      /> */}

      {masalaIamgeSection?.length > 0 && (
        <>
          {" "}
          <Container maxW={"container.xl"} px={"3.8%"}>
            <Image
              src={
                masalaIamgeSection?.length > 0 && masalaIamgeSection[0]?.image
              }
              alt=""
            />
          </Container>
          <Container maxW={"6xl"} centerContent>
            <Grid
              templateColumns={{
                base: "repeat(1, 1fr)",
                md: "repeat(5, 1fr)",
              }}
            >
              {masalaIamgeSection[0]?.images?.length > 0 &&
                masalaIamgeSection[0]?.images?.map((data) => (
                  <>
                    <GridItem align={"center"}>
                      <Image
                        h={"50%"}
                        mt={8}
                        border={"1px"}
                        borderColor={"text.500"}
                        //cursor={"pointer"}
                        src={data.image}
                        //onClick={() => navigate(data?.href)}
                      />
                      <GridItem align={"center"} mt={2} fontSize={18}>
                        {data.label}
                      </GridItem>
                    </GridItem>
                  </>
                ))}
            </Grid>
          </Container>{" "}
        </>
      )}

      <Container className="container" maxW="container.xl" centerContent>
        <Box
          w="100%"
          backgroundImage={
            "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
          }
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="text.500"
            fontSize={{ md: 33, base: 24 }}
            fontWeight={"500"}
            mx="auto"
            align={"center"}
            mt={3}
            pb={"10px"}
          >
            OUR VIDEOS
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
          gap={10}
          my={6}
          px={12}
        >
          {videos?.length > 0 &&
            videos?.map((data, index) => (
              <>
                {index % 2 === 0 ? (
                  <>
                    {/* Video on the left, text on the right */}
                    <GridItem>
                      <iframe
                        width={width}
                        height={height}
                        src={data?.embed_link}
                        title={data?.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </GridItem>
                    <GridItem>
                      <Text fontWeight={700} fontSize={"24px"}>
                        {data?.name}
                      </Text>
                      <Text
                        color={"text.300"}
                        fontSize={"18px"}
                        align={{ base: "justify" }}
                      >
                        {data?.description}
                      </Text>
                    </GridItem>
                  </>
                ) : (
                  <>
                    {/* Text on the left, video on the right */}
                    <GridItem>
                      <Text fontWeight={700} fontSize={"24px"}>
                        {data?.name}
                      </Text>
                      <Text
                        color={"text.300"}
                        fontSize={"18px"}
                        align={{ base: "justify" }}
                      >
                        {data?.description}
                      </Text>
                    </GridItem>
                    <GridItem>
                      <iframe
                        width={width}
                        height={height}
                        src={data?.embed_link}
                        title={data?.name}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                      ></iframe>
                    </GridItem>
                  </>
                )}
              </>
            ))}
         
        </Grid>
      </Container>
      <Container maxW={"container.xl"}>
        <Box
          w="100%"
          backgroundImage={
            "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
          }
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"}
        >
          <Heading
            color="brand.500"
            fontSize={{ md: 33, base: 24 }}
            fontWeight={"500"}
            mx="auto"
            align={"center"}
            mt={3}
            pb={"10px"}
          >
            BLOGS
          </Heading>
        </Box>
        <Grid
          templateColumns={{
            base: "repeat(1,1fr)",
            md: "repeat(2,1fr)",
            lg: "repeat(4,1fr)",
          }}
          px={2}
          py={3}
          spacing="40px"
        >
          {blogs?.slice(0, 8).map((blog) => (
            <GridItem key={blog.id} m={4}>
              <Card>
                <LinkBox h={400}>
                  <Image
                    src={blog.banner}
                    w="100%"
                    h="300px"
                    loading="lazy"
                    objectFit={"cover"}
                    borderRadius={5}
                    style={{
                      opacity: 1,
                      transition: "opacity 0.7s", // Note the corrected syntax here
                    }}
                  />
                  <LinkOverlay
                    _hover={{ color: "text.500" }}
                    href={`/blogs/${blog.id}/`}
                  >
                    <Heading size="sm" fontWeight={500} m={2}>
                      {blog.title}
                    </Heading>
                  </LinkOverlay>
                </LinkBox>
                <Flex m={2} justifyContent={"space-between"}>
                  <Text fontSize={"sm"} color="gray.500">
                    {new Intl.DateTimeFormat("en-CA", {
                      dateStyle: "long",
                      timeZone: "Asia/Kolkata",
                    }).format(new Date(blog.published_at))}
                  </Text>
                  <Text
                    fontSize={"sm"}
                    fontWeight={600}
                    color={"brand.500"}
                    onClick={() => navigate(`/blogs/${blog.id}/`)}
                    cursor={"pointer"}
                  >
                    Read more
                    <ChevronRightIcon />
                  </Text>
                </Flex>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </Container>
      <Testimonials />
     {statisticsSection?.length>0 && <Container backgroundColor={"bg.500"} maxW={"container.xl"} py={2}>
        <SimpleGrid
          columns={[2, 3, null, 6]}
          px={6}
          maxW={"container.xl"}
          my={6}
          backgroundColor={"bg.500"}
          align="center"
          spacingX={{ base: "10vw", md: "30px" }}
          spacingY="40px"
        >
          {statisticsSection?.length >0 && statisticsSection?.map((data)=>(
             <Stat>
             <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>{data?.value}</StatNumber>
             <StatHelpText color="gray.600">{data?.name}</StatHelpText>
           </Stat>
          ))}
       
        </SimpleGrid>
      </Container>}
      {brandSection?.length > 0 &&
        brandSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Box
              w="100%"
              backgroundImage={
                "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
              }
              backgroundSize="100%"
              backgroundPosition="50% 100%"
              backgroundRepeat={"no-repeat"}
            >
              <Heading
                color="text.500"
                fontSize={{ md: 33, base: 24 }}
                fontWeight={"500"}
                mx="auto"
                align={"center"}
                mt={3}
                pb={"10px"}
              >
                {brandSection?.length > 0 && brandSection[0]?.label}
              </Heading>
            </Box>
            <Grid
              templateColumns={{
                base: "repeat(2,1fr)",
                md: "repeat(3,1fr)",
                xl: "repeat(6,1fr)",
              }}
              spacing={{ base: 10, md: 14 }}
              py={3}
              px={{ base: 15, md: 20, lg: 24 }}
            >
              {brandSection?.length > 0 &&
                brandSection[0]?.images?.map((brand, index) => (
                  <GridItem
                    as={RouterLink}
                    to={`/shop?page=1&category=${brand.category}` ?? "#"}
                  >
                    <Image
                      as={LazyLoadImage}
                      key={index}
                      src={brand.image}
                      boxSize={{
                        base: "150px",
                        md: "150px",
                        lg: "180px",
                      }}
                      alt={brand.category_name}
                      style={{
                        opacity: 1,
                        transition: "opacity 0.7s", // Note the corrected syntax here
                      }}
                    />
                  </GridItem>
                ))}
            </Grid>
          </Container>
        )}
      {awardsSection?.length > 0 &&
        awardsSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Box
              w="100%"
              backgroundImage={
                "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
              }
              backgroundSize="100%"
              backgroundPosition="50% 100%"
              backgroundRepeat={"no-repeat"}
            >
              <Heading
                color="text.500"
                fontSize={{ md: 33, base: 24 }}
                fontWeight={"500"}
                mx="auto"
                align={"center"}
                mt={3}
                pb={"10px"}
              >
                {awardsSection?.length > 0 && awardsSection[0]?.label}
              </Heading>
            </Box>
            <Text my={5} textAlign={"center"} color="text.300">
              We are committed to quality and each of our facilities is
              independently certified by an industry-accredited agency.
            </Text>
            <Flex
              justifyContent="space-evenly"
              direction={{ base: "column", md: "row" }}
              align="center"
              gap={12}
              pt={1}
              pb={6}
            >
              <LazyLoadImage
                src={
                  awardsSection[0]?.images?.length > 0 &&
                  awardsSection[0]?.images[0]?.image
                }
                alt="global-certificate"
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
              <LazyLoadImage
                src={
                  awardsSection[0]?.images?.length > 0 &&
                  awardsSection[0]?.images[1]?.image
                }
                alt="ciolook-certificate"
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </Flex>
          </Container>
        )}
      {licensesSection?.length > 0 &&
        licensesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Box
              w="100%"
              backgroundImage={
                "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
              }
              backgroundSize="100%"
              backgroundPosition="50% 100%"
              backgroundRepeat={"no-repeat"}
            >
              <Heading
                color="text.500"
                fontSize={{ md: 33, base: 24 }}
                fontWeight={"500"}
                mx="auto"
                align={"center"}
                mt={3}
                pb={"10px"}
              >
                {licensesSection?.length > 0 && licensesSection[0].label}
              </Heading>
            </Box>
            <Flex justify="center" align="center" gap={10} pt={1} pb={10}>
              <LazyLoadImage
                src={licensesSection?.length > 0 && licensesSection[0].image}
                alt="Coffee Board"
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </Flex>
            <LazyLoadImage
              w="100%"
              src={
                "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
              }
              mx="auto"
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
          </Container>
        )}
      {nonGMOSection?.length > 0 &&
        nonGMOSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} centerContent pt={10} pb={8}>
            <Image
              w={{ md: "70%" }}
              src={nonGMOSection?.length > 0 && nonGMOSection[0].image}
            />
          </Container>
        )}

      {servicesSection?.length > 0 &&
        servicesSection[0]?.is_visible_on_website === true && (
          <Container maxW={{ base: "100vw", md: "container.xl" }}>
            <Box
              w="100%"
              backgroundImage={
                "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
              }
              backgroundSize="100%"
              backgroundPosition="50% 100%"
              backgroundRepeat={"no-repeat"}
            >
              <Heading
                color="text.500"
                fontSize={{ md: 33, base: 24 }}
                fontWeight={"500"}
                mx="auto"
                align={"center"}
                mt={3}
                pb={"10px"}
              >
                {servicesSection?.length > 0 && servicesSection[0].label}
              </Heading>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <LazyLoadImage
                src={
                  servicesSection?.length > 0 &&
                  servicesSection[0]?.images[0].image
                }
                w={{ base: "100%", md: "100%" }}
                alt=""
                py={4}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </Box>
          </Container>
        )}

      {availableSection?.length > 0 &&
        availableSection[0]?.is_visible_on_website === true && (
          <Container maxW={"container.xl"} mb={5} px={0} centerContent>
            <Box
              w="100%"
              backgroundImage={
                "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
              }
              backgroundSize="100%"
              backgroundPosition="50% 100%"
              backgroundRepeat={"no-repeat"}
            >
              <Heading
                color="text.500"
                fontSize={{ md: 33, base: 24 }}
                fontWeight={"500"}
                mx="auto"
                align={"center"}
                mt={3}
                pb={"10px"}
              >
                {availableSection?.length > 0 && availableSection[0].label}
              </Heading>
            </Box>
            <Image
              src={
                availableSection?.length > 0 &&
                availableSection[0]?.images[0].image
              }
              w={"container.xl"}
              mt={3}
              alt=""
              style={{
                opacity: 1,
                transition: "opacity 0.7s", // Note the corrected syntax here
              }}
            />
          </Container>
        )}
      {!checkLogin().isLoggedIn && (
        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />
      )}
      <ScrollToTop />
      <Footer />
    </>
  );
}
