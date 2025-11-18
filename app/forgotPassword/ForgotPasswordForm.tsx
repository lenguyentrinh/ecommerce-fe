"use client";

import TextInput from "@/components/inputs/TextInput";
import { useForm } from "react-hook-form";

type FormData = {
  email: string;
};

export default function ForgotPasswordForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = (data: FormData) => {
    // Handle form submission
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="email"
        placehoder="Please enter your email"
        register={register}
        error={errors.email?.message}
        required="Email is required"
        name="email"
      />
      <button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">Send</button>
    </form>
  );
}
