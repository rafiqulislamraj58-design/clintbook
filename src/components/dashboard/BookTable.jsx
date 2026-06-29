export default function BookTable() {
  return (
    <div className="overflow-x-auto rounded-xl border">
      <table className="w-full">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 text-left">Title</th>
            <th className="p-3 text-left">Author</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t">
            <td className="p-3">React Guide</td>
            <td className="p-3">John Doe</td>
            <td className="p-3">Available</td>
          </tr>

          <tr className="border-t">
            <td className="p-3">Next.js Basics</td>
            <td className="p-3">Jane Smith</td>
            <td className="p-3">Borrowed</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}