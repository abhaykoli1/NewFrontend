import { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import API from "../api";

import CountryCodeDropdown from "../components/CountryCodeSelect.jsx";
import { countryCodes, validatePassword } from "../data/countryCodes";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    countryCode: "+91",
    phone: "",
    email: "",
    password: "",
  });

  // 🔢 get max digits from regex
  const getMaxDigits = () => {
    const c = countryCodes.find(
      (c) => c.code === form.countryCode
    );
    if (!c) return 15;

    const match = c.pattern.toString().match(/\{(\d+),?(\d+)?\}/);
    return match ? Number(match[2] || match[1]) : 15;
  };

  const submit = async () => {
    setError("");

    if (!validatePassword(form.password)) {
      setError(
        "Password must be 8+ chars, uppercase, lowercase, number & symbol"
      );
      return;
    }

    try {
      await API.post("/auth/signup", {
        ...form,
        phone: `${form.countryCode}${form.phone}`,
      });

      alert("Signup successful");
      window.location = "/login";
    } catch (err) {
      setError(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <AuthHeader rightText="Log In" rightLink="/login" />

      <div className="flex flex-col items-center mt-14 px-6">
        <h1 className="text-3xl font-bold mb-2">
          Create your VMX Account
        </h1>

        <Input
          icon={<User />}
          placeholder="First Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        {/* 📞 Phone Input FIXED */}
        <div className="w-full max-w-sm bg-white rounded-lg flex items-center px-4 py-3 mb-4">
          <CountryCodeDropdown
            value={form.countryCode}
            onSelect={(code) =>
              setForm({ ...form, countryCode: code, phone: "" })
            }
          />
          <Phone className="text-gray-400 mx-2" size={18} />
          <input
            type="tel"
            inputMode="numeric"
            placeholder="Mobile Number"
            maxLength={getMaxDigits()}
            className="w-full outline-none text-black"
            value={form.phone}
            onChange={(e) => {
              const digits = e.target.value.replace(/\D/g, "");
              setForm({ ...form, phone: digits });
            }}
          />
        </div>

        <Input
          icon={<Mail />}
          placeholder="Email Address"
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
        />

        {/* 🔐 Password */}
        <div className="w-full max-w-sm bg-white rounded-lg flex items-center px-4 py-3 mb-2">
          <Lock className="text-gray-400 mr-3" size={20} />
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full outline-none text-black"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
          <button onClick={() => setShow(!show)}>
            {show ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && (
          <p className="text-red-400 text-sm mb-2">{error}</p>
        )}

        <button
          onClick={submit}
          className="w-full max-w-sm py-3 rounded-full bg-indigo-600 hover:bg-indigo-700 font-semibold mt-4"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

const Input = ({ icon, placeholder, value, onChange }) => (
  <div className="w-full max-w-sm bg-white rounded-lg flex items-center px-4 py-3 mb-4">
    <span className="text-gray-400 mr-3">{icon}</span>
    <input
      placeholder={placeholder}
      className="w-full outline-none text-black"
      value={value}
      onChange={onChange}
    />
  </div>
);
