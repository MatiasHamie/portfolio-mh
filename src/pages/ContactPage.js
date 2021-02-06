import React from "react";

import emailjs from "emailjs-com";
import { useForm } from "../hooks/useForm";

const ContactPage = () => {
  const sendEmail = (e) => {
    console.log(`${process.env.REACT_APP_SERVICE_ID}`);
    e.preventDefault();
    emailjs
      .sendForm(
        `${process.env.REACT_APP_SERVICE_ID}`,
        `${process.env.REACT_APP_TEMPLATE_ID}`,
        e.target,
        `${process.env.REACT_APP_USER_ID}`
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  const initialForm = {
    email: "",
    motivo: "",
    desc: "",
  };

  const [formValues, handleInputChange, reset] = useForm(initialForm);

  const { email, motivo, desc } = formValues;

  return (
    <div
      className="contact-container mx-auto row
     d-flex flex-md-row flex-column-reverse flex-wrap 
     align-items-center justify-content-center
     overflow-hidden "
    >
      <form className="col" onSubmit={sendEmail}>
        <p>Email</p>
        <input
          type="email"
          name="email"
          value={email}
          onChange={handleInputChange}
          placeholder="Ingrese Email"
        />
        <p>Motivo</p>
        <input
          type="texto"
          name="motivo"
          value={motivo}
          onChange={handleInputChange}
          placeholder="Ingrese Motivo"
        />
        <p>Descripcion</p>
        <textarea
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          placeholder="..."
          value={desc}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit">
          Enviar Consulta <i className="fas fa-paper-plane"></i>
        </button>
      </form>

      <div className="col contact-description">
        <div className="contact_description animate__animated animate__slideInUp">
          <h1 className="contact_title text-center">Contacto</h1>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
