"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Card } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
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
              <h1 className="text-4xl font-extrabold mb-2 text-[#1877f2]">
                BiblioDrop
              </h1>
              <p className="text-gray-500 mb-5">
                Create your account
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                label="Full Name"
                placeholder="Enter your name"
                className="w-full border-2  p-3 rounded-2xl"
                variant="bordered" />

              <Input
                type="email"
                label="Email"
                placeholder="mail@example.com"
                className="w-full border-2  rounded-2xl p-3"
                variant="bordered" />

              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                className="w-full border-2  rounded-2xl p-3"
                variant="bordered"/>

              <Input
                type="password"
                label="Confirm Password"
                placeholder="••••••••"
                className="w-full border-2  rounded-2xl p-3 "
                variant="bordered"
              />

              <Button type="submit"className="w-full !bg-[#42b72a] text-white h-12 font-semibold" >
                Create Account
              </Button>
            </form>

            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-gray-200" />
              <span className="px-3 text-gray-400 text-xs">OR</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            <Button
              variant="bordered"
              className="w-full h-12 flex items-center justify-center gap-2 bg-amber-100"
            >
              <FcGoogle size={20} />
              Sign up with Google
            </Button>

            <div className="text-center mt-5">
              <span className="text-sm text-gray-500">
                Already have an account?{" "}
              </span>

              <Link
                href="/login"
                className="text-[#1877f2] font-medium hover:underline">
                Log In
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}