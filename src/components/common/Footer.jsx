import Link from "next/link";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t bg-content1 bg-blue-500/80">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-2xl font-bold text-primary">
              BiblioDrop
            </h2>
            <p className="mt-3 text-default-600">
              Your Local Library, Delivered. Discover books,
              request deliveries, and enjoy reading from home.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Quick Links
            </h3>

            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-primary transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/books"
                  className="hover:text-primary transition"
                >
                  Browse Books
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="hover:text-primary transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="hover:text-primary transition"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-primary transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-4">
              Newsletter
            </h3>

            <p className="text-default-600 mb-4">
              Subscribe to receive book updates and offers.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-lg border outline-none"
              />

              <button className="px-5 py-2 rounded-lg bg-primary text-black">
                Join
              </button>
            </div>

            <div className="flex gap-4 mt-6 text-xl">
              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaGithub />
              </a>

              <a href="#">
                <FaXTwitter />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-10 pt-6 text-center text-sm text-default-500">
          © {new Date().getFullYear()} BiblioDrop. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}