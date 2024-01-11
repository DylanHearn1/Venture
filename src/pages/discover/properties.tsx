import styles from './property.module.scss';
import { useEffect, useState } from 'react';
import shared from '../../Components/sharedComponents/shared.module.scss';
import PropertyCard from './PropertyCard';

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
                <PropertyCard
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  desc={item.desc}
                  tags={item.tags}
                  isLoading={loading}
                />
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
    </div>
  );
};

export default Properties;
