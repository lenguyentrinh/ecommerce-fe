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

export {
  signupAPI,
  loginAPI,
  verifyEmailAPI,
};

export type {
  SignupPayload,
  LoginPayload,
  verifyEmailPayload
};
