import styles from './burger.module.scss';

interface Props {
  click: () => void;
  active?: boolean;
}

const BurgerMenu = (props: Props) => {
  return (
    <div className={styles.hamburger} onClick={props.click}>
      <div
        className={`${styles.line} ${props.active ? styles.active : ''}`}
      ></div>
      <div
        className={`${styles.line} ${props.active ? styles.active : ''}`}
      ></div>
      <div
        className={`${styles.line} ${props.active ? styles.active : ''}`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
