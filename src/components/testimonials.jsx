import React,{useState, useEffect} from "react";
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
} from "@chakra-ui/react";
import {
  initializeAppData
} from "../slice/homeApi";
import { useDispatch, useSelector } from "react-redux";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "#436131",
        borderRadius: 20,
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "#436131",
        borderRadius: 20,
      }}
      onClick={onClick}
    />
  );
}
const Testimonials = () => {

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


  // async function getTestimonials() {
  //   const params = {};
  //   const response = await client.get("/testimonials-section/", {
  //     params: params,
  //   });
  //   if (response.data.status === true) {
  //     setTestimonials(response?.data?.data);
  //   }
  // }

  var settings = {
    dots: false,
    infinite: true,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
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
      <Container maxW={"container.xl"} pt={3}>
      <Box
         w="100%"
          backgroundImage={"https://forntend-bucket.s3.ap-south-1.amazonaws.com/sose/images/HomePage/line.png"}
          backgroundSize="100%"
          backgroundPosition="50% 100%"
          backgroundRepeat={"no-repeat"} 
        >
          <Heading
            color="brand.500"
            fontSize={{md:33,base:24}}
            fontWeight={500}
            mx="auto"
            align={"center"}
            mt={3}
            pb={"10px"}
          >
            TESTIMONIALS
          </Heading>
      </Box>
        <Box px={10} maxW={"100%"} h={"100%"}>
          <Slider {...settings}>
            {testimonials?.length > 0 && testimonials.map((testimonial, index) => (
              <Box
                boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}
                maxW={{ md: "100%", base: "100%" }}
                minH={{ md: "10vw", base: "25vw" }}
                my={20}
                mx={{ md: 5, base: 4 }}
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
        </Box>
      </Container>
    </>
  );
};

export default Testimonials;
// <Flex h={{ base: 380, ml: 350 }} key={index}>
//   <Flex justifyContent={index % 2 !== 0 ? "start" : "end"} mt={6}>
//     {index % 2 === 0 && (
//       <Box
//         sx={{
//           background: "#436131",
//           color: "white",
//           height: "35px",
//           marginTop: "4px",
//           padding: "10px",
//           marginRight: -1,
//         }}
//       >
//         <FaQuoteLeft />
//       </Box>
//     )}

//     <Box
//       style={{
//         opacity: "0.9",
//         border: "1px solid #799a4e",
//         padding: 15,
//         marginTop: 5,
//         marginBottom: 5,
//         margin: 3,
//       }}
//       fontSize={{ base: 12, xl: 15 }}
//       h={{ base: 650, xl: 350 }}
//       w={{ base: 550, xl: 550 }}
//     >
//       <i>{testimonial.quote}</i>
//       <footer>
//         <i>
//           — {testimonial.author},&nbsp;
//           <b>{testimonial.location}</b>
//         </i>
//       </footer>
//     </Box>
//   </Flex>
// </Flex>
