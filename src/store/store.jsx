import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import bannerReducer from "../slice/homeApi";
import categoryReducer from "../slice/categoryApi";
import shopReducer from "../slice/shopApi";

export const store = configureStore({
  reducer: {
    banners: bannerReducer,
    category: categoryReducer,
    shop: shopReducer,
  },
});

setupListeners(store.dispatch);
