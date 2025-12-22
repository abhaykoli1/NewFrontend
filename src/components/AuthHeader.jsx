export default function AuthHeader({ rightText, rightLink }) {
  return (
    <div className="flex justify-between items-center px-6 pt-6">
      <div className="text-xl font-bold">
        <span className="text-blue-400">V</span>
        <span className="text-yellow-400">M</span>
        <span className="text-orange-400">X</span>
      </div>
      <a href={rightLink} className="text-white text-sm font-medium">
        {rightText}
      </a>
    </div>
  );
}
