"use client";

import TextInput from "@/components/inputs/TextInput";
import { useForm } from "react-hook-form";

type formData = {
  otp: string;
};

export default function OtpForm() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<formData>();
  const onSubmit = async (data: formData) => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="text"
        register={register}
        name="otp"
        placeholder="Please enter otp"
        required="Please enter otp"
        error={errors.otp?.message}
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Send
      </button>
    </form>
  );
}
