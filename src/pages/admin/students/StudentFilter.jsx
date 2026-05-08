import FilterDropdown from "../../../components/ui/FilterDropdown";

const StudentFilter = ({ value, onChange }) => {
  return (
    <FilterDropdown
      options={["CSE", "ECE", "EEE"]}
      value={value}
      onChange={onChange}
    />
  );
};

export default StudentFilter;