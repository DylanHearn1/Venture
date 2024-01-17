import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PropertyCardProps } from '../discover/PropertyCard';
import shared from './../../components/sharedComponents/shared.module.scss';
import styles from './propertyInfomation.module.scss';
import { Link } from 'react-router-dom';
import { ReactPhotoSphereViewer } from 'react-photo-sphere-viewer';
import Footer from '../footer/footer';
import { Skeleton } from '@mui/material';

interface PropertyInfomationProps {
  homePageLink: string;
}

const PropertyInfomation = ({ homePageLink }: PropertyInfomationProps) => {
  const { id } = useParams();
  const [property, setProperty] = useState<PropertyCardProps[]>([]);
  const [loading, setLoading] = useState('loading');

  const ApiUrl = import.meta.env.VITE_PROPERTY_DATA;

  useEffect(() => {
    // =-------------------------------------------------PROPERTY
    fetch(`${ApiUrl}/property/${id}`)
      .then((res) => res.json())
      .then((data) => setProperty(data))
      .then(() => setLoading('success'))
      .catch((error) => {
        console.log(error), setLoading('fail');
      });
  }, [id]);

  return (
    <>
      <div>
        <Link to={`${homePageLink}#discover`} className={styles.backButton}>
          Back
        </Link>

        {loading === 'loading' ? (
          <div className={shared.container100}>
            <div className={styles.skeletonContainer}>
              <div>
                <Skeleton variant="text" width={'400px'} height={'100px'} />
                <Skeleton variant="text" width={'400px'} height={'50px'} />
                <Skeleton variant="text" width={'400px'} height={'50px'} />
                <Skeleton variant="text" width={'400px'} height={'50px'} />
              </div>
              <div className={styles.imageSkeletonContainer}>
                <Skeleton variant="rounded" width={'100%'} height={'100%'} />
              </div>
            </div>
          </div>
        ) : loading === 'success' ? (
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
        ) : (
          <div className={styles.errorContainer}>
            <p className={shared.paragraph}>Coudn't find property data</p>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyInfomation;
