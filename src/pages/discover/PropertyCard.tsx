import Button from '../../components/sharedComponents/Button';
import styles from './property.module.scss';
import { Skeleton } from '@mui/material';

interface PropertyCardProps {
  id: string;
  image: string;
  title: string;
  desc: string;
  tags: Array<string>;
  isLoading: boolean;
}

const PropertyCard = ({
  id,
  image,
  title,
  desc,
  tags,
  isLoading,
}: PropertyCardProps) => {
  return (
    <>
      {isLoading ? (
        <div className={styles.skeleton}>
          <Skeleton variant="rounded" width={350} height={450} />
        </div>
      ) : (
        <>
          <img
            loading="lazy"
            src={image}
            alt="picture of property"
            className={styles.image}
          />
          <div className={styles.content}>
            <h1 className={styles.heading}>{title}</h1>
            <p className={styles.desc}>{desc}</p>
            <div className={styles.info}>
              {tags.map((tag, ind) => (
                <p className={styles.tags} key={ind}>
                  {tag.toUpperCase()}
                </p>
              ))}
            </div>
            <a href={id} className={styles.button}>
              <Button text="Show me" />
            </a>
          </div>
        </>
      )}
    </>
  );
};

export default PropertyCard;
