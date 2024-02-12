import styles from './property.module.scss';
import { useEffect, useState } from 'react';
import shared from './../../components/sharedComponents/shared.module.scss';
import PropertyCard from './PropertyCard';
import { Skeleton } from '@mui/material';

export interface PropertyInformation {
  title: string;
  id: string;
  description: string;
  image_url: string;
  tags: Array<string>;
  rooms?: Array<Room>;
}

interface Room {
  room: string;
  desc: string;
  image: string;
}

const Properties = () => {
  const [data, setData] = useState<PropertyInformation[]>([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProperties();
  }, [filter]);

  const ApiUrl = import.meta.env.VITE_PROPERTY_DATA;

  async function getProperties() {
    try {
      setLoading((prev) => !prev);
      const responce = await fetch(`${ApiUrl}/${filter}`);
      const properties = await responce.json();
      setData(properties);
      setLoading((prev) => !prev);
    } catch (error) {
      console.log('error backend', error);
      setLoading((prev) => !prev);
    }
  }

  return (
    <div className={shared.container}>
      <div>
        <label htmlFor="filter">
          <select
            name="options"
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All</option>
            <option value="sold">Sold</option>
            <option value="listed">Listed</option>
            <option value="to let">To let</option>
          </select>
        </label>
        {!loading && data.length ? (
          <>
            <div className={styles.container}>
              {data.map((item) => (
                <div className={styles.card} key={item.id}>
                  <PropertyCard
                    id={item.id}
                    title={item.title}
                    image_url={item.image_url}
                    description={item.description}
                    tags={item.tags}
                  />
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {loading ? (
              <div className={styles.propertyCardSkeletonContainer}>
                {Array.from({ length: Math.ceil(Math.random() * 7) }).map(
                  (_, index) => (
                    <div key={index} className={styles.skeletonCard}>
                      <Skeleton
                        variant="rounded"
                        width={'100%'}
                        height={'90%'}
                      />
                      <Skeleton variant="text" width={'100%'} height={'30%'} />
                    </div>
                  )
                )}
              </div>
            ) : (
              <p className={shared.paragraph}>
                {`No properties with the `} <strong>{`${filter}`}</strong>
                {` tag found.`}
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Properties;
