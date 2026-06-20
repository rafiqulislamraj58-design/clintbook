"use client";

import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-100 via-background to-secondary-100" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-secondary/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-5">
               ⭐Online Book Delivery Platform
            </span>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight">
              Your Local
              <span className="text-primary block">
                Library Delivered
              </span>
              To Your Doorstep
            </h1>

            <p className="mt-6 text-lg text-default-600 max-w-xl">
              Discover books from local libraries and independent
              book owners. Browse, request delivery, and enjoy
              reading without leaving home.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button
                as={Link}
                href="/books"
                color="primary"
                size="lg"
              >
                Browse Books
              </Button>

              <Button
                as={Link}
                href="/register"
                variant="bordered"
                size="lg"
              >
                Join Now
              </Button>
            </div>
            <div className="flex gap-8 mt-10">
              <div>
                <h3 className="text-3xl font-bold">10K+</h3>
                <p className="text-default-500">
                  Books Available
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">500+</h3>
                <p className="text-default-500">
                  Libraries
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">25K+</h3>
                <p className="text-default-500">
                  Readers
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Library"
              className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
            />

            <div className="absolute -bottom-6 -left-6 bg-background border shadow-xl rounded-2xl p-5">
              <h4 className="font-bold text-lg">
                🚚 Fast Delivery
              </h4>
              <p className="text-default-500 text-sm">
                Books delivered within 24 hours
              </p>
            </div>

            <div className="absolute top-6 right-6 bg-background border shadow-xl rounded-2xl p-5">
              <h4 className="font-bold text-lg">
                ⭐ Trusted Readers
              </h4>
              <p className="text-default-500 text-sm">
                Thousands of happy readers
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}