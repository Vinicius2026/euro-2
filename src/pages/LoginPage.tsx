import { LoginForm } from "@/components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md bg-gradient-to-b from-gray-900/90 to-black/90 border border-red-500/30 rounded-3xl shadow-2xl p-8">
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage; 