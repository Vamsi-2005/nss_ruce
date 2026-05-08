const TableClear = ({ onClear }) => {
  return (
    <button
      onClick={onClear}
      className="bg-gray-500 text-white px-3 py-2 rounded"
    >
      Clear
    </button>
  );
};

export default TableClear;