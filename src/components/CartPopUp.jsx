import {
  Container,
  Flex,
  Text,
  Button,
  Link,
  Box,
  Icon,
} from "@chakra-ui/react";
import { BsFillCartFill } from "react-icons/bs";
import { MdPlayArrow } from "react-icons/md";
import React, { useEffect, useState } from "react";
import CartEmitter from "./EventEmitter";
import { useLocation, useNavigate } from "react-router-dom";

const CartPopUp = () => {
  const [CartCount, setCartCount] = useState(
    localStorage.getItem("cart_counter")
  );
  
  const [total, setTotal] = useState((localStorage.getItem("product_total") === null ||localStorage.getItem("product_total") === undefined) ? 0 : localStorage.getItem("product_total")  );
  useEffect(() => {
    const updateCartCount = (newQuantity) => {
      setCartCount(newQuantity);
    };

    CartEmitter.on("updateCartCount", updateCartCount);

    return () => {
      CartEmitter.off("updateCartCount", updateCartCount);
    };
  }, []);

  useEffect(() => {
    const updateProductTotal = (newQuantity) => {
      setTotal(newQuantity);
    };

    CartEmitter.on("updateProductTotal", updateProductTotal);

    return () => {
      CartEmitter.off("updateProductTotal", updateProductTotal);
    };
  }, []);
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Container
        maxW={"container.xl"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 1.95px 0px",
          position: "sticky",
          overFlow: "hidden",
          bottom: 0,
          zIndex: 9,
        }}
        centerContent
        px={1}
        display={location.pathname === "/cart" ? "none" : "flex"}
      >
        <Box
          bgColor={"brand.500"}
          color={"#fff"}
          textAlign={"center"}
          py={3}
          fontWeight={400}
          borderTopRightRadius={"20px"}
          borderTopLeftRadius={"20px"}
          w={{ md: 600, base: "100%" }}
          opacity={0.9}
          fontSize={13}
        >
         Upgrade to SOSE Elite now for complimentary delivery and elevate your Shopping experience!
        </Box>
        <Flex
          justifyContent={"space-between"}
          px={3}
          py={2}
          backgroundColor={"#6c8948e8"}
          color={"#fff"}
          w={{ md: 600, base: "100%" }}
          opacity={0.9}
        >
          <Flex gap={2} alignItems={"center"}>
            <BsFillCartFill fontSize={"1.4rem"} />
            <Text fontSize={17} mt={1}>
              {CartCount ?? 0}
              {"  "}items
            </Text>
          </Flex>
          <Flex gap={2} mt={1} alignItems={"center"}>
            <Text fontSize={17} fontWeight={700}>
              ₹ {parseFloat(total).toFixed(2) ?? 0}
            </Text>
            <Text
              as={Flex}
              onClick={() => navigate("/cart")}
              fontSize={17}
              fontWeight={700}
            >
              Cart{" "}
              <MdPlayArrow
                color="#fff"
                cursor={"pointer"}
                fontSize={"1.5rem"}
              />
            </Text>

           
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default CartPopUp;
