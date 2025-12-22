import { useState } from "react";
import { countryCodes } from "../data/countryCodes";

export default function CountryCodeDropdown({ value, onSelect }) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const selected =
    countryCodes.find((c) => c.code === value) || countryCodes[0];

  const filtered = countryCodes.filter((c) =>
    c.country.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      {/* Selected */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 bg-white text-black px-2 py-1 rounded"
      >
        <span>{selected.flag}</span>
        <span className="text-sm">{selected.code}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 bg-white text-black w-64 max-h-60 overflow-y-auto rounded shadow-lg mt-2">
          <input
            placeholder="Search country..."
            className="w-full px-3 py-2 border-b outline-none"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {filtered.map((c, i) => (
            <div
              key={i}
              onClick={() => {
                onSelect(c.code);
                setOpen(false);
                setSearch("");
              }}
              className="px-3 py-2 cursor-pointer hover:bg-gray-100 flex gap-2 items-center"
            >
              <span>{c.flag}</span>
              <span className="text-sm">
                {c.country} ({c.code})
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
