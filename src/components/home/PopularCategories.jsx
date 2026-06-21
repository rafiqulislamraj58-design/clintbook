"use client";

import Link from "next/link";
import {
  FaBook,
  FaRocket,
  FaGraduationCap,
  FaLandmark,
  FaUserTie,
  FaFeather,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    name: "Fiction",
    icon: <FaBook size={35} />,
  },
  {
    id: 2,
    name: "Sci-Fi",
    icon: <FaRocket size={35} />,
  },
  {
    id: 3,
    name: "Academic",
    icon: <FaGraduationCap size={35} />,
  },
  {
    id: 4,
    name: "History",
    icon: <FaLandmark size={35} />,
  },
  {
    id: 5,
    name: "Biography",
    icon: <FaUserTie size={35} />,
  },
  {
    id: 6,
    name: "Novel",
    icon: <FaFeather size={35} />,
  },
];

export default function PopularCategories() {
  return (
    <section className="py-20 bg-content1">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Popular Categories
          </h2>

          <p className="text-default-500 mt-3">
            Explore books by category and find your next read.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/books?category=${category.name}`}
              className="group border rounded-3xl p-8 bg-background hover:shadow-xl transition duration-300"
            >
              <div className="text-primary mb-5 group-hover:scale-110 transition">
                {category.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {category.name}
              </h3>

              <p className="text-default-500 mt-2">
                Browse books in {category.name}.
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}