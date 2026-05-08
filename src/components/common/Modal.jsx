const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <button onClick={onClose} className="mb-4 text-red-500">Close</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;