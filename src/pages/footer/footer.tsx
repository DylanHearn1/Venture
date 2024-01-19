import shared from './../../components/sharedComponents/shared.module.scss';
import styles from './footer.module.scss';

const Footer = () => {
  return (
    <div className={shared.background}>
      <div className={styles.container}>
        <div className={styles.location}>
          <p>
            London
            <br />
            <a href="" className={styles.email}>
              venture@vision.com
            </a>{' '}
            <br />
            +44 0483 849304 <br />
            123 fake street <br />
            70 estate EA45 CI4
          </p>
        </div>
        <ul className={styles.list}>
          <a href="https://venture-delta.vercel.app/#home">home</a>
          <a href="https://venture-delta.vercel.app/#about">about</a>
          <a href="https://venture-delta.vercel.app/#contact">contact</a>
          <a href="https://venture-delta.vercel.app/#discover">discover</a>
        </ul>
        <div className={styles.location}>
          <p>
            Follow us @ <br />
            VentureVision
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
