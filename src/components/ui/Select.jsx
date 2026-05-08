const Select = ({ options = [], value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded"
    >
      <option value="">Select</option>
      {options.map((opt, i) => (
        <option key={i} value={opt}>{opt}</option>
      ))}
    </select>
  );
};

export default Select;