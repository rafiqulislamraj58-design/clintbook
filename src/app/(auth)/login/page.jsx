'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Card } from '@heroui/react';
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from '@/context/AuthProvider';

export default function LoginPage() {
  const router = useRouter();

  const {
    login,
    googleLogin,
    loading,
    error,
    clearError,
    isAuthenticated,
  } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/dashboard');
    }
  }, [isAuthenticated, router]);

  if (isAuthenticated) {
    return null;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationError('');
    clearError();

    if (!email.trim() || !password.trim()) {
      setValidationError('Please fill in all fields');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      setValidationError('Invalid email format');
      return;
    }

    if (password.length < 6) {
      setValidationError('Password must be at least 6 characters');
      return;
    }

    await login(email, password);
  };

  const handleGoogleLogin = async () => {
    clearError();

    const result = await googleLogin();

    if (!result.success) {
      console.log(result.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f0f2f5] px-4 py-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl">
        <Card className="bg-white w-full p-6 sm:p-8 md:p-10 rounded-xl shadow-xl border border-black/5">
          <div className="w-full">
            <h1 className="text-4xl font-extrabold mb-5 text-[#1877f2] text-center">
              BiblioDrop
            </h1>

            <form onSubmit={handleSubmit} className="space-y-5">
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
                className="w-full !bg-[#1877f2] text-white h-12 font-semibold hover:bg-[#165cd4] transition-colors disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Log In'}
              </Button>
            </form>

            <div className="text-center mt-4">
              <Link
                href="/forgot-password"
                className="text-[#1877f2] text-sm hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <div className="my-6 border-t border-gray-300" />

            <Button
              onClick={() => router.push('/register')}
              disabled={loading}
              className="w-full !bg-[#42b72a] text-white h-12 font-semibold hover:bg-[#36a420] transition-colors disabled:opacity-50"
            >
              Create New Account
            </Button>

            <div className="flex items-center my-5">
              <div className="flex-1 border-t border-gray-200" />
              <span className="px-3 text-gray-400 text-xs">OR</span>
              <div className="flex-1 border-t border-gray-200" />
            </div>

            <Button
              onClick={handleGoogleLogin}
              type="button"
              variant="bordered"
              disabled={loading}
              className="w-full h-12 flex items-center justify-center gap-2 bg-amber-100 hover:bg-amber-200 transition-colors disabled:opacity-50"
            >
              <FcGoogle size={20} />
              Continue with Google
            </Button>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don't have an account?{' '}
              <Link
                href="/register"
                className="text-[#1877f2] font-semibold hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}