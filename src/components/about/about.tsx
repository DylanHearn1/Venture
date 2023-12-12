import shared from '../sharedComponents/shared.module.scss';
import styles from './about.module.scss';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const AboutUs = () => {
  return (
    <div className={shared.background}>
      <div className={styles.container}>
        <h1 className={shared.headingwhite}>About us</h1>
        <p className={shared.paragraphwhite}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab at libero
          animi optio quia saepe amet dolorem in est eum assumenda minima,
          aspernatur quisquam eveniet ipsum ratione deserunt esse error.
        </p>
        <div className={styles.example}>
          <h1 className={shared.headingwhite}>Give it a try</h1>
          <div className={styles.image}>
            <ReactPhotoSphereViewer
              src="./tryit360.jpg"
              height="50vh"
              width="60vw"
              keyboard="always"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
