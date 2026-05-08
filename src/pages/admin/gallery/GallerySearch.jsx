import Input from "../../../components/ui/Input";

const GallerySearch = ({ value, onChange }) => {
  return (
    <Input
      placeholder="Search images..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default GallerySearch;