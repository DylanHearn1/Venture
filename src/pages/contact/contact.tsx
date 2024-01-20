import shared from './../../components/sharedComponents/shared.module.scss';
import styles from './contact.module.scss';
import { useFormik } from 'formik';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className={shared.background}>
      <div className={shared.container}>
        <h1 className={shared.headingwhite}>Get in touch</h1>
        <div className={styles.contact}>
          <p className={shared.paragraphwhite}>
            Get in touch with our team to learn more about our services and how
            we can elevate your property sales. <br /> <br />
            Optinally call us on +44 0483 849304 during normal business hours.
          </p>
          <form
            onSubmit={formik.handleSubmit}
            id="contact"
            className={styles.form}
          >
            <input
              type="text"
              id="name"
              name="name"
              placeholder="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              required
              className={styles.input}
            />
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              required
              className={styles.input}
            />
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={3}
              placeholder="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              required
              className={styles.textarea}
            ></textarea>
            <button type="submit" className={styles.submit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
