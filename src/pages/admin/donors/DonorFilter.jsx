import Select from "../../../components/ui/Select";

const DonorFilter = ({ value, onChange }) => {
  return (
    <Select
      options={["A+", "B+", "O+", "AB+"]}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DonorFilter;