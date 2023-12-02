import Properties from './properties';
import shared from '../sharedComponents/shared.module.scss';

const Discover = () => {
  return (
    <div className={shared.container}>
      <h1 className={shared.heading}>Let us show you</h1>
      <Properties />
    </div>
  );
};

export default Discover;
