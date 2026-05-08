const ClearButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-sm text-red-500 underline"
    >
      Clear
    </button>
  );
};

export default ClearButton;