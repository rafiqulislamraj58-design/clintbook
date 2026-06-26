import BookCard from "@/components/books/BookCard";
import BooksFilter from "@/components/books/BooksFilter";
import Pagination from "@/components/books/Pagination";

const books = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Development",
    deliveryFee: 50,
    available: true,
    image:
      "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  },
  {
    id: 2,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    category: "Finance",
    deliveryFee: 60,
    available: true,
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
  {
    id: 3,
    title: "Deep Work",
    author: "Cal Newport",
    category: "Productivity",
    deliveryFee: 40,
    available: false,
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    id: 4,
    title: "Ikigai",
    author: "Hector Garcia",
    category: "Lifestyle",
    deliveryFee: 70,
    available: true,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
  {
    id: 5,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    category: "Finance",
    deliveryFee: 55,
    available: true,
    image:
      "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
  },
  {
    id: 6,
    title: "Think and Grow Rich",
    author: "Napoleon Hill",
    category: "Business",
    deliveryFee: 45,
    available: true,
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
];

export default function BrowsePage() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-14">
      <div className="mb-10">
        <h1 className="text-4xl font-bold">
          Browse Books
        </h1>

        <p className="text-gray-500 mt-2">
          Discover books from our growing collection.
        </p>
      </div>

      <div className="grid lg:grid-cols-4 gap-8">
        <div>
          <BooksFilter />
        </div>

        <div className="lg:col-span-3">
          <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {books.map((book) => (
              <BookCard
                key={book.id}
                book={book}
              />
            ))}
          </div>

          <Pagination />
        </div>
      </div>
    </section>
  );
}