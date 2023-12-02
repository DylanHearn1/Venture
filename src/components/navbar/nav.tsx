import BurgerMenu from '../sharedComponents/burger';
import styles from './nav.module.scss';
import { useState } from 'react';

const Navbar = () => {
  const [enabled, setEnabled] = useState(false);

  const handleClick = () => {
    enabled ? setEnabled(false) : setEnabled(true);
  };

  return (
    <>
      <nav className={styles.container}>
        <div className={enabled ? styles.burger : styles.nav}>
          <img src="green.svg" alt="logo" className={styles.logo} />
          <img src="logoNew (1).png" alt="logo" className={styles.logomobile} />
          <ul className="list">
            <li>
              <a href="#home" onClick={() => setEnabled(false)}>
                home
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => setEnabled(false)}>
                about
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setEnabled(false)}>
                contact
              </a>
            </li>
            <li>
              <a
                href="#discover"
                className={styles.special}
                onClick={() => setEnabled(false)}
              >
                discover
              </a>
            </li>
          </ul>
          <BurgerMenu click={handleClick} active={enabled} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
