import { useEffect, useState } from "react";
import API from "../api";

export default function AdminProfile() {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    API.get("/admin/me")
      .then((res) => setAdmin(res.data))
      .catch(() => alert("Access denied"));
  }, []);

  if (!admin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-xl mx-auto bg-slate-900 p-6 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">
          Admin Profile
        </h1>

        <div className="space-y-4">
          <ProfileRow label="Name" value={admin.name} />
          <ProfileRow label="Email" value={admin.email} />
          <ProfileRow label="Phone" value={admin.phone} />
          <ProfileRow label="Role" value={admin.role} />
          <ProfileRow
            label="Joined"
            value={new Date(admin.createdAt).toDateString()}
          />
        </div>

        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "/login";
          }}
          className="w-full mt-6 bg-red-600 hover:bg-red-700 py-2 rounded font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

const ProfileRow = ({ label, value }) => (
  <div className="flex justify-between border-b border-slate-700 pb-2">
    <span className="text-gray-400">{label}</span>
    <span className="font-semibold">{value}</span>
  </div>
);
