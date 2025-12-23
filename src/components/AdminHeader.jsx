export default function AdminHeader() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-400">Admin Panel</h1>

      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = "/login";
        }}
        className="bg-red-600 px-4 py-1 rounded hover:bg-red-700"
      >
        Logout
      </button>
    </header>
  );
}
