import shared from './../../components/sharedComponents/shared.module.scss';
import styles from './contact.module.scss';
import { useFormik } from 'formik';

const validate = (values: { name: string; email: string; message: string }) => {
  const errors: { name?: string; email?: string; message?: string } = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length > 15) {
    errors.name = 'Must be 15 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length > 200) {
    errors.message = 'Limit: 200 chars';
  }

  return errors;
};

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate,
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
              className={styles.input}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className={styles.errormessage}>{formik.errors.name}</div>
            )}
            <input
              type="text"
              id="email"
              name="email"
              placeholder="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={styles.input}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className={styles.errormessage}>{formik.errors.email}</div>
            )}
            <textarea
              id="message"
              name="message"
              cols={30}
              rows={3}
              placeholder="message"
              onChange={formik.handleChange}
              value={formik.values.message}
              className={styles.textarea}
              onBlur={formik.handleBlur}
            ></textarea>
            {formik.touched.message && formik.errors.message && (
              <div className={styles.errormessage}>{formik.errors.message}</div>
            )}
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
