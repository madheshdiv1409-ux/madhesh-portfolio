import "./contact.css";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="contact" id="contact">

      <motion.div
        className="contact-container"
        initial={{ opacity:0, y:80 }}
        whileInView={{ opacity:1, y:0 }}
        transition={{ duration:.8 }}
        viewport={{ once:true }}
      >

       <h2>Let's Build Something Amazing</h2>

<p>
  Whether you have an exciting project, an internship opportunity,
  or simply want to connect, I'd love to hear from you.
  Let's create something meaningful together.
</p>
        <form>

  <div className="input-row">

    <input
      type="text"
      placeholder="Your Name"
    />

    <input
      type="email"
      placeholder="Your Email"
    />

  </div>

  <input
    type="text"
    placeholder="Subject"
  />

  <textarea
            rows="6"
            placeholder="Your Message"
          />

          <button type="button">
    Send Message
</button>

        </form>
       <div className="contact-info">
  <div className="info-card">

    <h4>Email</h4>

    <a
        href="mailto:madheshdiv.1409@gmail.com"
    >
        madheshdiv.1409@gmail.com
    </a>

</div>

 <div className="info-card">

    <h4>GitHub</h4>

    <a
        href="https://github.com/madheshdiv1409-ux"
        target="_blank"
        rel="noopener noreferrer"
    >
        github.com/madheshdiv1409-ux
    </a>

</div>
<div className="info-card">

    <h4>LinkedIn</h4>

    <a
        href="https://www.linkedin.com/in/madhesh-waran14/"
        target="_blank"
        rel="noopener noreferrer"
    >
        linkedin.com/in/madhesh-waran14
    </a>

</div>
  <div className="info-card">

    <h4>Location</h4>

    <p>Chennai, India</p>

  </div>

</div>

      </motion.div>

    </section>
  );
};

export default Contact;