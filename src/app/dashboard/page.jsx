import AddBookForm from "@/components/dashboard/AddBookForm";
import BookTable from "@/components/dashboard/BookTable";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Manage Books</h1>
      <AddBookForm />
      <BookTable />
    </div>
  );
}