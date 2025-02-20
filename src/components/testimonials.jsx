import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import {
  Box,
  Container,
  Avatar,
  Heading,
  Text,
  Flex,
  Card,
  IconButton,
} from "@chakra-ui/react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import {
  initializeAppData
} from "../slice/homeApi";
import { useDispatch, useSelector } from "react-redux";




const Testimonials = () => {
  const [slider, setSlider] = useState(Slider | null)

  const dispatch = useDispatch();
  // const [testimonials , setTestimonials] = useState([])
  const {
    testimonials,
    hasFetched
  } = useSelector((state) => state.banners);
  


  useEffect(() => {
    if (!hasFetched) {
      dispatch(initializeAppData());
    }
  }, [dispatch, hasFetched]);


  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Container maxW={"container.xl"} pt={3} position={"relative"}>
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
            mt={3}
            pb={"10px"}
          >
            TESTIMONIALS
          </Heading>
        </Box>

        <IconButton
          _hover={{ opacity: 0.5 }}
          position="absolute"
          top="55%"
          left={"20px"}
          translate="-50% -55%"
          zIndex="100"
          borderRadius="50%"
          boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
          colorScheme="brand"
          size={"sm"}
          onClick={() => slider?.slickPrev()}
          //icon={<FaArrowUp size={24}/>}
          icon={<RiArrowLeftSLine size={25} />}
        />
        <IconButton
          boxShadow="rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;"
          aria-label="right-arrow"
          icon={<RiArrowRightSLine style={{ fontSize: 24 }} />}
          _hover={{ opacity: 0.5 }}
          colorScheme="brand"
          size="sm"
          position="absolute"
          right={"20px"}
          top={"55%"}
          translate={"-50%, -55%"}
          zIndex={10}
          onClick={() => slider?.slickNext()}
          borderRadius={"50%"}
        />
        <Container maxWidth={"container.xl"} px={10} >
          <div className="slider-container">
            <Slider {...settings} ref={(slider) => setSlider(slider)} >
              {testimonials?.length > 0 &&
                testimonials.map((testimonial, index) => (
                  <Box
                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                    maxW={{ md: "100%", base: "100%" }}
                    minH={{ md: "10vw", base: "25vw" }}
                    my={20}
                    // mx={{ md: 5, base: 4 }}
                    key={index}
                    px={5}
                    pb={5}
                  >
                    <Flex
                      flexDirection={"column"}
                      gap={"3"}
                      textAlign={"center"}
                      alignItems={"center"}
                      justifyContent={"center"}
                      maxW={{ md: "100%", base: "100%" }}
                      minH={{ md: "10vw", base: "25vw" }}
                    >
                      <Avatar
                        boxSize={75}
                        boxShadow="0px 0px 15px rgba(0, 0, 0, 0.48)"
                        marginTop={"-35px"}
                        name="Dan Abrahmov"
                        src="/sose_logo.png"
                      />
                      <Text
                        display={"inline-block"}
                        fontSize={"15px"}
                        fontWeight={600}
                      >
                        <span
                          style={{
                            fontSize: "1rem",
                            color: "#436131",
                            fontWeight: 900,
                          }}
                        >
                          &#8220;
                        </span>{" "}
                        {testimonial.description.slice(0, 150)}...
                        <span
                          style={{
                            color: "#436131",
                            fontSize: "1rem",
                            fontWeight: 900,
                          }}
                        >
                          &#8221;
                        </span>
                      </Text>

                      <Text color={"brand.500"} height={"100%"} fontWeight={600}>
                        -{testimonial.author_name}
                      </Text>
                    </Flex>
                  </Box>
                ))}
            </Slider>
          </div>
        </Container>
      </Container>
    </>
  );
};

export default Testimonials;