import Router from "../routes/routes";
import client from "../setup/axiosClient";
import checkLogin from "./checkLogin";
import { createStandaloneToast } from "@chakra-ui/react";
import CheckOrSetUDID from "./checkOrSetUDID";
import CartEmitter from "../components/EventEmitter";

export default async function AddToCart(product_id, quantity) {
  const { ToastContainer, toast } = createStandaloneToast();
  const loginInfo = checkLogin();
  const checkOrSetUDIDInfo = CheckOrSetUDID();
  let headers = { visitor: checkOrSetUDIDInfo.visitor_id };

  try {
    if (loginInfo.isLoggedIn === true) {
      headers = { Authorization: `Token ${loginInfo.token}` };
    }

    const response = await client.post(
      "/cart/",
      {
        pid: product_id,
        quantity: quantity ?? 1,
      },
      {
        headers: {
          ...headers,
          Accept: "application/json",
        },
      }
    );
    if (response.data.status === true) {
      toast({
        title: "Product added to cart!",
        status: "success",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      });
      localStorage.setItem("cart_counter", response.data.cart_counter);
      CartEmitter.emit("updateCartCount", response.data.cart_counter);
      if (localStorage.getItem("product_total") === null ||localStorage.getItem("product_total") === undefined) {
        localStorage.setItem("product_total",0) 
      }
      console.log("product-total",localStorage.getItem("product_total") )


      let finalTotal =
        parseInt(localStorage.getItem("product_total")) + parseInt(response.data.data?.selling_price) * parseInt(response.data.data?.quantity);
        console.log("finalTotal",finalTotal )
      localStorage.setItem("product_total", finalTotal);

      CartEmitter.emit("updateProductTotal", finalTotal);
      // if (window.location.pathname === "/cart") {
      //   window.location.reload();
      // } else {
      //   // Router.navigate("/cart");
      // }
    } else {
      toast({
        description:
          "There was an error adding your product to cart! Please try again!",
        status: "error",
        position: "top-right",
        duration: 5000,
        isClosable: true,
      });
    }
  } catch (error) {
    toast({
      title: error.response.data.message,
      status: "warning",
      position: "top-right",
      duration: 5000,
      isClosable: true,
    });
  }
  return <ToastContainer />;
}
