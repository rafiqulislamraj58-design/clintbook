import BookDetails from "@/components/books/BookDetails";
import ReviewCard from "@/components/books/ReviewCard";
import RelatedBooks from "@/components/books/RelatedBooks";

const book = {
  id: 1,
  title: "Atomic Habits",
  author: "James Clear",
  category: "Self Development",
  deliveryFee: 50,
  available: true,
  image:
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f",
  description:
    "Atomic Habits is a practical guide for building good habits, breaking bad ones, and achieving remarkable results through small daily improvements.",
};

const reviews = [
  {
    id: 1,
    user: "Rahim",
    rating: 5,
    comment:
      "Excellent book. Highly recommended.",
  },
  {
    id: 2,
    user: "Karim",
    rating: 4,
    comment:
      "Very useful and inspiring.",
  },
];

const relatedBooks = [
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    image:
      "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
  },
  {
    id: 3,
    title: "Ikigai",
    author: "Hector Garcia",
    image:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
  },
  {
    id: 4,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    image:
      "https://images.unsplash.com/photo-1512820790803-83ca734da794",
  },
];

export default function BookDetailsPage() {
  return (
    <section className="max-w-7xl mx-auto px-5 py-14">
      <BookDetails book={book} />

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Reviews
        </h2>

        <div className="space-y-6">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
            />
          ))}
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8">
          Related Books
        </h2>

        <RelatedBooks books={relatedBooks} />
      </div>
    </section>
  );
}