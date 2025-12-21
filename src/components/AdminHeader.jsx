export default function AdminHeader() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-400">
        Admin Panel
      </h1>

      <nav className="space-x-4">
        <a href="/admin" className="hover:text-indigo-400">
          Users
        </a>
        <a href="/admin/profile" className="hover:text-indigo-400">
          My Profile
        </a>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="bg-indigo-600 px-4 py-1 rounded hover:bg-indigo-700"
        >
          Logout
        </button>
      </nav>
    </header>
  );
}
