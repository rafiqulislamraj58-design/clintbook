export default function DashboardNavbar() {
  return (
    <header className="h-16 bg-blue-200 border-b flex items-center justify-between px-6 shadow-sm">
      <h1 className="text-xl font-bold">
        Dashboard
      </h1>

      <div className="flex items-center gap-3">
        <img
          src="https://i.pravatar.cc/100"
          alt="User"
          className="w-10 h-10 rounded-full"
        />
      </div>
    </header>
  );
}