const Badge = ({ text }) => {
  return (
    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm">
      {text}
    </span>
  );
};

export default Badge;