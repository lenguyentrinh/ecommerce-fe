import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { signupThunk, loginThunk, verifyEmailThunk, sendOtpThunk ,verifyOtpThunk,resetPasswordThunk} from "./authThunk";

interface User{
  id?: number;
  userName?: string;
  email?: string;
}

interface AuthState {
  signupLoading: boolean;
  loginLoading: boolean;
  verifyEmailLoading: boolean;
  user: User | null;
  isAuthenticated: boolean;
  token: string | null;
  sendOtpLoading: boolean;
  verifyOtpLoading: boolean;
  resetPasswordLoading: boolean;
}

const initialState: AuthState = {
  signupLoading: false,
  loginLoading: false,
  user: null,
  isAuthenticated: false,
  verifyEmailLoading: false,
  token: null,
  sendOtpLoading: false,
  verifyOtpLoading: false,
  resetPasswordLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state)=>{
      state.isAuthenticated = false;
      state.user = null;
      state.token = null;
      if(typeof window !== "undefined"){
        localStorage.removeItem("token");
      }
    },
    setAuth:(state, action: PayloadAction<{user: User, token: string}>) =>{
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.token = action.payload.token;
      if(typeof window !== "undefined"){
        localStorage.setItem("token", action.payload.token);
      }
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
        state.token = action.payload.token;
        if(typeof window !== "undefined"){
          localStorage.setItem("token", action.payload.token);
        }
      })
      .addCase(loginThunk.rejected, (state) => {
        state.loginLoading = false;
      });

      // VERIFY EMAIL
      builder.addCase(verifyEmailThunk.pending, (state) => {
        state.verifyEmailLoading = true;
      })
      .addCase(verifyEmailThunk.fulfilled, (state) => {
        state.verifyEmailLoading = false;
      })
      .addCase(verifyEmailThunk.rejected, (state) => {
        state.verifyEmailLoading = false;
      })

      // SEND OTP
      .addCase(sendOtpThunk.pending, (state) => {
        state.sendOtpLoading = true;
      })
      .addCase(sendOtpThunk.fulfilled, (state) => {
        state.sendOtpLoading = false;
      })
      .addCase(sendOtpThunk.rejected, (state) => {
        state.sendOtpLoading = false;
      })

      // VERIFY OTP
      .addCase(verifyOtpThunk.pending, (state) => {
        state.verifyOtpLoading = true;
      })
      .addCase(verifyOtpThunk.fulfilled, (state) => {
        state.verifyOtpLoading = false;
      })
      .addCase(verifyOtpThunk.rejected, (state) => {
        state.verifyOtpLoading = false;
      })
      
      // RESET PASSWORD
      .addCase(resetPasswordThunk.pending, (state) => {
        state.resetPasswordLoading = true;
      })
      .addCase(resetPasswordThunk.fulfilled, (state) => {
        state.resetPasswordLoading = false;
      })
      .addCase(resetPasswordThunk.rejected, (state) => {
        state.resetPasswordLoading = false;
      });
  },
});

export const { logout, setAuth } = authSlice.actions;
export default authSlice.reducer;
