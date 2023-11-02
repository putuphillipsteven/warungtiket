import { createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  user: {
    id: null,
    email: "",
    username: "",
  },
  isLogin: false,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { id, email, username } = action.payload;

      state.user = {
        id,
        email,
        username,
      };
    },
    loginSuccess: (state, action) => {
      state.isLogin = true;
    },
    logOutSuccess: (state, action) => {
      state.isLogin = false;
      localStorage.removeItem("token");
    },
    keepLoginSuccess: (state) => {
      state.isLogin = true;
    },
  },
});

export const keepLogin = () => {
  return async (dispatch) => {
    try {
        const token = localStorage.getItem("token");

        if (token) {
            const res =  await axios.get("http://localhost:8000/auth/keep-login", {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            dispatch(setUser(res?.data?.data));
            dispatch(keepLoginSuccess());
        }
    } catch (err) {
        localStorage.removeItem("token");
        alert(err?.response?.data);
    }
  };
};

export const { loginSuccess, logOutSuccess, setUser, keepLoginSuccess } = 
loginSlice.actions;

export default loginSlice.reducer;