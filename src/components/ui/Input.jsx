const Input = ({ type = "text", placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
    />
  );
};

export default Input;