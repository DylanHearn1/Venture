import styles from './burger.module.scss';

interface Props {
  click: () => void;
}

const BurgerMenu = (props: Props) => {
  return (
    <div className={styles.hamburger} onClick={props.click}>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
      <div className={styles.line}></div>
    </div>
  );
};

export default BurgerMenu;
