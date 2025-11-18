"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import TextInput from "@/components/inputs/TextInput";

type FormData = {
  gmail: string;
  password: string;
};

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [loading, setLoading] = useState(false);
  const [errorsMessage, setErrorsMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setErrorsMessage("");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        placehoder="Gmail..."
        type="email"
        name="gmail"
        register={register}
        required="Please enter your gmail"
        error={errors.gmail?.message}
      />
      <TextInput
        placehoder="Password..."
        type="password"
        name="password"
        register={register}
        required="Please enter your password"
        error={errors.password?.message}
      />
        <div className="text-right mt-1">
        <a href="/forgotPassword" className="text-gray-500 hover:text-gray-700">
          Forgot password?
        </a>
      </div>
      <div className="flex justify-center">
        <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </form>
  );
}
