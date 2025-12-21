export default function Header() {
  return (
    <header className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-indigo-400">
        VMX Movies
      </h1>

      <nav className="space-x-4 hidden sm:block">
        <a href="/home" className="hover:text-indigo-400">Home</a>
        <a href="https://t.me" target="_blank" className="hover:text-indigo-400">
          Telegram
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
