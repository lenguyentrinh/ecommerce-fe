import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI, SignupPayload, loginAPI, LoginPayload,
         verifyEmailPayload, verifyEmailAPI, sendOtpPayload,
         sendOtpAPI, verifyOtpPayload, verifyOtpAPI,
         resetPasswordPayload, resetPasswordAPI } 
        from "@/services/authAPI";

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (data: SignupPayload, { rejectWithValue }) => {
    try {
      return await signupAPI(data);
    }catch (err: any) {
      return rejectWithValue( err.response?.data?.message  || "Signup failed");
    }
  }
);

export const  loginThunk = createAsyncThunk(
  "auth/login", 
  async(data: LoginPayload, {rejectWithValue})=>{
    try {
      return await loginAPI(data);
    } catch (err: any) {
      return rejectWithValue( err.response?.data?.message  || "Login failed");
    }
  }
)

export const verifyEmailThunk =createAsyncThunk(
  "auth/verify-email",
  async(data: verifyEmailPayload,{rejectWithValue})=>{
    try {
      return await verifyEmailAPI(data);
    } catch (err: any) {
      return rejectWithValue( err.response?.data?.message  || "Verify email failed");
    }
  }
)

export const sendOtpThunk = createAsyncThunk(
  "auth/send-otp",
  async(data: sendOtpPayload,{rejectWithValue})=>{
    try {
      return await sendOtpAPI(data);
    } catch (err: any) {
      return rejectWithValue( err.response?.data?.message  || "Send OTP failed");
    }
  }
)

export const verifyOtpThunk = createAsyncThunk(
  "auth/verify-otp",
  async(data: verifyOtpPayload,{rejectWithValue})=>{
    try {
      return await verifyOtpAPI(data);
    } catch (err: any) {
      return rejectWithValue( err.response?.data?.message  || "Verify OTP failed");
    }
  }
)

export const resetPasswordThunk = createAsyncThunk(
  "auth/reset-password",
  async(data: resetPasswordPayload,{rejectWithValue})=>{
    try {
      return await resetPasswordAPI(data);
    } catch (err: any) {
      return rejectWithValue( err.response?.data?.message  || "Reset password failed");
    }
  }
)

