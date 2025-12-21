export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-400 text-center py-4 mt-10">
      <p className="text-sm">
        © {new Date().getFullYear()} VMX Movies • All Rights Reserved
      </p>
    </footer>
  );
}
