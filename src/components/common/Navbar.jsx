'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { FiMenu, FiX, FiLogOut, FiUser } from 'react-icons/fi';
import { useAuth } from '@/hooks/useAuth';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();

  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    logout();
    setIsOpen(false);
    router.push('/');
  };

  const navLinkClass = (path) =>
    `font-medium transition ${
      pathname === path
        ? 'text-blue-600'
        : 'text-gray-700 hover:text-blue-600'
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b bg-blue-300/90 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-extrabold text-blue-600">
          <span>.</span>
          <span>BiblioDrop</span>
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <Link href="/" className={navLinkClass('/')}>
              Home
            </Link>
          </li>

          <li>
            <Link href="/browse" className={navLinkClass('/browse')}>
              Browse Books
            </Link>
          </li>

          {isAuthenticated ? (
            <>
              <li className="group relative">
                <button className="font-medium text-gray-700 hover:text-blue-600">
                  Dashboard ▼
                </button>

                <div className="absolute left-0 mt-2 hidden w-52 rounded-xl border bg-white shadow-lg group-hover:block">
                  {user?.role === 'user' && (
                    <Link
                      href="/dashboard/user"
                      className="block px-4 py-3 hover:bg-gray-100"
                    >
                      My Dashboard
                    </Link>
                  )}

                  {user?.role === 'librarian' && (
                    <Link
                      href="/dashboard/librarian"
                      className="block px-4 py-3 hover:bg-gray-100"
                    >
                      Librarian Dashboard
                    </Link>
                  )}

                  {user?.role === 'admin' && (
                    <Link
                      href="/dashboard/admin"
                      className="block px-4 py-3 hover:bg-gray-100"
                    >
                      Admin Dashboard
                    </Link>
                  )}
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white">
                  <FiUser />
                </div>

                <span className="font-medium text-gray-700">
                  {user?.name}
                </span>

                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
                >
                  <FiLogOut />
                  Logout
                </button>
              </li>
            </>
          ) : (
            <li>
              <Link
                href="/login"
                className="rounded-xl bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
              >
                Login
              </Link>
            </li>
          )}
        </ul>

        <button
          className="text-2xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t bg-white shadow-md md:hidden">
          <ul className="space-y-2 px-4 py-4">
            <li>
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="block py-2"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/browse"
                onClick={() => setIsOpen(false)}
                className="block py-2"
              >
                Browse Books
              </Link>
            </li>

            {isAuthenticated ? (
              <>
                <li>
                  <Link
                    href={`/dashboard/${user?.role}`}
                    onClick={() => setIsOpen(false)}
                    className="block py-2"
                  >
                    Dashboard
                  </Link>
                </li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="w-full py-2 text-left text-red-600"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="block py-2"
                >
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}