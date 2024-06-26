import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ReadMorePost from "../components/ReadMorePost";
import { Box, Container, Text,Image,Heading } from "@chakra-ui/react";
import BreadCrumbCom from "../components/BreadCrumbCom";

const Posts = [
  {
    image:"./Suryan Organic/inspire-support/b2.jpg",
    title: "Bansi Gir Gaushala",
    content: (
      <Text>
        Bansi Gir Gaushala was established in 2006 by Shri Gopalbhai Sutariya as
        an effort to revive, regain and re-establish Bharat’s ancient Vedic
        culture. In Vedic traditions, the Cow was revered as Divine Mother, the
        Gomata or Gaumata, and one which bestows health, knowledge, and
        prosperity. In Sanskrit, the word “Go” also means “Light”.
        <br />
        <br />
        But as time passed and humanity entered the Dark Age (“Kali Yuga”), much
        of this wisdom was lost. In modern times, Gaumata has become a victim of
        human greed.
      </Text>
    ),

    href: "https://www.bansigir.in/",
  },

  {
    image: "./Suryan Organic/inspire-support/b5.jpg",
    title: "Sidha Kisan Se",
    content: (
      <Text>
        SIDHA KISAN SE is inspired by Bansi Gir Gaushala, and it's work towards
        the revival of Bharat's ancient Gau Sanskriti. SIDHA KISAN SE intends to
        transform the way food is bought and sold in the country by bringing
        farmers and consumers closer to each other
        <br />
        <br />
        Under the SIDHA KISAN SE initiative, Suryan Organic offers you an
        opportunity to buy genuine, pure and authentic natural commodities
        directly from farmers who are part of our growing network of thousands
        of trusted and ethically growing natural farmers
      </Text>
    ),
    href: "https://www.sidhakisanse.com/",
  },
  {
    image: "./Suryan Organic/inspire-support/b3.jpg",
    title: "SOSE",
    content:
      "We are an Ethical & Natural foods, natural home care and handmade personal care brand from the house of Suryan Organic. We were born out of the need to start at the beginning, to go to the roots of our problems. As an enterprise that is inspired by the mission of Bansi Gir Gaushala, our aim is to contribute to the revival of “Gau Sanskriti”, an ancient culture which placed the Gaumata (Cow as the Divine Mother) at the center of all economic, cultural and social activity. Agriculture is the foundation of such a culture, and it is with this paradigm that we seek to find solutions to the problems facing Bharat and humanity at large.",
    href: "https://www.sose.in/",
  },
  {
    image:"./Suryan Organic/inspire-support/b4.jpg",
    title: "GoTirth Vidyapeeth",
    content:
      "The education philosophy of ancient India was influenced by religion itself. The aim of education was to awaken the instinct of righteousness. Education was for religion, meaning, lust and salvation. Their gradual development was the only goal of education. It was the first place of religion. Opporting religion to gain meaning was to block the path to attain salvation. Moksha was the ultimate goal of life and this was also the ultimate goal of education.",
    href: "https://www.gotirthvidyapeeth.in/",
  },
];

export default function InspireSupport() {
  return (
    <>
      <Navbar />

      <Container maxW="container.xl">
        <BreadCrumbCom
          second={"Inspire & Support"}
          secondUrl={"/inspire-and-support"}
        />{" "}
      </Container>
      <Container maxW={"container.xl"} mb={4} px={0}>
        <Image src={"./Suryan Organic/inspire-support/inspire.jpg"} />
    
      </Container>
      <Container maxW={"6xl"} py={4}>
        {Posts.map((postDetails) => (
          <ReadMorePost postAlign="horizontal" postDetails={postDetails} />
        ))}
        </Container>
        <Container maxW={"container.xl"} pb={4} px={0}>
        <Box
           w="100%"
           backgroundImage={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"}
             backgroundSize="100%"
             backgroundPosition="50% 100%"
             backgroundRepeat={"no-repeat"} 
        >
           <Heading
            color="brand.500"
            size="lg"
            mx="auto"
            align={"center"}
            my={"5"}
            pb={"10px"}
          >
          Available At
          </Heading>
        </Box>
        <Box>
          <Image
            src={"./Suryan Organic/inspire-support/download.jpg"}
            w={"100%"}
            alt="Ayurveda"
          />
        </Box>
      </Container>
      <Footer />
    </>
  );
}
