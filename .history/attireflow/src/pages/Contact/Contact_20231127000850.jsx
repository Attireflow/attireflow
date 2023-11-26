import { useState } from "react";
import classes from "./Contact.module.css";


const Input = ({ placeholder, name, type, handleForm }) => {
  return (
    <input
      placeholder={placeholder}
      name={name}
      type={type}
      onChange={(e) => handleForm(e, name)}
    />
  );
};


function Contact() {
  const [form, setForm] = useState({name: "", email: "", message: ""});

  const handleForm = (e, name) =>
    setForm((prevState) => ({ ...prevState, [name]: e.target.value }));




  return (
    <div className={classes.contact_section}>
      <div className="header-background">
        <div className={classes.contact_hero}>
          <h1>Contact Us</h1>
        </div>
      </div>
      <div className={classes.contact_form}>
        <h2>Contact Form</h2>
        <form>
          <div className={classes.form_group}>
            <Input
              placeholder="Enter Your Name"
              name="name"
              type="text"
              handleForm={handleForm}
            />
          </div>
          <div className={classes.form_group}>
            <Input
              placeholder="Enter Your Email"
              name="email"
              type="text"
              handleForm={handleForm}
            />
          </div>
          <div className={classes.form_group}>
            <textarea
              id="message"
              name="message"
              placeholder="&#x1F4AC; Enter your message"
              rows="4"
              required
              value={form.message}
              onChange={(e) => fillForm(e.target.value, name)}
            ></textarea>
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
