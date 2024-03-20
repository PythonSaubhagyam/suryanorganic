import Footer from "../components/Footer";
import BreadCrumbCom from "../components/BreadCrumbCom";
import Navbar from "../components/Navbar";
import { Box, Container, VStack, Image, Text, Grid, GridItem, Heading, Button } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
const Aboutus = () => {
  let { search } = useLocation();
  const searchParams = new URLSearchParams(search);
  const IsMobileView = searchParams.get("mobile") ?? "false";
  return (
    <>
      <Navbar />


      <Container maxW={"container.xl"} mb={4} px={0} centerContent>
        <Box
          w={"100%"}
          bgImage={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/aboutUs.jpg"}
          bgSize="cover"
          bgPosition="center"
          display="flex"
          justifyContent="center"
          alignItems="center"
          mt={"-10px"}
          py={20}
          boxShadow={"0px 0px 0px 0px"}
          height={"550px"}
          mb={10}
          filter="brightness(100%)"
          style={{ backdropFilter: "blur(10px)" }}
        >
          <Text
            pb={2}
            color={"text.100"}
            textAlign={"center"}
            fontSize={"7xl"}
            fontWeight="700"
          >
            About Us
          </Text>

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
        </Box>

        <Container maxW={"container.xl"} centerContent pt={{ base: 2, md: 6, lg: 12 }} >
          <Image src="./Suryan Organic/about-us/banner dada.jpg" alt="" w={"90%"} />

        </Container>
        <Container maxW="6xl" >
          <Box
            fontWeight={"600"}
            color={"text.100"}
            fontSize={25}
            mt={12}
            pt={12}
            alignContent={"flex-start"}
          >
            Our Mission
          </Box>
          <Text fontSize={14.5}
            pt={6} >
            Suryan Organic is founded by a family of farmers who are engaged in Bharat's traditional & fully natural farming practices for at least the last 11 generations. The Founders firmly believe that embracing modernity while reviving Bharat's ancient & vibrant cultural traditions holds the key to solving the problems facing the country as well as humanity as a whole.
          </Text>
          <Text fontSize={14.5}
            pt={6} >
            Suryan Organic is inspired by Bansi Gir Gaushala, and its mission to revive Bharat's ancient and glorious ‘Gau Sanskriti’. We aim to make a positive difference to rural economies by empowering farmers and helping them adopt ethical farming & production practices that are friendly to the ecosystem.
          </Text>

          <Text fontWeight={"500"}
            color={"text.100"}
            fontSize={22}
            mt={12}

            alignContent={"flex-start"} >
            When we think about health and wellness for all…
          </Text>

          <Text fontWeight={"400"}
            mt={6}
            fontSize={18}
            alignContent={"flex-start"} >
            <b> … we realize it is important to begin with food, how it is grown and people’s mindsets. </b>
          </Text>

          <Text fontSize={15}
            pt={6}>
            Our purpose is to make food production and distribution more sustainable. We believe that everyone has the right to safe food, grown with lots of love and care. We encourage people to know more about where their food comes from, who grows it and most importantly how.
          </Text>


          <Text fontWeight={"500"}
            color={"text.100"}
            fontSize={22}
            mt={12}

            alignContent={"flex-start"} >
            When we think about inclusive and sustainable development…
          </Text>

          <Text fontWeight={"400"}
            mt={6}
            fontSize={18}
            alignContent={"flex-start"} >
            <b> … again we realize we must begin with food, and people who grew it for us. </b>
          </Text>

          <Text fontSize={14.5}
            pt={6}>
            Our mission is to help farmers win back the respect and prosperity they once enjoyed in ancient Bharatiya society. Farmers represent about 70% of the population, and constitute the foundation for economic as well as social development in the country.
          </Text>

          <Text fontWeight={"500"}
            color={"text.100"}
            fontSize={22}
            mt={12}

            alignContent={"flex-start"} >
            When we think about being an agent of constructive change in society…
          </Text>

          <Text fontWeight={"400"}
            mt={6}
            fontSize={18}
            alignContent={"flex-start"} >
            <b> … yet again we come to food, and how it is distributed.</b>
          </Text>

          <Text fontSize={14.5}
            pt={6}>
            Our efforts are focused towards creating a convenient and affordable service for delivering fresh, safe and healthy food straight from the farm to your plate. We wish to help people find natural ways to fulfill their daily needs and achieve complete wellness.
          </Text>


          <Text fontWeight={"500"}
            color={"text.100"}
            fontSize={"21.5"}
            mt={12}

            alignContent={"flex-start"} >
            Our mission is to bring about an natural future, and make a positive difference to the lives of farmers, consumers and the society at large.
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
            Our country and the world spend billions of dollars each year after synthetic fertilizer and pesticide subsidies. This introduces toxic chemicals in the food chain driving health imbalances and further spending on public health. We believe there is an urgent need to develop natural methods to improve farm production and distribution.
          </Text>

          <Text
            fontWeight={"400"}
            mt={6}
            fontSize={"14.5"}
            alignContent={"flex-start"}
          >
            Suryan Organic has more than 10 years of natural farming, food research and development experience. Today Suryan Organic is associated with over thousand of naturally growing trusted farmers, from all over BHARAT. We believe that if we have to make a difference in society, our influence must extend from the farm all the way to the urban household.
          </Text>

          <Text fontWeight={"550"}
            color={"text.100"}
            fontSize={"22"}
            mt={4}

            alignContent={"flex-start"} >
            For the farmer, we are–
          </Text>

          <Text fontWeight={"400"}
            mt={3.5}
            fontSize={"14.5"}>
            a)    <b>Resourceful knowledge partners </b> helping them turn to natural farming or improve their farm productivity, We are inspired by the mission of and work closely with Bansi Gir Gaushala, which helps farmers with knowledge and materials required for Gopalan as well as natural farming using traditional Vedic methods. For smaller farmers, we help them  <b>acquire organic certifications</b>  and get their  <b>produce tested in a laboratory </b> if required. Our commitment to farmers springs from our vision of ”samruddh Kissan, samruddh Bharat”. Our knowledge of natural farming coupled with sensible intelligence of the natural foods market are formidable assets that we put at the disposal of our farmer partners whenever required.
          </Text>

          <Text  fontWeight={"400"}
            mt={5}
            fontSize={"14.5"}>
            b)   <b>Reliable market makers </b> and buyers to help them find the best prices for their natural produce. We have loyal retail customers visiting our SOSE Organic boutiques, and we can also arrange bulk buyers. <b> Our efforts are aimed at reducing market uncertainties for our farmers, who can then focus their energies towards growing the most nutritious natural produce.</b>  We help farmers develop their business with new products and marketing.
          </Text>

          <Text fontWeight={"550"}
            color={"text.100"}
            fontSize={"22"}
            mt={5}

            alignContent={"flex-start"} >
            For consumers & resellers, we are –
          </Text>

          <Text fontWeight={"400"}
            mt={2}
            fontSize={"14.5"} >
          a)<b> Extremely dependable suppliers </b> to help them lead an natural lifestyle. We care for our own health, and similarly want our farmers and consumers to be happy and healthy. Our commitment to natural sourcing springs from our mission to revive Bharat’s ancient roots, our Vedic “Gau Sanskriti”, and our vision of “Swasth Nagarik, Swasth Parivar, Swasth Bharat”. <b> We often go out of our way, often at a significant cost to us and beyond regulatory or legal requirements to determine if the products we offer are truly natural. </b> We don’t just go by the letter of law and ask for an organic certification from our suppliers. We insist on solid proof that what they are supplying is truly in nature. In case of doubts, we often get the products tested in an independent laboratory ourselves. So when consumers buy from us, they are assured of the purity and authenticity of what they buy. When our resellers stock our products, they can be similarly confident that they are partnering with the best in the natural products segment. 
          </Text>

          <Text fontWeight={"400"}
            mt={5}
            fontSize={"14.5"}>
          b) <b>Creative knowledge partners</b> to help consumers enhance their well-being in line with Bharat’s ancient Vedic traditions. We are inspired by Bansi Gir Gaushala, and take full advantage of The Gaushala’s rich knowledge base and experience of  Vedic nutritional & medical practices to help consumers.<b>  We design new products which are in line with ancient Ayurvedic philosophy, while still being appealing to modern youth.</b>  We also distribute The Gaushala’s full range products, including “Gau Veda” herbal medicines and supplements that exploit synergies between Gopalan and Ayurveda. We also wish to influence a change in society, to rouse in people a curiosity for what they have inherited from their ancient forefathers, but have so far failed to appreciate. We work to make a positive difference to the way people think about food. 
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
      <Footer />
    </>
  );
};

export default Aboutus;
