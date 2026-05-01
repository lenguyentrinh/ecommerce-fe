import { api } from "./api";

interface SignupPayload {
  userName: string;
  email: string;
  password: string;
  birthDate: string;
  phoneNumber: string;
}

const signupAPI = async (data: SignupPayload) => {
  const res = await api.post("/auth/signup", data);
  return res.data;
}

interface LoginPayload {
  email: string;
  password: string;
}

const loginAPI = async(data:LoginPayload)=>{
  const res = await api.post("/auth/login", data);
  return res.data;
}

interface verifyEmailPayload {
  email: string | null;
  code: string;
}

const verifyEmailAPI = async(data: verifyEmailPayload)=>{
  const res = await api.post("/auth/verify-email",data);
  return res.data;
}

interface sendOtpPayload {
  email: string;
}

const sendOtpAPI = async(data: sendOtpPayload)=>{
  const res = await api.post("/auth/send-otp",data);  
  return res.data;
}

interface verifyOtpPayload {
  email: string;
  otp: string;
}

const verifyOtpAPI = async(data: verifyOtpPayload)=>{
  const res = await api.post("/auth/verify-otp",data);
  return res.data;
}

interface resetPasswordPayload {
  email: string;
  newPassword: string;
  confirmNewPassword: string | null;
}
    
const resetPasswordAPI = async(data: resetPasswordPayload)=>{
  const res = await api.post("/auth/reset-password",data);
  return res.data;
}

export {
  signupAPI,
  loginAPI,
  verifyEmailAPI,
  sendOtpAPI,
  verifyOtpAPI,
  resetPasswordAPI
};

export type {
  SignupPayload,
  LoginPayload,
  verifyEmailPayload,
  sendOtpPayload,
  verifyOtpPayload,
  resetPasswordPayload
};