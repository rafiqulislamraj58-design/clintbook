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
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5] p-6">
      <div className="grid w-full max-w-5xl lg:grid-cols-2 gap-10 items-center">
        <Card className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-black/5">
          <div className="max-w-sm mx-auto w-full">
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
                placeholder="enter your name"
                className={"px-24 py-2.5 border rounded-3xl"}
                variant="bordered" />

              <Input
                type="email"
                label="Email"
                placeholder="maill@example.com"
                className={"px-24 py-2.5 border rounded-3xl"}
                variant="bordered" />

              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                className={"px-24 py-2.5 border rounded-3xl"}
                variant="bordered" />

              <Input
                type="password"
                label="Confirm Password"
                placeholder="••••••••"
                className={"px-24 py-2.5 border rounded-3xl"}
                variant="bordered"/>

              <Button
                type="submit"
                className="w-full !bg-[#42b72a] text-white h-12 font-semibold"
              >
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
              className="w-full h-12 flex items-center justify-center gap-2 bg-amber-100">
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