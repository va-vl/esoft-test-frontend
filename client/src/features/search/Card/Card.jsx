import { Link } from 'react-router-dom';
//
import styles from './Card.module.scss';

export const Card = ({ id, price, rooms, area_total, layout_image }) => (
  <div className={styles.card}>
    <img
      className={styles.image}
      loading="lazy"
      src={layout_image}
      alt={`Планировка ${rooms}-комнатной квартиры`}
    />
    <div className={styles.text}>
      <p className={styles.price}>
        {price} {'\u20BD'}
      </p>
      <p>
        {area_total} {'м\u00b2'}
      </p>
      <p>Комнат: {rooms}</p>
    </div>
    <Link to={`/apartments/${id}`} className={styles.link}>
      Подробнее
    </Link>
  </div>
);
