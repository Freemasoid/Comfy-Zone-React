import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const themes = {
  winter: "winter",
  synthwave: "synthwave",
};

const getUserLS = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};

const getThemeLS = () => {
  const theme = localStorage.getItem("theme") || themes.winter;
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};

const initialState = {
  user: getUserLS(),
  theme: getThemeLS(),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const user = { ...action.payload.user, token: action };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    logoutUser: (state) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("Logged Out");
    },
    toggleTheme: (state) => {
      const { synthwave, winter } = themes;
      state.theme = state.theme === synthwave ? winter : synthwave;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});

export const { loginUser, logoutUser, toggleTheme } = userSlice.actions;

export default userSlice.reducer;
