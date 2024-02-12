import Button from '../../components/sharedComponents/Button';
import styles from './property.module.scss';
import { PropertyInformation } from './properties';

export interface Room {
  room: string;
  desc: string;
  image: string;
}

// export interface PropertyCardProps {
//   id: string;
//   image_url: string;
//   title: string;
//   description: string;
//   tags: Array<string>;
//   rooms?: Array<Room>;
// }

const PropertyCard = ({
  id,
  image_url,
  title,
  description,
  tags,
}: PropertyInformation) => {
  return (
    <>
      <img
        loading="lazy"
        src={image_url}
        alt="picture of property"
        className={styles.image}
      />
      <div className={styles.content}>
        <h1 className={styles.heading}>{title}</h1>
        <p className={styles.desc}>{description}</p>
        <div className={styles.info}>
          {tags.map((tag, ind) => (
            <p className={styles.tags} key={ind}>
              {tag.toUpperCase()}
            </p>
          ))}
        </div>
        <a href={`/property/${id}`} target="_blank" className={styles.button}>
          <Button text="Show me" />
        </a>
      </div>
    </>
  );
};

export default PropertyCard;
