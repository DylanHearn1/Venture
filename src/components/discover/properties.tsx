import styles from './property.module.scss';
import { useEffect, useState } from 'react';
import shared from '../sharedComponents/shared.module.scss';
import Button from '../sharedComponents/Button';

interface Property {
  title: string;
  id: number;
  desc: string;
  image: string;
  tags: Array<string>;
}

const Properties = () => {
  const [data, setData] = useState<Property[]>([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const responce = await fetch('http://localhost:3000');
      const properties = await responce.json();
      setData(properties);
      console.log(properties);
    } catch {
      console.log('error on the server');
    }
  }

  // filter results

  const filteredData = filter
    ? data.filter((item) => item.tags.includes(filter))
    : data;

  return (
    <div className={shared.container}>
      <label htmlFor="filter">
        <select
          name="options"
          id="filter"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="">All</option>
          <option value="sold">Sold</option>
          <option value="listed">Listed</option>
          <option value="to let">To let</option>
        </select>
      </label>
      {filteredData.length > 0 ? (
        <>
          <div className={styles.container}>
            {filteredData.map((item) => (
              <div key={item.id} className={styles.card}>
                <img
                  src={item.image}
                  alt="picture of property"
                  className={styles.image}
                />
                <div className={styles.content}>
                  <h1 className={styles.heading}>{item.title}</h1>
                  <p className={styles.desc}>{item.desc}</p>
                  <div className={styles.info}>
                    {item.tags.map((item, ind) => (
                      <p className={styles.tags} key={ind}>
                        {item.toUpperCase()}
                      </p>
                    ))}
                  </div>
                  <Button text="Show me" />
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <>
          {data.length ? (
            <p className={shared.paragraph}>
              No properties found with the <strong>{filter}</strong> tag.
            </p>
          ) : (
            <p className={shared.paragraph}>
              No properties avaliable right now.
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Properties;
