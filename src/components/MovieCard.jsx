export default function MovieCard({ image, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="block bg-slate-800 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="text-white font-semibold text-lg">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mt-1">
          Join Telegram →
        </p>
      </div>
    </a>
  );
}
