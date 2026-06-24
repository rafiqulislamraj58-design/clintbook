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
    <div className="min-h-screen flex  items-center justify-center bg-[#f0f2f5] p-6">

      <div className="grid w-full max-w-5xl lg:grid-cols-2 gap-10 items-center">
        
        <Card className="bg-white p-6 md:p-8 rounded-xl shadow-xl border border-black/5">
        
          <div className="max-w-sm mx-auto w-full">
          <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold mb-5 text-[#1877f2]">
            BiblioDrop
          </h1>      
        </div>
            <form onSubmit={handleSubmit} className="space-y-5 ">
              <Input
                type="email"
                label="Email"
                className={"px-24 py-2.5 border rounded-3xl"}
                placeholder="mail@example.com"
                variant="bordered"/>
              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                 className={"px-24 py-2.5 border rounded-3xl"}
                variant="bordered" />
              <Button
                type="submit"
                className="w-full !bg-[#1877f2] text-white h-12 font-semibold" >
                Log In
              </Button>
            </form>
            <div className="text-center mt-4">
              <Link
                href="/forgot-password"
                className="text-[#1877f2] text-sm hover:underline"  >
                Forgot password?
              </Link>
            </div>
            <div className="my-6 border-t border-gray-300" />
            <Button
              onClick={() => router.push("/register")}
              className="w-full !bg-[#42b72a] text-white h-12 font-semibold" >
              register
            </Button>
            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-gray-200" />
              <span className="px-3 text-gray-400 text-xs">OR</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>
            <Button
              variant="bordered"
              className="w-full h-12 flex items-center justify-center gap-2 bg-amber-100" >
              <FcGoogle size={20} />
              Continue with Google
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}