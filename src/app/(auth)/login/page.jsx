"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Card } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

export default function LoginPage() {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5] px-4 py-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <Card className="bg-white w-full p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-black/5">
          <div className="w-full">
            <div className="flex flex-col">
              <h1 className="text-4xl font-extrabold mb-5 text-[#1877f2] text-center">
                BiblioDrop
              </h1>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="email"
                label="Email"
                placeholder="mail@example.com"
                variant="bordered"
                className="w-full  border-2 rounded-2xl p-3"/>

              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                variant="bordered"
                className="w-full border-2 rounded-2xl p-3"/>

              <Button
                type="submit"
                className="w-full !bg-[#1877f2] text-white h-12 font-semibold" >
                Log In
              </Button>
            </form>

            <div className="text-center mt-4">
              <Link
                href="/forgot-password"
                className="text-[#1877f2] text-sm hover:underline" >
                Forgot password?
              </Link>
            </div>

            <div className="my-6 border-t border-gray-300" />

            <Button
              onClick={() => router.push("/register")}
              className="w-full !bg-[#42b72a] text-white h-12 font-semibold">
              Register
            </Button>

            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-gray-200" />
              <span className="px-3 text-gray-400 text-xs">OR</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            <Button
              variant="bordered"
              className="w-full h-12 flex items-center justify-center gap-2 bg-amber-100">
              <FcGoogle size={20} />
              Continue with Google
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}