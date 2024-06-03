import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import {
  Box,
  Container,
  VStack,
  Image,
  Text,
  Grid,
  GridItem,
  Heading,
  Button,
} from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
const AboutUs = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      <Navbar />

      <Container maxW={"container.xl"} py={8} px={0} position="relative">
        <Image src="https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/aboutUs.jpg" />

        <Text
          pb={2}
          color={"brand.100"}
          textAlign={"center"}
          fontSize={{ lg: "7xl", md: "5xl", base: "xl" }}
          fontWeight="600"
          position="absolute"
          top="50%"
          left="50%"
          transform="translate(-50%, -50%)"
          zIndex="1"
          // Optional: Add background to improve text readability
        >
          About Us
        </Text>
      </Container>
      <Container maxW={"container.xl"} mb={4} px={0} centerContent>
        {/* <Text
            pb={2}
            color={"brand.100"}
            textAlign={"center"}
            textShadow={"1px 1px 2px lightgreen"}
            fontSize="7xl"
            fontWeight="black"
          >
            About us
          </Text> */}
        {/* </Box> */}

        <Container
          maxW={"container.xl"}
          centerContent
          pt={{ base: 2, md: 6, lg: 12 }}
        >
          <Image
            src="./Suryan Organic/about-us/banner dada.jpg"
            alt=""
            w={{ md: "90%" }}
          />
        </Container>
        <Container maxW="6xl">
          <Box
            fontWeight={"600"}
            color={"text.100"}
            fontSize={25}
            mt={3}
            alignContent={"flex-start"}
          >
            Who We Are
          </Box>
          <Text fontSize={14.5} pt={3}>
            <b>Suryan Organic</b> is founded by a family of farmers who are
            engaged in Bharat's traditional & fully natural farming practices
            for more than 11 generations. The Founders firmly believe that
            embracing modernity while reviving Bharat's ancient & vibrant
            cultural traditions holds the key to solving the problems facing the
            country as well as humanity as a whole.
            <br />
            <br />
            <b>Suryan Organic</b> is inspired by " <b>Bansi Gir Gaushala</b>" ,
            and its mission to revive Bharat's ancient and glorious ‘Gau
            Sanskriti’. We aim to make a positive difference to rural economies
            by empowering farmers and helping them adopt ethical farming &
            production practices that are friendly to the ecosystem.
          </Text>

          <Box
            fontWeight={"600"}
            color={"text.100"}
            fontSize={25}
            mt={3}
            alignContent={"flex-start"}
          >
            Inspire By
          </Box>
          <Text fontSize={14.5} pt={3}>
            <b>Bansi Gir Gaushala</b> was established in 2006 by Shri Gopalbhai
            Sutariya as an effort to revive, regain and re-establish Bharat’s
            ancient Vedic culture. In Vedic traditions, the Cow was revered as
            Divine Mother, the Gaumata, and one which bestows health, knowledge,
            and prosperity. In Sanskrit, the word “Go” also means “Light”.
            <br />
            <br />
            <b>
              With Gaumata blessings, Bansi Gir Gaushala is working as a living
              laboratory to revive Bharat’s ancient Vedic “Go Sanskriti”, and
              introduce time tested Vedic paradigms in all aspects of modern
              life, be it nutrition, health, education, agriculture or business.
              (Read More)
            </b>
          </Text>
          <Box
            fontWeight={"600"}
            color={"text.100"}
            fontSize={25}
            mt={3}
            alignContent={"flex-start"}
          >
            Our Mission
          </Box>
          <Text fontSize={14.5} pt={3}>
            Supporting <b>'SOSE-Sidha Kisan Se’:</b> ‘Samruddh Kisan, Samruddh
            Bharat’ (Prosperous farmers, prosperous Bharat) - Under this
            initiative we facilitate the purchase and supply of authentic
            natural farm produces from our network of thousands of trusted
            farmers. This helps farmers to find a ready market with steady
            revenue, while consumers can find authentic natural farm products at
            a reasonable price.
            <br />
            <br />
            Supporting <b>'Gir Gauveda’:</b> ‘Swasth Parivar, Swasth Bharat’
            (Healthy family, Healthy Bharat) - Gir Gauveda exploits the
            synergies between Vedic Gopalan and Ayurveda following the highest
            traditions of ancient Gau Adharit Ayurveda. Our Ethical and Herbal
            Products like Ghee, Medicated Ghee, Herbal Supplements & Medicines
            and Herbal Beauty products have helped bring lasting health to
            thousands of people over the last few years
          </Text>

          <Text
            fontWeight={"500"}
            color={"text.100"}
            fontSize={22}
            mt={5}
            alignContent={"flex-start"}
          >
            When we think about health and wellness for all…
          </Text>

          <Text
            fontWeight={"400"}
            mt={6}
            fontSize={18}
            alignContent={"flex-start"}
          >
            <b>
              {" "}
              … we realize it is important to begin with food, how it is grown
              and people’s mindsets.{" "}
            </b>
          </Text>

          <Text fontSize={15} pt={6}>
            Our purpose is to make food production and distribution more
            sustainable. We believe that everyone has the right to safe food,
            grown with lots of love and care. We encourage people to know more
            about where their food comes from, who grows it and most importantly
            how.
          </Text>

          <Text
            fontWeight={"500"}
            color={"text.100"}
            fontSize={22}
            mt={12}
            alignContent={"flex-start"}
          >
            When we think about inclusive and sustainable development…
          </Text>

          <Text
            fontWeight={"400"}
            mt={6}
            fontSize={18}
            alignContent={"flex-start"}
          >
            <b>
              {" "}
              … again, we realize we must begin with food, and people who grew
              it for us.{" "}
            </b>
          </Text>

          <Text fontSize={14.5} pt={6}>
            Our mission is to help farmers win back the respect and prosperity
            they once enjoyed in ancient Bharatiya society. Farmers represent
            about 70% of the population, and constitute the foundation for
            economic as well as social development in the country.
          </Text>

          <Text
            fontWeight={"500"}
            color={"text.100"}
            fontSize={22}
            mt={12}
            alignContent={"flex-start"}
          >
            When we think about being an agent of constructive change in
            society…
          </Text>

          <Text
            fontWeight={"400"}
            mt={6}
            fontSize={18}
            alignContent={"flex-start"}
          >
            <b> … yet again we come to food, and how it is distributed.</b>
          </Text>

          <Text fontSize={14.5} pt={6}>
            Our efforts are focused towards creating a convenient and affordable
            service for delivering fresh, safe and healthy food straight from
            the farm to your plate. We wish to help people find natural ways to
            fulfil their daily needs and achieve complete wellness.
          </Text>

          <Text
            fontWeight={"500"}
            color={"text.100"}
            fontSize={"21.5"}
            mt={12}
            alignContent={"flex-start"}
          >
            Our mission is to bring about a natural future, and make a positive
            difference to the lives of farmers, consumers and the society at
            large.
          </Text>

          <Text
            fontWeight={"500"}
            color={"text.100"}
            fontSize={"21.5"}
            mt={5}
            alignContent={"flex-start"}
          >
            How we help farmers and consumers:
          </Text>

          <Text
            fontWeight={"400"}
            mt={4}
            // color={"text.100"}
            fontSize={"14.5"}
            alignContent={"flex-start"}
          >
            Our country and the world spend billions of dollars every year after
            synthetic fertilizer and pesticide subsidies. This introduces toxic
            chemicals in the food chain driving health imbalances and further
            impacting public health. We believe there is an urgent and also
            desperate need to develop natural methods to improve farm production
            and distribution.
          </Text>

          <Text
            fontWeight={"400"}
            mt={6}
            fontSize={"14.5"}
            alignContent={"flex-start"}
          >
            Our parent Suryan Organic has more than 10 years of ethical and
            natural food research and development experience. We are associated
            with over thousands of naturally growing trusted farmers, from all
            over BHARAT. We believe that if we have to make a difference in
            society, our influence and endeavour must extend from the farm all
            the way to the urban household.
          </Text>

          <Text
            fontWeight={"550"}
            color={"text.100"}
            fontSize={"22"}
            mt={4}
            alignContent={"flex-start"}
          >
            For the farmer, we are–
          </Text>

          <Text fontWeight={"400"} mt={3.5} fontSize={"14.5"}>
            a) <b>Resourceful knowledge partners</b> helping them turn to
            natural farming or improve their farm productivity, we are inspired
            by the mission of and work closely with Bansi Gir Gaushala, which
            helps farmers with knowledge and materials required for Gopalan as
            well as natural farming using traditional Vedic methods. For smaller
            farmers, we guide and help them{" "}
            <b>acquire organic certifications</b> and
            <b>get their produce tested in a laboratory</b> if required. Our
            commitment to farmers springs from our vision of” samruddh{" "}
            <b>Kissan, samruddh Bharat”</b>. Our knowledge of natural farming
            coupled with sensible intelligence of the natural foods market is
            formidable assets that we put at the disposal of our farmer partners
            whenever required.
          </Text>

          <Text fontWeight={"400"} mt={5} fontSize={"14.5"}>
            b) For Reliable market makers and{" "}
            <b>
              buyers, we help them find the best prices for their natural
              produce. We have loyal and copious retail customers visiting our
              SOSE Organic boutiques and we would appreciate and could arrange
              our supply for bulk orders too. can also arrange bulk buyers
            </b>
            . Our efforts are aimed in reducing market uncertainties for our
            farmers, so that they can do what they do best - cultivating the
            most nutritious natural produce.{" "}
            <b>
              We help farmers develop their business with new products and
              marketing approach for them to get benefit for their fruitful
              efforts.
            </b>
          </Text>

          <Text
            fontWeight={"550"}
            color={"text.100"}
            fontSize={"22"}
            mt={5}
            alignContent={"flex-start"}
          >
            For consumers & resellers, we are –
          </Text>

          <Text fontWeight={"400"} mt={2} fontSize={"14.5"}>
            a)<b>Extremely dependable suppliers</b> to help them lead a natural
            and malady free lifestyle. We care for our own health and similarly
            want our farmers and consumers to be happy and healthy. Our
            commitment to natural sourcing springs from our mission to revive
            Bharat’s ancient roots, our Vedic “Gau Sanskriti”, and our vision of
            “Swasth Nagarik, Swasth Parivar, Swasth Bharat”. <b>We often go out of
            our way, often at a significant cost to us and beyond regulatory or
            legal requirements to determine if the products we offer are truly
            natural</b>. We don’t just go by the letter of law and ask for organic
            certification from our suppliers. We insist on solid proof that what
            they are supplying is truly in nature. In case of any suspicion, we
            often get the products tested in an independent, certified,
            laboratory from our end. So, when consumers purchase from us, they
            are assured of the purity and authenticity of what they buy. When
            our resellers sell our products, they can be similarly confident,
            trusted that they are partnering with the best in the products
            segment.
          </Text>

          <Text fontWeight={"400"} mt={5} fontSize={"14.5"}>
            b) Creative knowledge partners are <b>to help consumers enhance their
            well-being in line with Bharat’s ancient Vedic traditions. We are
            inspired by Bansi Gir Gaushala, and taking full knowledge of The
            Gaushala’s rich knowledge base and experience of Vedic nutritional &
            medical practices to help consumers</b>. We design new products which
            are in line with ancient Ayurvedic philosophy, while still being
            appealing to modern youth. <b>We also distribute the Gaushala’s full
            range products, including “Gau Veda” herbal medicines and
            supplements that exploit synergies between Gopalan and Ayurveda. We
            also wish to influence a change in society, to rouse in people a
            curiosity for what they have inherited from their ancient
            forefathers, but have so far failed to appreciate. We work to make a
            positive difference to the way people think about food</b>.
          </Text>
        </Container>

        <Box
          w="100%"
          /*     backgroundImage={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"}
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"} */
        >
          <Heading
            color="brand.500"
            size="lg"
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
              transition: "opacity 0.7s", // Note the corrected syntax here
            }}
          />
        </Container>
      </Container>
      <ScrollToTop/>
      <Footer />
    </>
  );
};

export default AboutUs;
