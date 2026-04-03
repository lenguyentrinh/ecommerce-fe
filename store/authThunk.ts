import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI, SignupPayload, loginAPI, LoginPayload, verifyEmailPayload, verifyEmailAPI } from "@/services/authAPI";

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

