const Button = ({ children, variant = "primary" }) => {
  const styles = {
    primary: "bg-secondary text-white px-6 py-2 rounded-lg",
    outline: "border-2 border-white text-white px-6 py-2 rounded-lg",
  };

  return (
    <button className={`${styles[variant]} hover:opacity-90 transition`}>
      {children}
    </button>
  );
};

export default Button;