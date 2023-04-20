import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Particle from './Particle';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
    emailjs.sendForm('service_1iy08ca', 'template_vv1d4nn', form.current, '93-pqfzVA47yKAoP6')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <section  className="contactEmail">
        <Particle />
      <div className="container">
        <h2 className="--text-center">Contact us</h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="--form-control --card --flex-center --dir-column"
        >
          <input
            type="text"
            placeholder="Full Name"
            name="user_name"
            required
          />
          <input type="email" placeholder="Email" name="user_email" required />
          <input type="text" placeholder="Subject" name="subject" required />
          <textarea name="message" cols="30" rows="10"></textarea>
          <button type="submit" className="--btn --btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
