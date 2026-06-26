import Link from "next/link";

export default function RelatedBooks({ books }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {books.map((book) => (
        <div
          key={book.id}
          className="border rounded-xl overflow-hidden shadow"
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-52 object-cover"
          />

          <div className="p-4">
            <h3 className="font-bold">
              {book.title}
            </h3>

            <p className="text-gray-500">
              {book.author}
            </p>

            <Link
              href={`/browse/${book.id}`}
              className="inline-block mt-4 text-blue-600 font-medium"
            >
              View Details →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}