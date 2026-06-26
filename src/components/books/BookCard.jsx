import Link from "next/link";

export default function BookCard({ book }) {
  return (
    <div className="border rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
      <img
        src={book.image}
        alt={book.title}
        className="w-full h-64 object-cover" />

      <div className="p-4">
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {book.category}
        </span>

        <h3 className="text-xl font-bold mt-3">
          {book.title}
        </h3>

        <p className="text-gray-500">
          {book.author}
        </p>

        <div className="flex justify-between mt-4">
          <span className="font-semibold">
            ৳ {book.deliveryFee}
          </span>

          <span
            className={`text-sm font-medium ${
              book.available
                ? "text-green-600"
                : "text-red-500"
            }`} >
            {book.available
              ? "Available"
              : "Unavailable"}
          </span>
        </div>

        <Link
          href={`/browse/${book.id}`}
          className="block mt-4 text-center bg-blue-600 text-white py-2 rounded-lg"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}