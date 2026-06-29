"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Button, Input, Card } from "@heroui/react";
import { FcGoogle } from "react-icons/fc";
import { useAuth } from "@/context/AuthProvider";

export default function RegisterPage() {
  const router = useRouter();

  const {
    signup,
    googleLogin,
    loading,
    error,
    clearError,
    isAuthenticated,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [validationError, setValidationError] = useState("");

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/dashboard");
    }
  }, [isAuthenticated, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationError("");
    clearError();

    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      setValidationError("Please fill in all fields");
      return;
    }

    if (name.trim().length < 2) {
      setValidationError("Name must be at least 2 characters");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setValidationError("Invalid email format");
      return;
    }

    if (password.length < 6) {
      setValidationError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setValidationError("Passwords do not match");
      return;
    }

    const result = await signup(email, password, name);

    if (result.success) {
      router.push("/dashboard");
    }
  };

  const handleGoogleSignup = async () => {
    clearError();

    const result = await googleLogin();

    if (result.success) {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5] px-4 py-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <Card className="bg-white w-full p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-black/5">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold mb-2 text-[#1877f2]">
              BiblioDrop
            </h1>

            <p className="text-gray-500 mb-5">
              Create your account
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <Input
                type="text"
                label="Full Name"
                placeholder="Enter your name"
                variant="bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={loading}
                className="w-full border-2 p-3 rounded-2xl"
              />

              <Input
                type="email"
                label="Email"
                placeholder="mail@example.com"
                variant="bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="w-full border-2 rounded-2xl p-3"
              />

              <Input
                type="password"
                label="Password"
                placeholder="••••••••"
                variant="bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="w-full border-2 rounded-2xl p-3"
              />

              <Input
                type="password"
                label="Confirm Password"
                placeholder="••••••••"
                variant="bordered"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                className="w-full border-2 rounded-2xl p-3"
              />

              {validationError && (
                <div className="p-3 bg-red-100 border border-red-400 rounded-lg">
                  <p className="text-red-600 text-sm font-medium">
                    {validationError}
                  </p>
                </div>
              )}

              {error && (
                <div className="p-3 bg-red-100 border border-red-400 rounded-lg">
                  <p className="text-red-600 text-sm font-medium">
                    {error}
                  </p>
                </div>
              )}

              <Button
                type="submit"
                disabled={loading}
                className="w-full !bg-[#42b72a] text-white h-12 font-semibold hover:bg-[#36a420] transition-colors disabled:opacity-50"
              >
                {loading ? "Creating Account..." : "Create Account"}
              </Button>
            </form>

            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-gray-200" />
              <span className="px-3 text-gray-400 text-xs">OR</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            <Button
              variant="bordered"
              onClick={handleGoogleSignup}
              disabled={loading}
              className="w-full h-12 flex items-center justify-center gap-2 bg-amber-100 hover:bg-amber-200 transition-colors disabled:opacity-50"
            >
              <FcGoogle size={20} />
              {loading ? "Please wait..." : "Sign up with Google"}
            </Button>

            <div className="text-center mt-5">
              <span className="text-sm text-gray-500">
                Already have an account?{" "}
              </span>

              <Link
                href="/login"
                className="text-[#1877f2] font-medium hover:underline"
              >
                Log In
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}