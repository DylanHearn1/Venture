import styles from './property.module.scss';
import { useEffect, useState } from 'react';
import shared from '../sharedComponents/shared.module.scss';
import Button from '../sharedComponents/Button';

interface Property {
  title: string;
  id: string;
  desc: string;
  image: string;
  tags: Array<string>;
}

const Properties = () => {
  const [data, setData] = useState<Property[]>([]);
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      setLoading(true);
      const responce = await fetch('https://vserver-63as.onrender.com');
      const properties = await responce.json();
      setData(properties);
      setLoading(false);
    } catch (error) {
      console.log('error on the server', error);
      setLoading(false);
    }
  }

  // filter results

  const filteredData = filter
    ? data.filter((item) => item.tags.includes(filter))
    : data;

  return (
    <div className={shared.container}>
      {loading ? (
        <img src="./loading.gif" alt="loading" className={styles.loading} />
      ) : (
        <div>
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
                      <a href={item.id} className={styles.button}>
                        <Button text="Show me" />
                      </a>
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
      )}
    </div>
  );
};

export default Properties;
