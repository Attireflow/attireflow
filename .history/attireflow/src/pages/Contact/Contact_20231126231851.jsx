import classes from "./Contact.module.css";


function Contact() {
  return (
    <div className={classes.contact_section}>
      <div className="header-background">
        <div className={classes.contact_hero}>
          <h1>CONTACT US</h1>
        </div>
      </div>
      <form className={classes.contact-form}>
        <div className="form-group">
          <label for="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label for="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label for="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Enter your message"
            rows="4"
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Contact;
