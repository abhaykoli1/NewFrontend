import { useState } from "react";
import API from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const login = async () => {
    if (!email || !password) {
      alert("Please enter email and password");
      return;
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email: email.trim(),
        password,
      });

      // ✅ save token & role
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.role);

      // ✅ role based redirect
      if (res.data.role === "admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/home";
      }
    } catch (err) {
      alert(err.response?.data?.message || "Invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="w-full max-w-sm bg-slate-900 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 px-4 py-2 rounded bg-white text-black outline-none"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 px-4 py-2 rounded bg-white text-black outline-none"
        />

        <button
          onClick={login}
          disabled={loading}
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition py-2 rounded font-semibold disabled:opacity-50"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* 🔗 SIGNUP LINK */}
        <p className="text-center text-gray-400 text-sm mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-indigo-400 hover:underline"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
