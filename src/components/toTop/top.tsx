import shared from '../sharedComponents/shared.module.scss';

const ToTop = () => {
  return (
    <div className={shared.container}>
      <div className={shared.top}>
        <a href="#home">Back to top &uArr;</a>
      </div>
    </div>
  );
};

export default ToTop;
