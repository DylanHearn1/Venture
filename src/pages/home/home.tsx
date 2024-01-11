import shared from './../../components/sharedComponents/shared.module.scss';

const HomePage = () => {
  return (
    <div className={shared.container100}>
      <div className={shared.text}>
        <h1 className={shared.title}>Venture Vision</h1>
        <p className={shared.paragraph}>
          Explore our innovative platform revolutionizing property sales with
          immersive virtual tours for estate agencies
        </p>
      </div>
    </div>
  );
};

export default HomePage;
