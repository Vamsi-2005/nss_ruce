import { useState } from "react";
import { sendMessage } from "../../services/contactService";

import ContactForm from "../../components/forms/ContactForm";

const Contact = () => {
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data) => {
    await sendMessage(data);
    setSuccess(true);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>

      {success && <p className="text-green-600">Message sent!</p>}

      <ContactForm onSubmit={handleSubmit} />
    </div>
  );
};

export default Contact;