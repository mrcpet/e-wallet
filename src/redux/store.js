import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "../features/cards/cardSlice";
import themeSlice from "../features/theme/themeSlice";

const store = configureStore({
  reducer: {
    cards: cardSlice,
    theme: themeSlice,
  },
});

export default store;
