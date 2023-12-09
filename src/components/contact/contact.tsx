import shared from '../sharedComponents/shared.module.scss';
import './contact.module.scss';

const Contact = () => {
  return (
    <div className={shared.background}>
      <div className={shared.container}>
        <h1 className={shared.headingwhite}>Get in touch</h1>
        <p className={shared.paragraphwhite}>
          Get in touch with our team to learn more about our services and how we
          can elevate your property sales.
        </p>
        <form action="">
          <label htmlFor="">Your email</label>
          <input
            type="email"
            name=""
            id=""
            placeholder="example@gmail.com"
            required
          />
          <label htmlFor="">Your message</label>
          <textarea
            id="message"
            cols={70}
            maxLength={500}
            rows={10}
            placeholder="Your message"
          ></textarea>
          <input type="submit" name="" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
