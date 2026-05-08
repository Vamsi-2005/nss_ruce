import Input from "./Input";

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  return (
    <div className="mb-4">
      <Input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SearchBar;