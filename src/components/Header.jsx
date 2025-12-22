import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.clear();
    window.location.href = "/login";
  };

  return (
    <header className="bg-slate-900 text-white px-4 py-4 flex items-center justify-between relative">
      {/* Logo */}
      <h1 className="text-xl font-bold text-indigo-400">
        VMX Movies
      </h1>

      {/* Desktop Menu */}
      <nav className="hidden sm:flex items-center space-x-4">
        <a href="/home" className="hover:text-indigo-400">
          Home
        </a>
        <a
          href="https://t.me"
          target="_blank"
          className="hover:text-indigo-400"
        >
          Telegram
        </a>
        <button
          onClick={logout}
          className="bg-indigo-600 px-4 py-1 rounded hover:bg-indigo-700"
        >
          Logout
        </button>
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Mobile Dropdown */}
      {open && (
        <div className="absolute top-full right-4 mt-2 w-40 bg-slate-800 rounded shadow-lg sm:hidden">
          <a
            href="/home"
            className="block px-4 py-2 hover:bg-slate-700"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="https://t.me"
            target="_blank"
            className="block px-4 py-2 hover:bg-slate-700"
            onClick={() => setOpen(false)}
          >
            Telegram
          </a>
          <button
            onClick={logout}
            className="w-full text-left px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-b"
          >
            Logout
          </button>
        </div>
      )}
    </header>
  );
}
