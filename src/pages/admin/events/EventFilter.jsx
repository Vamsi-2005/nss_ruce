import Select from "../../../components/ui/Select";

const EventFilter = ({ value, onChange }) => {
  return (
    <Select
      options={["Camp", "Awareness", "Cleanliness"]}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default EventFilter;