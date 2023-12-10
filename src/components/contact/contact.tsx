import shared from '../sharedComponents/shared.module.scss';
import './contact.scss';

const Contact = () => {
  return (
    <div className={shared.background}>
      <div className={shared.container}>
        <h1 className={shared.headingwhite}>Get in touch</h1>
        <div className="contact">
          <p className={shared.paragraphwhite}>
            Get in touch with our team to learn more about our services and how
            we can elevate your property sales.
          </p>
          <form action="">
            <input type="text" name="" id="" placeholder="name" />
            <input type="email" name="" id="" placeholder="email" />
            <textarea
              name=""
              id=""
              cols={30}
              rows={3}
              placeholder="message"
            ></textarea>
            <input type="submit" className="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
