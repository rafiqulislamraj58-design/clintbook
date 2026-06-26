export default function BooksFilter() {
  return (
    <div className="border rounded-2xl p-5 bg-white">
      <h3 className="font-bold text-lg mb-4">
        Filters
      </h3>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Search books..."
          className="w-full border rounded-lg px-4 py-2"/>

        <select className="w-full border rounded-lg px-4 py-2">
          <option>All Categories</option>
          <option>Fiction</option>
          <option>Sci-Fi</option>
          <option>History</option>
          <option>Academic</option>
        </select>

        <select className="w-full border rounded-lg px-4 py-2">
          <option>Availability</option>
          <option>Available</option>
          <option>Unavailable</option>
        </select>

        <select className="w-full border rounded-lg px-4 py-2">
          <option>Delivery Fee</option>
          <option>0-50</option>
          <option>50-100</option>
          <option>100+</option>
        </select>
      </div>
    </div>
  );
}