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
        <div className={!enabled ? styles.nav : styles.active}>
          <img src="logoNew.png" alt="logo" className={styles.logo} />
          <img src="logoNew (1).png" alt="logo" className={styles.logomobile} />
          <ul className="list">
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
            <li>
              <a href="discover" className={styles.special}>
                discover
              </a>
            </li>
          </ul>
          <BurgerMenu click={handleClick} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
