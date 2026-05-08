import Input from "../../../components/ui/Input";

const MessageSearch = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Search messages..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default MessageSearch;