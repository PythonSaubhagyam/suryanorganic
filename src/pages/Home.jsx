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

const productItems = [
  // {
  //   id: 7565,
  //   imageSrc:
  //     "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/rakhi.jpg",
  // },
  {
    id: 8663,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/imgpsh_fullsize_anim_sose_website.jpg",
  },
  {
    id: 8859,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/imgpsh_fullsize_anim_sose_image.jpg",
  },
  {
    id: 8924,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/baby_cream.jpg",
  },

  // {
  //   id: 8661,
  //   imageSrc:
  //     "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/new_arri/Almond+Oats.jpg",
  // },
];

const rakhiItems = [
  {
    id: 9232,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/Assorted+sweets+label+design-01.jpg",
  },
  {
    id: 9231,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/Assorted+sweets+label+design-02.jpg",
  },
  {
    id: 9233,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/Assorted+sweets+label+design-03.jpg",
  },
  {
    id: 9230,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/Assorted+sweets+label+design-04.jpg",
  },
  {
    id: 9237,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/Assorted+sweets+label+design-05.jpg",
  },
  {
    id: 9241,
    imageSrc:
      "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/Assorted+sweets+label+design-06.jpg",
  },

  // {
  //   id: 8661,
  //   imageSrc:
  //     "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/new_arri/Almond+Oats.jpg",
  // },
];

const brands = [
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/01.png",
    alt: "Gir Gauveda",
    href: "/shop?page=1&category=278",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/02.png",
    alt: "So Good",
    href: "/shop?page=1&category=317",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/03.png",
    alt: "Spices Board",
    href: "/shop?page=1&category=975",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/04.png",
    alt: "Himalayan Mountain",
    href: "/shop?page=1&category=330",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/05.png",
    alt: "CoffeeCo",
    href: "/shop?page=1&search=cof",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/06.png",
    alt: "Shishu veda",
    href: "/shop?page=1&search=yashoda",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/07.png",
    alt: "Vama Herbal",
    href: "/shop?page=1&search=VAMA",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/08.png",
    alt: "Kapita",
    href: "/shop?page=1&search=Kapita",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/09.png",
    alt: "Pureco",
    href: "/shop?page=1&search=pureco",
  },
  // {
  //   src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/10.png",
  //   alt: "Cocoa",
  //   href: "/shop?page=1&search=cocoa",
  // },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/11.png",
    alt: "Choci Logo",
    href: "/shop?page=1&search=choci=758",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/12.png",
    alt: "D'SOSE Logo",
    href: "/shop?page=1&search=d%27sose=771",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/18.webp",
    alt: "So Millet",
    href: "/shop?page=1&category=585&category_name=SO+Millet",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/14.png",
    alt: "OGS Logo",
    href: "/shop?page=1&category=288&category_name=Gifting",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/15.png",
    alt: "Sidha Kisan Se",
    href: "/shop?page=1&search=Sidha%20kisan%20se=767",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/16.png",
    alt: "Sose Pure Nature",
    href: "/shop?page=1&category=492&category_name=SOSE Pure Nature",
  },
  {
    src: "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/brands/17.png",
    alt: "Sweekies Logo",
    href: "/shop?page=1&search=sweekies=896",
  },
];

