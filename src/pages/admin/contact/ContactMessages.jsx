import { useState, useEffect } from "react";
import MessageSearch from "./MessageSearch";

const ContactMessages = () => {
  const [messages, setMessages] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Replace with API later
    setMessages([
      { name: "Anu", email: "anu@mail.com", message: "Hello NSS" },
      { name: "Vamsi", email: "vamsi@mail.com", message: "Need info" },
    ]);
  }, []);

  const filtered = messages.filter((m) =>
    m.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container-page">
      <h1 className="section-title">Contact Messages</h1>

      <MessageSearch value={search} onChange={setSearch} />

      <div className="space-y-3 mt-4">
        {filtered.map((m, i) => (
          <div key={i} className="card">
            <p><b>{m.name}</b> ({m.email})</p>
            <p>{m.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactMessages;