"use client";

export default function AddBookForm() {
  return (
    <form className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 border border-gray-300 rounded-xl shadow-sm bg-white max-w-2xl mx-auto">
      <h2 className="col-span-1 md:col-span-2 text-2xl font-bold text-gray-800 mb-2">
        Add New Book
      </h2>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Book Title</label>
        <input 
          type="text" 
          placeholder="Enter book title" 
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Author</label>
        <input 
          type="text" 
          placeholder="Enter author name" 
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Category</label>
        <input 
          type="text" 
          placeholder="Enter category" 
          className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-600">Price</label>
        <div className="relative">
          <span className="absolute left-3 top-3.5 text-gray-500">$</span>
          <input 
            type="number" 
            placeholder="0.00" 
            className="w-full border border-gray-300 rounded-lg p-3 pl-8 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
          />
        </div>
      </div>
      <button 
        type="submit"
        className="col-span-1 md:col-span-2 mt-4 bg-blue-600 text-white font-semibold py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-md"
      >
        Add Book
      </button>
    </form>
  );
}