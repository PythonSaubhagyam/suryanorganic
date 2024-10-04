import {
    Box,
    ButtonGroup,
    Container,
    Flex,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Heading,
    IconButton,
    Input,
    Icon,
    Select,
    InputGroup,
    InputLeftElement,
    Text,
    Stack,
    Image,
    Button,
    InputRightElement,
    GridItem,
    Grid,
    FormControl,
    FormLabel,
    FormErrorMessage,
    useToast,
  } from "@chakra-ui/react";
  
  import React, { useEffect, useState } from "react";
  import Navbar from "../components/Navbar";
  import Footer from "../components/Footer";
  import { Link, useParams } from "react-router-dom";
  import {
    FaFacebook,
    FaFacebookSquare,
    FaInstagram,
    FaYoutube,
  } from "react-icons/fa";
  import { useRouteError, useNavigate } from "react-router-dom";
  import { FaCalendarDays } from "react-icons/fa6";
  import { IoLocationSharp, IoSearch } from "react-icons/io5";
  import { ChevronDownIcon } from "@chakra-ui/icons";
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react";
  import client from "../setup/axiosClient";
  import dompurify from "dompurify";
  import moment from "moment";
  import { Controller, useForm } from "react-hook-form";
  import ShareIcons from "../components/ShareIcons";
  
  
  const EventDetails = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const toast = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [qty, setQty] = useState(1);
    const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm();
    const [details, setDetails] = useState();
    console.log("details", details);
    const onClose = () => setIsOpen(false);
    const onOpen = () => setIsOpen(true);
    useEffect(() => {
      getEvents();
    }, []);
    async function getEvents() {
        try {
            const response = await client.get(`/events/${id}/`);
            setDetails(response.data.events);
          } catch (error) {
            console.error("Error fetching events:", error);
            // Optionally, you can handle specific error scenarios
            // For example, display an error message to the user
          }
    }
    const onSubmit = async (req) => {
      setLoading(true);
      let reqBody = [];
      req.tickets.map((data) =>
        reqBody.push({
          event: parseInt(id),
          name: data.name,
          email: data.email,
          phone_number: data.phone,
          // workshopPreference: data.workshopPreference,
        })
      );
      const response = await client.post("/events/event_apply/", {
        event_aaply_data: reqBody,
      });
      if (response) {
        setLoading(false);
        onClose();
        reset();
        toast({
          title: "Event registration successfully!",
          position: "top-right",
          status: "success",
          duration: 4000,
          isClosable: true,
        });
      }
    };
    return (
      <>
        <Navbar />
        <Container
          maxW="container.xl"
          my={0}
          py={6}
          px={16}
          background={"gray.100"}
        >
          <Flex justifyContent={"space-between"}>
            <Text
              fontSize={24}
              color={"text.500"}
              fontWeight={600}
              textAlign={{ base: "center", md: "start" }}
            >
              Events
            </Text>
  
            <Flex gap={3}>
              <Box>
                <InputGroup>
                  <Input
                    variant={"outline"}
                    size={"sm"}
                    placeholder="Search an event.."
                  />
                  <InputRightElement height={"2rem"}>
                    <IoSearch color="green.500" />
                  </InputRightElement>
                </InputGroup>
              </Box>
            </Flex>
          </Flex>
        </Container>{" "}
        <Container maxW={"container.xl"} pb={8} px={0}>
          <Box
            w={"100%"}
            bg={`linear-gradient(9deg, rgb(74 50 24), rgb(255 1 150 / 6%)), url(${details?.event_image})`}
            bgSize="cover"
            bgPosition="center"
            display="flex"
            justifyContent="left"
            alignItems="center"
            mt={"-10px"}
            py={20}
            px={0}
            boxShadow={"0px 0px 0px 0px"}
            backdropFilter="blur(10px)"
            height={{ md: "350px" }}
            mb={10}
            position="relative" // To position text relative to the box
          >
            <Text
              px={"5%"}
              color={"white"} // Text color changed to white
              textAlign={"left"}
              textShadow={"0 2px 4px rgba(0,0,0,0.6)"} // Added text shadow for better visibility
              fontSize={{ base: "md", md: "5xl" }}
              fontWeight="700"
              position="absolute" // To position text absolutely within the box
              bottom={10} // Adjust vertical position
              left={10} // Adjust horizontal position
            >
              {details?.title}
            </Text>
          </Box>
  
          <Grid
            templateColumns={{ base: "1fr", md: "60% 40%", lg: "70% 30% " }}
            gap={8}
            p={5}
            px={{ md: 16 }}
            direction="column"
          >
            <Box width={"100%"} background={"gray.100"} p={5}>
              <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={4}
              >
                <Text fontSize="24px">{details?.title}</Text>
                <Box>
                  <Menu>
                    <MenuButton
                      colorScheme={"brand"}
                      as={Button}
                      size={"sm"}
                      rightIcon={<ChevronDownIcon />}
                    >
                      Qty: {qty}
                    </MenuButton>
                    <MenuList>
                      {[
                        ...(details &&
                        details.max_attendees_status === "Unlimited"
                          ? Array(10)
                          : details
                          ? Array(details.max_attendees)
                          : []),
                      ]
                        .slice(1, 10)
                        .map((data, index) => (
                          <MenuItem
                            onClick={() => {
                              setQty(index + 1), reset();
                            }}
                          >
                            {index + 1}
                          </MenuItem>
                        ))}
                    </MenuList>
                  </Menu>
                </Box>
              </Flex>
              <Box mt={4}>
                {/* <Text>Join us for this 24 hour event</Text> */}
                <br />
                <Text
                  textOverflow={"ellipsis"}
                  dangerouslySetInnerHTML={{
                    __html: dompurify.sanitize(details?.desc),
                  }}
                />
              </Box>
            </Box>
            <Box background={"gray.100"} p={5}>
              <Button
                colorScheme={"brand"}
                mr={3}
                type="submit"
                size="sm"
                width={"100%"}
                onClick={onOpen}
                isDisabled={
                  details?.event_status === "CANCELLED" ||
                  details?.event_status === "ENDED"
                }
              >
                {details?.event_status === "CANCELLED" ||
                details?.event_status === "ENDED"
                  ? "Event Closed!"
                  : "Register"}
              </Button>
              <Box p={8}>
                <Text fontSize={20}> DATE & TIME</Text>
                <Text fontSize={14}>
                  {moment(details?.start_datetime).isSame(
                    details?.end_datetime,
                    "day"
                  ) ? (
                    // If start date and end date are the same, display one date and a different time
                    <>
                      {moment(details?.start_datetime).format(
                        "dddd, MMMM D, YYYY h:mm A"
                      )}{" "}
                    </>
                  ) : (
                    // If start date and end date are different, display both dates and times
                    <>
                      {moment(details?.start_datetime).format(
                        "dddd, MMMM D, YYYY h:mm A"
                      )}{" "}
                      <br />
                      &darr;
                      <br />
                      {moment(details?.end_datetime).format(
                        "dddd, MMMM D, YYYY h:mm A"
                      )}
                    </>
                  )}
                </Text>
              </Box>
              <Box p={8}>
                <Text fontSize={20}>Venue</Text>
                <Text>{details?.vanue_address}</Text>
              </Box>
              <Box p={8}>
                <Text fontSize={20}>ORGANIZER</Text>
                <Text>{details?.organizer_obj.name}</Text>
              </Box>
              <Box p={8}>
                <Text fontSize={20}>SHARE</Text>
                <Text>
                  {" "}
                  Find out what people see and say about this event, and join the
                  conversation.
                </Text>
                <ShareIcons />
              </Box>
            </Box>
          </Grid>
        </Container>
        <Footer />
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Attendees</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form onSubmit={handleSubmit(onSubmit)}>
                {[...Array(qty)].slice(0, 10).map((_, index) => (
                  <Box
                    key={index}
                    boxShadow={
                      "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;"
                    }
                    p="4"
                    mb="4"
                  >
                    <FormLabel fontSize={16}>Ticket #{index + 1}</FormLabel>
                    <FormControl isInvalid={errors?.tickets?.[index]?.name}>
                      <FormLabel fontSize={12} pt={3}>
                        Name *
                      </FormLabel>
                      <Controller
                        name={`tickets[${index}].name`}
                        control={control}
                        defaultValue=""
                        rules={{ required: "Name is required" }}
                        render={({ field }) => (
                          <Input variant={"outline"} {...field} />
                        )}
                      />
                      <FormErrorMessage>
                        {errors?.tickets?.[index]?.name &&
                          errors.tickets[index].name.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors?.tickets?.[index]?.email}>
                      <FormLabel fontSize={12} pt={3}>
                        Email *
                      </FormLabel>
                      <Controller
                        name={`tickets[${index}].email`}
                        control={control}
                        defaultValue=""
                        rules={{ required: "Email is required" }}
                        render={({ field }) => (
                          <Input variant={"outline"} {...field} />
                        )}
                      />
                      <FormErrorMessage>
                        {errors?.tickets?.[index]?.email &&
                          errors.tickets[index].email.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors?.tickets?.[index]?.phone}>
                      <FormLabel fontSize={12} pt={3}>
                        Phone
                      </FormLabel>
                      <Controller
                        name={`tickets[${index}].phone`}
                        control={control}
                        defaultValue=""
                        rules={{
                          pattern: {
                            value: /^\+\d{12}$/,
                            message: "Invalid phone number",
                          },
                          required: "Phone is required",
                        }}
                        render={({ field }) => (
                          <Input variant={"outline"} {...field} />
                        )}
                      />
                      <FormErrorMessage>
                        {errors?.tickets?.[index]?.phone &&
                          errors.tickets[index].phone.message}
                      </FormErrorMessage>
                    </FormControl>
                    {/* <FormControl
                      isInvalid={errors?.tickets?.[index]?.companyName}
                    >
                      <FormLabel fontSize={12} pt={3}>
                        Quel est le nom de votre entreprise ? *
                      </FormLabel>
                      <Controller
                        name={`tickets[${index}].companyName`}
                        control={control}
                        defaultValue=""
                        rules={{ required: "Company name is required" }}
                        render={({ field }) => (
                          <Input variant={"outline"} {...field} />
                        )}
                      />
                      <FormErrorMessage>
                        {errors?.tickets?.[index]?.companyName &&
                          errors.tickets[index].companyName.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={errors?.tickets?.[index]?.workshopPreference}
                    >
                      <FormLabel fontSize={12} pt={3}>
                        Comment souhaiteriez-vous suivre l'atelier ? *
                      </FormLabel>
                      <Controller
                        name={`tickets[${index}].workshopPreference`}
                        control={control}
                        defaultValue=""
                        rules={{ required: "Workshop preference is required" }}
                        render={({ field }) => (
                          <Input variant={"outline"} {...field} />
                        )}
                      />
                      <FormErrorMessage>
                        {errors?.tickets?.[index]?.workshopPreference &&
                          errors.tickets[index].workshopPreference.message}
                      </FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={errors?.tickets?.[index]?.mobile}>
                      <FormLabel fontSize={12} pt={3}>Mobile *</FormLabel>
                      <Controller
                        name={`tickets[${index}].mobile`}
                        control={control}
                        defaultValue=""
                        rules={{ required: "Mobile is required" }}
                        render={({ field }) => (
                          <Input variant={"outline"} {...field} />
                        )}
                      />
                      <FormErrorMessage>
                        {errors?.tickets?.[index]?.mobile &&
                          errors.tickets[index].mobile.message}
                      </FormErrorMessage>
                    </FormControl> */}
                  </Box>
                ))}
  
                <Button type="submit" colorScheme={"brand"} isLoading={loading}>
                  Submit
                </Button>
                <Button
                  ml={2}
                  variant={"outline"}
                  color="black"
                  onClick={onClose}
                >
                  Close
                </Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
  };
  
  export default EventDetails;
  