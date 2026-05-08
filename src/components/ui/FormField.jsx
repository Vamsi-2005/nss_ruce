const FormField = ({ label, children, error }) => {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium">{label}</label>
      {children}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default FormField;