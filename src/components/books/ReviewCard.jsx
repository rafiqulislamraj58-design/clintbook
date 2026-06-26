export default function ReviewCard({ review }) {
  return (
    <div className="border rounded-xl p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{review.user}</h4>
        <span className="text-yellow-500">
          ⭐ {review.rating}
        </span>
      </div>

      <p className="text-gray-600 mt-2">
        {review.comment}
      </p>
    </div>
  );
}