import React from "react";

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="contact-container">
      <form onSubmit={handleSubmit}>
        <p>Email</p>
        <input type="email" name="email" placeholder="Ingrese Email" />
        <p>Motivo</p>
        <input type="texto" name="texto" placeholder="Ingrese Motivo" />
        <p>Descripcion</p>
        <textarea
          name="desc-motivo"
          id="desc-motivo"
          cols="30"
          rows="10"
          placeholder="..."
        ></textarea>
        <button type="submit">
          Enviar Consulta <i className="fas fa-paper-plane"></i>
        </button>
      </form>

      <div className="contact-description">
        <div className="contact_description animate__animated animate__slideInUp">
          <h1 className="contact_title">Contacto</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
