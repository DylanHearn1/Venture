import styles from './property.module.scss';
import { useEffect, useState } from 'react';
import shared from '../sharedComponents/shared.module.scss';
import Button from '../sharedComponents/Button';

interface Property {
  title: string;
  id: number;
  desc: string;
  image: string;
}

const Properties = () => {
  const [data, setData] = useState<Property[]>([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const responce = await fetch('http://localhost:3000');
      const properties = await responce.json();
      setData(properties);
    } catch {
      console.log('error on the server');
    }
  }

  return (
    <div className={shared.container}>
      {data.length > 0 && (
        <div className={styles.container}>
          {data.map((item) => (
            <div key={item.id} className={styles.card}>
              <img
                src={item.image}
                alt="picture of property"
                className={styles.image}
              />
              <div className={styles.content}>
                <h1 className={styles.heading}>{item.title}</h1>
                <p className={styles.desc}>{item.desc}</p>
                <Button text="Show me" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
