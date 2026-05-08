import Select from "./Select";

const FilterDropdown = ({ options, value, onChange }) => {
  return (
    <div className="mb-4">
      <Select options={options} value={value} onChange={onChange} />
    </div>
  );
};

export default FilterDropdown;