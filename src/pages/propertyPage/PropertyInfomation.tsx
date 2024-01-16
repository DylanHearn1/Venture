import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PropertyCardProps } from '../discover/PropertyCard';
import shared from './../../components/sharedComponents/shared.module.scss';
import styles from './propertyInfomation.module.scss';
import { Link } from 'react-router-dom';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import Footer from '../footer/footer';

interface PropertyInfomationProps {
  homePageLink: string;
}

const PropertyInfomation = ({ homePageLink }: PropertyInfomationProps) => {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyCardProps[]>([]);

  const ApiUrl = import.meta.env.VITE_PROPERTY_DATA;

  useEffect(() => {
    fetch(`${ApiUrl}/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <div>
        <Link to={homePageLink} className={styles.backButton}>
          Back
        </Link>
        {property.length && (
          <>
            <div className={shared.container100}>
              {property.map((property, index) => (
                <div className={styles.bio} key={index}>
                  <div>
                    <p className={shared.heading}>{property.title}</p>
                    <p className={shared.paragraph}>{property.desc}</p>
                  </div>
                  <img
                    src={property.image}
                    alt="image of property"
                    className={styles.image}
                  />
                </div>
              ))}
            </div>
            {property.map((property, index) => (
              <div key={index} className={shared.container}>
                {property.rooms?.map((room, index) => (
                  <div
                    key={index}
                    className={
                      index % 2 === 0
                        ? styles.containerLeft
                        : styles.containerRight
                    }
                  >
                    <div
                      className={
                        index
                          ? styles.textContainerRight
                          : styles.textContainerLeft
                      }
                    >
                      <p className={shared.heading}>{room.room}</p>
                      <p className={shared.paragraph}>{room.desc}</p>
                    </div>
                    <div className={styles.imageContainer}>
                      <ReactPhotoSphereViewer
                        src={room.image}
                        width="100%"
                        height="400px"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
            <Footer />
          </>
        )}
      </div>
    </>
  );
};

export default PropertyInfomation;
