import ForgotPasswordForm from "./ForgotPasswordForm";

export default function ForgotPasswordPage() {
  return (
    <div className="bg-login flex min-h-screen items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-2/7 ">
        <h1 className="font-semibold  text-center mb-3">
          Enter your email address to receive a verification code
        </h1>
        <ForgotPasswordForm />
      </div>
    </div>
  );
}
