import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    theme: localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "dark",
  },
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
