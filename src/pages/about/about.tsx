import shared from './../../components/sharedComponents/shared.module.scss';
import styles from './about.module.scss';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';

const AboutUs = () => {
  return (
    <div className={shared.background}>
      <div className={styles.container}>
        <h1 className={shared.headingwhite}>About us</h1>
        <p className={shared.paragraphwhite}>
          We are your go-to source for cutting-edge 360 imaging solutions.
          Specializing in both 3D renders and real in-person photography, we
          redefine property showcasing for estate agencies.
        </p>
        <p className={shared.paragraphwhite}>
          Our dynamic 360-degree images offer an immersive experience, allowing
          viewers to virtually explore every corner of a property with unmatched
          detail. With a commitment to innovation, we seamlessly blend advanced
          technology to create visually compelling stories for homes,
          apartments, and commercial spaces.
        </p>
        <div className={styles.example}>
          <h1 className={shared.headingwhite}>Give it a try</h1>
          <div className={styles.image}>
            <ReactPhotoSphereViewer
              src="./tryit360.jpg"
              height="50vh"
              width="60vw"
              keyboard="always"
              loadingImg="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
