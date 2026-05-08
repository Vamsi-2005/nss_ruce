const Card = ({ children }) => {
  return (
    <div className="bg-white shadow-md rounded p-4">
      {children}
    </div>
  );
};

export default Card;