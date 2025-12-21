import { useState } from "react";
import AuthHeader from "../components/AuthHeader";
import { Eye, EyeOff, Mail, Lock, User, Phone } from "lucide-react";
import API from "../api";

export default function Signup() {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const submit = async () => {
    try {
      await API.post("/auth/signup", form);
      alert("Signup successful");
      window.location = "/login";
    } catch (err) {
      alert(err.response?.data?.message || "Signup failed");
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
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <Input
          icon={<Phone />}
          placeholder="Mobile Number"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />

        <Input
          icon={<Mail />}
          placeholder="Email Address"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <div className="w-full max-w-sm bg-white rounded-lg flex items-center px-4 py-3 mb-4">
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
