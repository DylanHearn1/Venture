import Properties from './properties';
import shared from './../../Components/sharedComponents/shared.module.scss';

const Discover = () => {
  return (
    <div className={shared.container}>
      <h1 className={shared.heading}>Let us show you</h1>
      <p className={shared.paragraph}>
        Explore a curated selection of our ongoing and past properties,
        showcasing our innovative virtual tour solutions.
      </p>
      <Properties />
    </div>
  );
};

export default Discover;
