export default function Pagination() {
  return (
    <div className="flex justify-center gap-3 mt-12">
      <button className="border px-4 py-2 rounded-lg">
        Previous
      </button>

      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">
        1
      </button>

      <button className="border px-4 py-2 rounded-lg">
        2
      </button>

      <button className="border px-4 py-2 rounded-lg">
        Next
      </button>
    </div>
  );
}