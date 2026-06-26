export default function BookDetails({ book }) {
  return (
    <div className="grid lg:grid-cols-2 gap-10">
      <img
        src={book.image}
        alt={book.title}
        className="rounded-2xl w-full h-[600px] object-cover"
      />

      <div>
        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          {book.category}
        </span>

        <h1 className="text-5xl font-bold mt-4">
          {book.title}
        </h1>

        <p className="text-xl text-gray-500 mt-2">
          by {book.author}
        </p>

        <div className="mt-6 flex gap-8">
          <h3 className="text-2xl font-bold">
            ৳ {book.deliveryFee}
          </h3>

          <span
            className={`font-semibold ${
              book.available
                ? "text-green-600"
                : "text-red-500"
            }`}
          >
            {book.available
              ? "Available"
              : "Unavailable"}
          </span>
        </div>

        <p className="mt-8 text-gray-600 leading-8">
          {book.description}
        </p>

        <button className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-xl">
          Request Delivery
        </button>
      </div>
    </div>
  );
}