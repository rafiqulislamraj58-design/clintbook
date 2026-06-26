"use client";

import { useState } from "react";
import { Search, RotateCcw } from "lucide-react";

export default function BooksFilter() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [availability, setAvailability] = useState("");
  const [deliveryFee, setDeliveryFee] = useState("");
  const [sortBy, setSortBy] = useState("");

  const handleReset = () => {
    setSearch("");
    setCategory("");
    setAvailability("");
    setDeliveryFee("");
    setSortBy("");
  };

  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <h3 className="mb-5 text-xl font-bold">Filters</h3>

      <div className="space-y-4">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search books..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500"
        >
          <option value="">All Categories</option>
          <option value="fiction">Fiction</option>
          <option value="sci-fi">Sci-Fi</option>
          <option value="history">History</option>
          <option value="academic">Academic</option>
        </select>
        <select
          value={availability}
          onChange={(e) => setAvailability(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500"
        >
          <option value="">Availability</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>
        <select
          value={deliveryFee}
          onChange={(e) => setDeliveryFee(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500"
        >
          <option value="">Delivery Fee</option>
          <option value="0-50">৳ 0 - 50</option>
          <option value="50-100">৳ 50 - 100</option>
          <option value="100+">৳ 100+</option>
        </select>
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="w-full rounded-xl border border-gray-300 p-3 outline-none focus:border-blue-500"
        >
          <option value="">Sort By</option>
          <option value="newest">Newest</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
          <option value="fee-low">Delivery Fee (Low → High)</option>
          <option value="fee-high">Delivery Fee (High → Low)</option>
        </select>
        <button
          onClick={handleReset}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          <RotateCcw size={18} />
          Reset Filters
        </button>
      </div>
    </div>
  );
}