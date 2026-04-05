import { createSlice } from "@reduxjs/toolkit";
import { readStorage } from "../../../components/utils/localRead";

const initialState = {
  theme: readStorage("userConfig.theme", 'light'),
  tabFonema: 0,
};

export const userConfigSlice = createSlice({
  name: "userConfig",
  initialState,
  reducers: {
    updateUserConfig: (state, action) => {
      const { key, value, notSave } = action.payload;
      state[key] = value;
      !notSave && localStorage.setItem(`userConfig.${key}`, JSON.stringify(value));
    },
    updateTheme: (state) => {
      const newTheme = state.theme === 'light' ? 'dark' : 'light';
      state.theme = newTheme;
      localStorage.setItem('userConfig.theme', JSON.stringify(newTheme));
      window.dispatchEvent(new CustomEvent("chino-theme-change", { detail: { newTheme } }));
    },
  },
});

export const { updateUserConfig, updateTheme } = userConfigSlice.actions;

export default userConfigSlice.reducer;