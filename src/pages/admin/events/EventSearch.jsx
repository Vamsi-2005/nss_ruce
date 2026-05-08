import Input from "../../../components/ui/Input";

const EventSearch = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Search events..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default EventSearch;