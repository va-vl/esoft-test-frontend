import { Link } from 'react-router-dom';
//
import { addSpacesToNumber } from '@service';
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
      <p>
        Цена: {addSpacesToNumber(Math.floor(price / 1000))} тыс. {'\u20BD'}
      </p>
      <p>
        Общая площадь: {addSpacesToNumber(area_total)} {'м\u00b2'}
      </p>
      <p>Комнат: {rooms}</p>
      <Link to={`/apartments/${id}`} className={styles.link}>
        Подробнее
      </Link>
    </div>
  </div>
);
