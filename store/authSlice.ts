import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signupThunk, loginThunk, verifyEmailThunk, fetchMeThunk, logoutThunk } from "./authThunk";

interface User{
  id: number;
  email: string;
  userName: string;
  role: string;
}

interface AuthState {
  signupLoading: boolean;
  loginLoading: boolean;
  verifyEmailLoading: boolean;
  meLoading: boolean;
  user: User | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  signupLoading: false,
  loginLoading: false,
  verifyEmailLoading: false,
  meLoading: false,
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state)=>{
      state.isAuthenticated = false;
      state.user = null;
    },
    setAuth:(state, action: PayloadAction<{user: User}>) =>{
      state.isAuthenticated = true;
      state.user = action.payload.user;
    }
  },
  extraReducers: (builder) => {
    builder
      // SIGNUP
      .addCase(signupThunk.pending, (state) => {
        state.signupLoading = true;
      })
      .addCase(signupThunk.fulfilled, (state) => {
        state.signupLoading = false;
      })
      .addCase(signupThunk.rejected, (state) => {
        state.signupLoading = false;
      })

      // LOGIN
      .addCase(loginThunk.pending, (state) => {
        state.loginLoading = true;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loginLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loginLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })

      // VERIFY EMAIL
      .addCase(verifyEmailThunk.pending, (state) => {
        state.verifyEmailLoading = true;
      })
      .addCase(verifyEmailThunk.fulfilled, (state) => {
        state.verifyEmailLoading = false;
      })
      .addCase(verifyEmailThunk.rejected, (state) => {
        state.verifyEmailLoading = false;
      })

      // FETCH CURRENT USER (/auth/me)
      .addCase(fetchMeThunk.pending, (state) => {
        state.meLoading = true;
      })
      .addCase(fetchMeThunk.fulfilled, (state, action) => {
        state.meLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(fetchMeThunk.rejected, (state) => {
        state.meLoading = false;
        state.isAuthenticated = false;
        state.user = null;
      })

      // LOGOUT
      .addCase(logoutThunk.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      })
      .addCase(logoutThunk.rejected, (state) => {
        state.isAuthenticated = false;
        state.user = null;
      });
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
