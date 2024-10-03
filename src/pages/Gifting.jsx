import { Box, Container, Grid, GridItem, Heading, Image } from "@chakra-ui/react";
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
const Gifting = () => {
    return (
      <>
            <Navbar />
            <Container maxW={"container.xl"} px={0}>
                <Image src="https://www.suryanorganic.com/web/image/910859/gifting.jpg" alt="" />
            </Container>
            <Container maxW={"2xl"} px={0} centerContent>
                <Image src="https://www.suryanorganic.com/web/image/575303/gift%20website%201111222.png" alt="" />
            </Container>
            <Container maxW={"container.xl"} px={0} centerContent>
                <Image src=" https://www.suryanorganic.com/web/image/729971/gift%201.jpg" alt="" />
            </Container>
            <Container maxW={"7xl"} >
                <Grid templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                }}
                    mt={6}>
                    <GridItem mx={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920289/1.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920290/14.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920291/15.jpg" alt="" />
                    </GridItem>

                </Grid>

            </Container>
            <Container maxW={"7xl"}>
                <Grid templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(2, 1fr)",
                }}
                    mt={6}>
                    <GridItem mx={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920294/16.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920296/17.jpg" alt="" />
                    </GridItem>
                </Grid>

            </Container>
            <Container maxW={"2xl"} px={0} centerContent>
                <Image src="https://www.suryanorganic.com/web/image/934026/gift_sose.jpg" alt="" />
            </Container>

            <Container maxW={"container.xl"} px={0} centerContent>
                <Image src="https://www.suryanorganic.com/web/image/729978/gift%207.jpg" alt="" />
            </Container>

            <Container maxW={"7xl"} centerContent>
                <Grid templateColumns={{
                    base: "repeat(1, 1fr)",
                    md: "repeat(3, 1fr)",
                }}
                    mt={6}>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920310/02.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920311/03.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920312/04.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920314/05.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920315/06.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920316/07.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920317/08.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920318/09.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920319/10.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3} >
                        <Image src="https://www.suryanorganic.com/web/image/920320/11.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920321/12.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/920322/13.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3} >
                        <Image src="https://www.suryanorganic.com/web/image/933843/hamper_18.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/933844/hamper_19.jpg" alt="" />
                    </GridItem>
                    <GridItem mx={3} mt={3}>
                        <Image src="https://www.suryanorganic.com/web/image/933845/hamper_20.jpg" alt="" />
                    </GridItem>
                </Grid>
            </Container>
            <Box
                w="100%"
               /*  backgroundImage={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"}
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
                    "/001.jpg"
                  }
                    w={"container.xl"}
                    alt=""
                    style={{
                        opacity: 1,
                        transition: "opacity 0.7s",
                    }}
                />
            </Container>
            <ScrollToTop/>
            <Footer />
        </>
    )
}

export default Gifting