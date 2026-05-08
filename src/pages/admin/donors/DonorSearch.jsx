import Input from "../../../components/ui/Input";

const DonorSearch = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Search donors..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default DonorSearch;