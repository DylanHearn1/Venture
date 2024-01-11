import shared from './../../Components/sharedComponents/shared.module.scss';
import './contact.scss';

const Contact = () => {
  return (
    <div className={shared.background}>
      <div className={shared.container}>
        <h1 className={shared.headingwhite}>Get in touch</h1>
        <div className="contact">
          <p className={shared.paragraphwhite}>
            Get in touch with our team to learn more about our services and how
            we can elevate your property sales. <br /> <br />
            Optinally call us on +44 0483 849304 during normal business hours.
          </p>
          <form action="https://vserver-63as.onrender.com/message" id="contact">
            <input type="text" id="name" placeholder="name" required />
            <input type="email" id="email" placeholder="email" required />
            <textarea
              id="message"
              cols={30}
              rows={3}
              placeholder="message"
              required
            ></textarea>
            <input type="submit" className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
