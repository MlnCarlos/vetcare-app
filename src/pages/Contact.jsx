import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [pet, setPet] = useState("");
  const [date, setDate] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setName("");
    setPet("");
    setDate("");
    setMessage("");
    
  };

  return (
    <div className="contact-container">
      <h1>Agenda tu cita</h1>

      {submitted && (
        <p className="success-message">
          ✅ Tu cita fue agendada correctamente
        </p>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          placeholder="Nombre del dueño"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          placeholder="Nombre de la mascota"
          value={pet}
          onChange={(e) => setPet(e.target.value)}
          required
        />

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <textarea
          placeholder="Describe el motivo de la consulta"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button type="submit">Agendar cita</button>
      </form>
    </div>
  );
}

export default Contact;
