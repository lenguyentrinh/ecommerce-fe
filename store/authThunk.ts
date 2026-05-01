import { createAsyncThunk } from "@reduxjs/toolkit";
import { signupAPI, SignupPayload, loginAPI, LoginPayload, verifyEmailPayload, verifyEmailAPI, meAPI, logoutAPI } from "@/services/authAPI";

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
      const loginRes = await loginAPI(data);
      const user = await meAPI();
      return {
        message: loginRes.message || "Login successful",
        user,
      };
    } catch (err: any) {
      return rejectWithValue( err.response?.data?.message  || "Login failed");
    }
  }
)

export const fetchMeThunk = createAsyncThunk(
  "auth/me",
  async (_, { rejectWithValue }) => {
    try {
      const user = await meAPI();
      return user;
    } catch (err: any) {
      return rejectWithValue(err.response?.data?.message || "Unauthorized");
    }
  }
);

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

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async () => {
    try {
      await logoutAPI();
    } catch {
      // Even if backend logout fails, clear client auth state.
    }
    return true;
  }
);

