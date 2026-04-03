"use client";

import { useForm } from "react-hook-form";
import TextInput from "@/components/inputs/TextInput";

type formData = {
  password: String;
  confirmPassword: String;
};

export default function ResetPasswordForm() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm<formData>();

  const onSubmit = async (data: formData) => {};
  const passwordValue = watch("password");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        type="password"
        placeholder="Please enter your password"
        register={register}
        error={errors.password?.message}
        required="Password is required"
        name="password"
        validate={(value) => {
          if (value.length < 6) {
            return "Password must be at least 6 charater";
          }
          if (!/[A-Z]/.test(value)) {
            return "Password must contain at least 1 uppercase letter";
          }
          return true;
        }}
      />
      <TextInput
        type="password"
        placeholder="Please enter your comfirmPassword"
        register={register}
        error={errors.confirmPassword?.message}
        required="ConfirmPassword is required"
        name="confirmPassword"
        validate={(value) => value === passwordValue || "Passwords not match"}
      />
      <button
        type="submit"
        className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Reset
      </button>
    </form>
  );
}