export default function Home() {
  const [isFullScreen] = useMediaQuery("(min-width: 768px)");
  const width = useBreakpointValue({ base: "100%", lg: "100%" });
  const height = useBreakpointValue({ base: "300", lg: "400" });
  const [banners, setBanners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile] = useMediaQuery("(max-width: 480px)");
  const [homeData, setHome] = useState({});
  // let [isFull] = useMediaQuery("(max-width:1920px)");
  const [blogs, setBlogs] = useState([]);
  const isMobiles = width <= 768;
  const navigate = useNavigate();
  useEffect(() => {
    CheckOrSetUDID();
    getHomePageData();
    getBlogs();
  }, []);

  async function getHomePageData() {
    const response = await client.get("/home");
    if (response.data.status === true) {
      setBanners(response.data.banners);
      setHome(response.data);
    }
    setLoading(false);
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

  const NaturalProduct = [
    {
      src: "./Suryan Organic/home/Grain & Daliya.jpg",
      alt: "Grains Daliya",
      title: "Grains Daliya",
      href: "/shop?page=1&category=585&category_name=Grains Daliya",
    },

    {
      src: "./Suryan Organic/home/Flours - Atta.jpg",
      alt: "Flours - Atta",
      title: "Flours - Atta",
      href: "/shop?page=1&category=587&category_name=Flours - Atta",
    },

    {
      src: "./Suryan Organic/home/Pulses & Dals.jpg",
      alt: "Pulses Dals",
      title: "Pulses Dals",
      href: "/shop?page=1&category=589&category_name=Pulses Dals",
    },

    {
      src: "./Suryan Organic/home/Ghee & Oils.jpg",
      alt: "Ghee Oils",
      title: "Ghee Oils",
      href: "/shop?page=1&category=591&category_name=Ghee Oils",
    },

    {
      src: "./Suryan Organic/home/Handmade Masala.jpg",
      alt: "Handmade Masala",
      title: "Handmade Masala",
      href: "/shop?page=1&category=595&category_name=Handmade Masala",
    },

    {
      src: "./Suryan Organic/home/Nuts & Dryfruits.jpg",
      alt: "Nuts Dryfruits",
      title: "Nuts Dryfruits",
      href: "/shop?page=1&category=759&category_name=Nuts Dryfruits",
    },

    {
      src: "./Suryan Organic/home/Caramel & Muesli.jpg",
      alt: "Caramel Muesli",
      title: "Caramel Muesli",
      href: "/shop?page=1&category=626&category_name=Caramel Muesli",
    },

    {
      src: "./Suryan Organic/home/Ayurvedic Herbs.jpg",
      alt: "Ayurvedic Herbs",
      title: "Ayurvedic Herbs",
      href: "/shop?page=1&category=767&category_name=Ayurvedic Herbs",
    },

    {
      src: "./Suryan Organic/home/Health Sweetener.jpg",
      alt: "Healthy Sweetener",
      title: "Healthy Sweetener",
      href: "/shop?page=1&category=789&category_name=Healthy Sweetener",
    },

    {
      src: "./Suryan Organic/home/Super Foods.jpg",
      alt: "Super Foods",
      title: "Super Foods",
      href: "/shop?page=1&category=830&category_name=Super Foods",
    },
  ];
  const journalImage = [
    {
      src: "./Suryan Organic/home/farming education.png",
      alt: "Farmer Education",
      title: "Farmer Education",
    },

    {
      src: "./Suryan Organic/home/farming sourcing.png",
      alt: "Farmer Sourcing",
      title: "Farmer Sourcing",
    },

    {
      src: "./Suryan Organic/home/suryanorganic.jpg",
      alt: "In House Prossessing",
      title: "In House Prossessing",
    },

    {
      src: "./Suryan Organic/home/verification.png",
      alt: "Verification",
      title: "Verification",
    },

    {
      src: "./Suryan Organic/home/01 (1).jpg",
      alt: "Ethical & Natural Products",
      title: "Ethical & Natural Products",
    },
  ];

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
          <Carousel banners={banners} />
        )}
      </Container>
      <Container maxW={"container.xl"} mb={5} centerContent>
        <LazyLoadImage
          src={
            "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/Rakhi+Hamper-02.jpg"
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
          {rakhiItems?.map((product) => (
            <GridItem
              key={product.id}
              onClick={() => {
                if (product.id) {
                  navigate(`/products/${product.id}`);
                }
              }}
              cursor={product.id ? "pointer" : "default"}
            >
              <LazyLoadImage
                src={product.imageSrc}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s",
                }}
              />
            </GridItem>
          ))}
        </Grid>
        <Button
          as={Link}
          mb={8}
          mt={3}
          size={"lg"}
          border={"1px"}
          borderRadius={"8px"}
          variant='solid'
          colorScheme="brand"
          _hover={{
             color:"brand.500",
             bgColor:"#fff",
             border:"1px",
             borderColor:"brand.500",
            textDecoration: "none",
          }}
          href={"/shop?page=1&category=277&category_name=Rakhi%20Festival"}
        >
          View more 
        </Button>
      </Container>


      <Container maxW={"container.xl"} mb={5} centerContent>
        <LazyLoadImage
          src={
            "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/image/sose_newarrival.jpg"
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
            lg: "repeat(3, 1fr)",
          }}
          gap={6}
          my={6}
          px={15}
        >
          {productItems?.map((product) => (
            <GridItem
              key={product.id}
              onClick={() => {if(product.id){navigate(`/products/${product.id}`)};}}
              cursor={product.id ? "pointer" : "default"}
            >
              <LazyLoadImage
                src={product.imageSrc}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s",
                }}
              />
            </GridItem>
          ))}
        </Grid>
      </Container>

      <Container mb={5} px={0} maxW={"container.xl"} centerContent>
        <LazyLoadImage
          src={
            "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/03.jpg"
          }
          alt=""
          style={{
            opacity: 1,
            transition: "opacity 0.7s", // Note the corrected syntax here
          }}
        />
      </Container>

      <Container maxW={"6xl"} mb={5}>
        <Grid
          templateColumns={{
            md: "repeat(2, 1fr)",
            base: "repeat(1, 1fr)",
          }}
        >
          <GridItem mt={6}>
            <Image src="./Suryan Organic/home/suryan- sec-2.jpg" alt="" />
          </GridItem>
          <GridItem mt={6} px={{ base: 2, md: 2, lg: 5 }}>
            <Text
              fontWeight={500}
              align={{ base: "justify" }}
              color="text.500"
              fontSize={{ base: "24", lg: "28" }}
            >
              Who We Are
            </Text>
            <Text
              fontWeight={400}
              align={{ base: "justify" }}
              mt={4}
              fontSize={{ base: "14px", lg: "16px" }}
            >
              <span>Suryan Organic </span> is founded by a family of farmers who
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
              farming & production practices that are friendly to the ecosystem.
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

          <GridItem mt={12}>
            <Image
              src="./Suryan Organic/home/gopal bhai suryan organci.jpg"
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
              Inspire By
            </Text>
            <Text
              fontWeight={400}
              align={{ base: "justify" }}
              mt={3}
              fontSize={{ base: "14px", lg: "16px" }}
            >
              <b>​Bansi Gir Gaushala​ </b> was established in 2006 by{" "}
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
              life, be it nutrition, health, education, agriculture or business.
              <a href="https://www.bansigir.in/mission">(Read More)</a>
            </Text>
          </GridItem>

          <GridItem mt={12}>
            <Image src="./Suryan Organic/home/suryan- sec-2.jpg" alt="" />
          </GridItem>
          <GridItem mt={12} px={{ base: 2, md: 2, lg: 5 }}>
            <Text
              fontWeight={500}
              align={{ base: "justify" }}
              color="text.500"
              fontSize={{ base: "24px", lg: "30px" }}
            >
              Our Mission
            </Text>
            <Text
              fontWeight={400}
              align={{ base: "justify" }}
              mt={3}
              fontSize={{ base: "14", lg: "16" }}
            >
              Supporting <b>'SOSE-Sidha Kisan Se' </b> : ‘Samruddh Kisan,
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
              thousands of people over the last few years.
            </Text>
          </GridItem>
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
          mb={8}
          textAlign={{ base: "center", md: "start" }}
          fontWeight={500}
        >
          {"Ethical and Natural Sweets"}
        </Text>
        <Carousel
          banners={[
            {
              image: "./Suryan Organic/home/gulkand_dry_fruit.jpg",
              alt_text: "sweet1",
              image_url: "/shop?page=1&category=492",
            },
            {
              image: "./Suryan Organic/home/kaju-katari.webp",
              alt_text: "sweet2",
              image_url: "/shop?page=1&category=492",
            },

            {
              image: "./Suryan Organic/home/sugarFree.jpg",
              alt_text: "sweet4",
              image_url: "/shop?page=1&category=492",
            },
          ]}
        />
      </Container>

      <Container maxW={"container.xl"} centerContent>
        <Text
          align="center"
          color={"text.500"}
          fontSize={{ md: 38, base: 24 }}
          mt={4}
        >
          {" "}
          Our Natural Product Range
        </Text>
      </Container>

      <Container maxW={"container.xl"} px={30}>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(5, 1fr)",
          }}
        >
          {NaturalProduct?.map((data) => (
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
                  src={data.src}
                  onClick={() => navigate(data?.href)}
                />
                <GridItem
                  align={"center"}
                  color={"text.500"}
                  mt={2}
                  fontSize={"16"}
                >
                  {data.title}
                </GridItem>
              </GridItem>
            </>
          ))}
        </Grid>
      </Container>

      <ProductListSection
        title="New Arrival : VAMA - Herbal & Natural Beauty Care"
        loading={loading}
        products={homeData?.new_arrival_gir_gauveda}
      />

      <ProductListSection
        title="Must Try: Gir Gau Ayurvedic Products"
        loading={loading}
        products={homeData?.must_try_gir_gau_ayurvedic_products}
      />

      <ProductListSection
        title="Must Try: Natural Products"
        loading={loading}
        products={homeData?.must_try_natural_products}
      />
      <ProductListSection
        title="Try Our New Products"
        loading={loading}
        products={homeData?.new_arrival}
      />
      <ProductListSection
        title="Instant Mixes"
        loading={loading}
        products={homeData?.instant_mix}
      />

      <ProductListSection
        title="Best of the Month"
        loading={loading}
        products={homeData?.best_of_the_month}
      />

      <ProductListSection
        title="All Time Best Sellers"
        loading={loading}
        products={homeData?.best_seller_of_all_time}
      />

      {/* <ProductListSection
        title="Best Of The Year"
        loading={loading}
        products={homeData?.best_of_the_year}
      /> */}

      <Container maxW={"container.xl"} px={"3.8%"}>
        <Image src="./Suryan Organic/home/masala-suryan-organic.jpg" alt="" />
      </Container>

      <Container maxW={"6xl"} centerContent>
        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(5, 1fr)",
          }}
        >
          {journalImage?.map((data) => (
            <>
              <GridItem align={"center"}>
                <Image
                  h={"50%"}
                  mt={8}
                  border={"1px"}
                  borderColor={"text.500"}
                  //cursor={"pointer"}
                  src={data.src}
                  //onClick={() => navigate(data?.href)}
                />
                <GridItem align={"center"} mt={2} fontSize={18}>
                  {data.title}
                </GridItem>
              </GridItem>
            </>
          ))}
        </Grid>
      </Container>

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
          <GridItem>
            <iframe
              width={width}
              height={height}
              src="https://www.youtube.com/embed/031OJGP9ePI"
              title="Behind the scenes of the natural and ethical manufacturing at our factory"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <Text fontWeight={700} fontSize={"24px"}>
              Behind the scenes of the natural and ethical manufacturing at our
              factory
            </Text>
            <Text
              color={"text.300"}
              fontSize={"18px"}
              align={{ base: "justify" }}
            >
              What the eyes don’t see, the mind doesn’t believe. And that’s why
              we are taking you on a tour of our factory where you can see for
              yourself how every product of ours is made without any
              preservatives, using only the best of products, hand-packaged and
              ultimately delivered to you and for you, with love.
            </Text>
          </GridItem>
          {!isMobile ? (
            <>
              <GridItem>
                <Text mt={3} fontWeight={600} fontSize={24}>
                  We welcome you to visit our stores or website for products
                  that support 'Go Adharit Jeevan Shailee'
                </Text>
                <Text
                  // color={"text.300"}
                  fontSize={18}
                  align={{ base: "justify" }}
                  mt={3}
                >
                  SOSE is inspired by the mission of @bansigir which is working
                  to revive Bharat's ancient 'Go Sanskriti', and regain its past
                  glory. <br />
                  A Go Adharit Jeevan Shailee can bring changes in the fields of
                  nutrition, health, agriculture and education. <br />
                  At our gaushala, we aim to make sure that our Mother and her
                  calf are given enough respect and care so that they are able
                  to live in utmost bliss. <br />
                  They are provided the best and nutritious food and that too
                  with free feeding which in turn ensures that the milk we are
                  consuming via them is also full of nutrients and doesn’t have
                  any preservatives. <br />
                  The milking process is also done in such a Vedic,
                  non-exploitative manner there is enough for her child too.
                  <br />
                  The Jeevans Shailee is centred around promoting and placing
                  emphasis on Go Adharit Ahar (Food & Nutrition), Go Adharit
                  Krishi (Agriculture & Environment) Go Adharit Chikitsa (Health
                  & Medicine), Go Adharit Shikshan (Education & Culture), Go
                  Adharit Arthavyavastha (Economics & Abundance).
                </Text>
              </GridItem>
              <GridItem>
                <iframe
                  title="YouTube video player"
                  src="https://www.youtube.com/embed/KWTWI8hhMIQ"
                  width={width}
                  height={height}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </GridItem>
            </>
          ) : (
            <>
              <GridItem>
                <iframe
                  title="YouTube video player"
                  src="https://www.youtube.com/embed/KWTWI8hhMIQ"
                  width={width}
                  height={height}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </GridItem>
              <GridItem>
                <Heading fontSize={"12px"}>
                  We welcome you to visit our stores or website for products
                  that support 'Go Adharit Jeevan Shailee'
                </Heading>
                <Text
                  color={"text.300"}
                  fontSize={13}
                  align={{ base: "justify" }}
                  mt={2}
                >
                  SOSE is inspired by the mission of @bansigir which is working
                  to revive Bharat's ancient 'Go Sanskriti', and regain its past
                  glory.
                </Text>
                <Text fontSize={13} align={{ base: "justify" }} mt={2}>
                  {" "}
                  A Go Adharit Jeevan Shailee can bring changes in the fields of
                  nutrition, health, agriculture and education.
                </Text>
                <Text fontSize={13} align={{ base: "justify" }} mt={2}>
                  {" "}
                  At our gaushala, we aim to make sure that our Mother and her
                  calf are given enough respect and care so that they are able
                  to live in utmost bliss.
                </Text>
                <Text fontSize={13} align={{ base: "justify" }} mt={2}>
                  {" "}
                  They are provided the best and nutritious food and that too
                  with free feeding which in turn ensures that the milk we are
                  consuming via them is also full of nutrients and doesn’t have
                  any preservatives.
                </Text>
                <Text fontSize={13} align={{ base: "justify" }} mt={2}>
                  {" "}
                  The milking process is also done in such a Vedic,
                  non-exploitative manner there is enough for her child too.
                </Text>
                <Text fontSize={13} align={{ base: "justify" }} mt={2}>
                  The Jeevans Shailee is centred around promoting and placing
                  emphasis on Go Adharit Ahar (Food & Nutrition), Go Adharit
                  Krishi (Agriculture & Environment) Go Adharit Chikitsa (Health
                  & Medicine), Go Adharit Shikshan (Education & Culture), Go
                  Adharit Arthavyavastha (Economics & Abundance).
                </Text>
              </GridItem>
            </>
          )}

          <GridItem>
            <iframe
              width={width}
              height={height}
              src="https://www.youtube.com/embed/t36qiknv990"
              title="From Bharat to your homes, Sidha Kisan Se..."
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </GridItem>
          <GridItem>
            <Text fontWeight={600} fontSize={24} mt={1}>
              From Bharat (India) to your homes, Sidha <br /> Kisan Se...
            </Text>
            <Text fontSize={18} align={{ base: "justify" }} mt={2}>
              {" "}
              Farmers belong to Bharat (India) and Bharat (India) is made by the
              farmers.
            </Text>
            <Text fontSize={18} align={{ base: "justify" }} mt={2}>
              It is this very belief that guides us in the pursuit of adopting
              and continuing ethical means of farming, one which benefits the
              farmers as well as the consumers who have placed faith in our
              products.
            </Text>

            <Text fontSize={18} align={{ base: "justify" }} mt={2}>
              {" "}
              What makes our products ethical and natural are the farmers who
              sow the land.
            </Text>
            <Text fontSize={18} align={{ base: "justify" }} mt={2}>
              {" "}
              These are the farmers who understand the harmony between nature
              and mankind, embrace organic rhythms that echo the ancient
              whispers of Mother Earth.
            </Text>
            <Text fontSize={18} align={{ base: "justify" }} mt={2}>
              {" "}
              With reverence, they till the land, guided by an intrinsic
              knowledge of soil health and biodiversity, nurturing ecosystems
              that breathe life into their crops.
            </Text>
            <Text fontSize={18} align={{ base: "justify" }} mt={2}>
              {" "}
              And that’s why everything that you consume from our stores, comes
              directly from the farmers.{" "}
            </Text>
          </GridItem>
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
      <Container backgroundColor={"bg.500"} maxW={"container.xl"} py={2}>
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
          <Stat>
            <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>600+</StatNumber>
            <StatHelpText color="gray.600">Natural Products</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>
              70000+
            </StatNumber>
            <StatHelpText color="gray.600">Satisfied Clients</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>1560+</StatNumber>
            <StatHelpText color="gray.600">Cities & Towns</StatHelpText>
          </Stat>
          <Stat>
            <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>7+</StatNumber>
            <StatHelpText color="gray.600">Countries</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>14+</StatNumber>
            <StatHelpText color="gray.600">Stores</StatHelpText>
          </Stat>

          <Stat>
            <StatNumber fontSize={{ base: "3xl", md: "3xl" }}>
              11<sup>th</sup>
            </StatNumber>
            <StatHelpText color="gray.600">Generation of Farmers</StatHelpText>
          </Stat>
        </SimpleGrid>
      </Container>
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
            mt={8}
            align={"center"}
            mb={"5"}
            pb={"10px"}
          >
            BRAND PARTNERS
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
          px={{ base: 15, md: 20, lg: 20 }}
        >
          {brands?.map((brand, index) => (
            <GridItem as={RouterLink} to={brand?.href ?? "#"}>
              <Image
                as={LazyLoadImage}
                key={index}
                src={brand.src}
                boxSize={{
                  base: "150px",
                  md: "150px",
                  lg: "180px",
                }}
                alt={brand.alt}
                cursor={"pointer"}
                style={{
                  opacity: 1,
                  transition: "opacity 0.7s", // Note the corrected syntax here
                }}
              />
            </GridItem>
          ))}
        </Grid>
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
            OUR CERTIFICATIONS & AWARDS
          </Heading>
        </Box>
        <Text mb={9} mt={3} textAlign={"center"} color={"text.300"}>
          “We are committed to quality and each of our facilities is
          independently certified by an industry-accredited agency.”
        </Text>
        <Flex
          justifyContent="space-evenly"
          direction={{ base: "column", md: "row" }}
          align="center"
          gap={12}
          pt={1}
          pb={9}
        >
          <LazyLoadImage
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/global-certificate.jpg"
            }
            alt="global-certificate"
            style={{
              opacity: 1,
              transition: "opacity 0.7s",
            }}
          />
          <LazyLoadImage
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/ciolook-certificate.jpg"
            }
            alt="ciolook-certificate"
            style={{
              opacity: 1,
              transition: "opacity 0.7s",
            }}
          />
        </Flex>
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
            align={"center"}
            mb={"5"}
            pb={"10px"}
          >
            LICENSES & AFFILIATIONS
          </Heading>
        </Box>
        <Flex justify="center" align="center" gap={10} pb={10}>
          <LazyLoadImage
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/license.jpg"
            }
            width={"85%"}
            alt="Coffee Board"
            style={{
              opacity: 1,
              transition: "opacity 0.7s",
            }}
          />
        </Flex>
        <Image
          w="100%"
          src={
            "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"
          }
        />
        <Container maxW={"container.xl"} centerContent>
          <Image
            w={{ md: "70%" }}
            mt={12}
            mb={12}
            src={"./Suryan Organic/home/suryan_organic.jpg"}
            style={{
              opacity: 1,
              transition: "opacity 0.7s",
            }}
          />
        </Container>
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
            fontSize={{ md: 33, base: 20 }}
            fontWeight={500}
            mx="auto"
            align={"center"}
            mt={10}
          >
            OUR SERVICES ARE AVAILABLE IN
          </Heading>
        </Box>
        <Container maxW={"container.xl"} px={0}>
          <Image
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/Map.webp"
            }
            w={"100%"}
            alt=""
            py={4}
            style={{
              opacity: 1,
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Container>
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
            fontWeight={500}
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
            AVAILABLE AT
          </Heading>
        </Box>
        <Container maxW={"container.xl"} mb={5} px={0} centerContent>
          <Image
            src={
              "https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/01.jpg"
            }
            w={"container.xl"}
            alt=""
            style={{
              opacity: 1,
              transition: "opacity 0.7s",
            }}
          />
        </Container>
      </Container>
      <ScrollToTop/>
      <Footer />
    </>
  );
}
