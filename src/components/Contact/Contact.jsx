import React, { useState } from "react";
import "./contact.scss";
function Contact() {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/hand1.png" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>

          <button type="submit">Send Message</button>
          {message && <span>Thank's I'll reply :) </span>}
        </form>
      </div>
    </div>
  );
}

export default Contact;
