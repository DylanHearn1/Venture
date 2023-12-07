import shared from '../sharedComponents/shared.module.scss';

const Contact = () => {
  return (
    <div className={shared.background}>
      <div className={shared.container}>
        <h1 className={shared.headingwhite}>Get in touch</h1>
        <p className={shared.paragraphwhite}>
          Get in touch with our team to learn more about our services and how we
          can elevate your property sales.
        </p>
      </div>
    </div>
  );
};

export default Contact;
