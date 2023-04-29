import React from 'react';
import './Footer.css';

function Contact() {
  return (
    <section>
      <h2>Contato</h2>
      <form>
        <div>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="message">Mensagem:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default Contact;