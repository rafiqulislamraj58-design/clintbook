"use client";

import Link from "next/link";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    fee: 50,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Finance",
    fee: 60,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    fee: 70,
    image:
      "https://images.unsplash.com/photo-1524578271613-d550eacf6090",
  },
  {
    id: 4,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    fee: 55,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    id: 5,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Business",
    fee: 45,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    id: 6,
    title: "Ikigai",
    author: "Héctor García",
    category: "Lifestyle",
    fee: 40,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
];

export default function FeaturedBooks() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-5">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">
            Featured Books
          </h2>

          <p className="text-default-500 mt-3 max-w-2xl mx-auto">
            Discover our most popular and recently added books
            available for delivery.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {books.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-3xl overflow-hidden border shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <span className="text-xs bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
                  {book.category}
                </span>

                <h3 className="text-xl font-bold mt-4">
                  {book.title}
                </h3>

                <p className="text-default-500 mt-1">
                  {book.author}
                </p>

                <div className="flex justify-between items-center mt-5">
                  <span className="font-semibold text-primary">
                    ৳ {book.fee}
                  </span>

                  <Link
                    href={`/books/${book.id}`}
                    className="px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center mt-12">
          <Link
            href="/books"
            className="px-8 py-3 rounded-xl bg-black text-white hover:opacity-90"
          >
            View All Books
          </Link>
        </div>
      </div>
    </section>
  );
}