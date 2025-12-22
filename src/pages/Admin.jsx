// import { useEffect, useState } from "react";
// import API from "../api";
// import AdminHeader from "../components/AdminHeader";

// export default function Admin() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     loadUsers();
//   }, []);

//   const loadUsers = async () => {
//     try {
//       const res = await API.get("/admin/users");
//       setUsers(res.data);
//     } catch (err) {
//       alert("Access denied");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const deleteUser = async (id) => {
//     if (!window.confirm("Delete this user?")) return;

//     await API.delete(`/admin/users/${id}`);
//     setUsers(users.filter((u) => u._id !== id));
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-black text-white">
//         Loading...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-black text-white p-6">
//       <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>

//       <div className="overflow-x-auto">
//         <table className="w-full border border-slate-700">
//           <thead className="bg-slate-800">
//             <tr>
//               <th className="p-3 border">Name</th>
//               <th className="p-3 border">Email</th>
//               <th className="p-3 border">Phone</th>
//               <th className="p-3 border">Role</th>
//               <th className="p-3 border">Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((u) => (
//               <tr key={u._id} className="text-center">
//                 <td className="p-3 border">{u.name}</td>
//                 <td className="p-3 border">{u.email}</td>
//                 <td className="p-3 border">{u.phone}</td>
//                 <td className="p-3 border">{u.role}</td>
//                 <td className="p-3 border">
//                   {u.role !== "admin" && (
//                     <button
//                       onClick={() => deleteUser(u._id)}
//                       className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
//                     >
//                       Delete
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

import { useEffect, useState } from "react";
import API from "../api";
import AdminHeader from "../components/AdminHeader";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const res = await API.get("/admin/users");
      setUsers(res.data);
    } catch {
      alert("Access denied");
    } finally {
      setLoading(false);
    }
  };

  const deleteUser = async (id) => {
    if (!window.confirm("Delete this user?")) return;
    await API.delete(`/admin/users/${id}`);
    setUsers(users.filter((u) => u._id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ✅ HEADER WITH LOGOUT */}
      <AdminHeader />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">
          Admin Panel
        </h1>

        <div className="overflow-x-auto">
          <table className="w-full border border-slate-700">
            <thead className="bg-slate-800">
              <tr>
                <th className="p-3 border">Name</th>
                <th className="p-3 border">Email</th>
                <th className="p-3 border">Phone</th>
                <th className="p-3 border">Role</th>
                <th className="p-3 border">Last Login</th>
                <th className="p-3 border">Action</th>
              </tr>
            </thead>

            <tbody>
              {users.map((u) => (
                <tr key={u._id} className="text-center">
                  <td className="p-3 border">{u.name}</td>
                  <td className="p-3 border">{u.email}</td>
                  <td className="p-3 border">{u.phone}</td>
                  <td className="p-3 border">{u.role}</td>

                  {/* ✅ LAST LOGIN */}
                  <td className="p-3 border text-sm">
                    {u.lastLogin
                      ? new Date(u.lastLogin).toLocaleString()
                      : "Never"}
                  </td>

                  <td className="p-3 border">
                    {u.role !== "admin" && (
                      <button
                        onClick={() => deleteUser(u._id)}
                        className="bg-red-600 px-3 py-1 rounded hover:bg-red-700"
                      >
                        Delete
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
