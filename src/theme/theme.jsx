import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    brand: {
      50: "#487D05",
      100: "#436131",
      200: "#9CA361",
      300: "#F4F6EB",
      400:"#0b0d63",
      500: "#436131",
      900: "#436131",
    },
    bg: {
      100: "#F5F5F5",
      200: "#E6F2E6",
      500: "#F3ECE2",
      600: "#d5cbc5",
    },
    blue: {
      100: "#00A09D",
    },
    text: {
      500:"#436131",
      200:"#636363",
      400:"#f08e80",
      100:"#2c4c03",
      300: "#434242",
    },
  },
  fonts: {
    body: "Inter, sans-serif",
    heading: "Inter, sans-serif",
  },
  components: {
    Input: {
      defaultProps: {
        variant: "flushed",
        colorScheme: "brand",
        focusBorderColor: "black",
      },
    },
  },
  sizes: {
    container: {
      xl: "1920px",
    },
  },

  //  breakpoints : {
  //     base: "0em",   // 0px
  //     sm: "30em",    // ~480px
  //     md: "48em",    // ~768px
  //     lg: "62em",    // ~992px
  //     xl: "80em",    // ~1280px
  //     "2xl": "96em", // ~1536px
  //     "3xl": "120em", // ~1920px
  //     "4xl": "144em", // ~2304px
  //     "5xl": "160em", // ~2560px
  //     "6xl": "192em", // ~3072px
  //     // Add more breakpoints as needed
  //   }
});
