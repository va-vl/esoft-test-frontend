import * as React from 'react';
import { Link } from 'react-router-dom';
//
import styles from './Item.module.scss';
import { formatArea, formatPrice } from '@service';

export const SearchItem = React.memo(
  ({ id, price, rooms, area_total, layout_image }) => (
    <div className={styles.card}>
      <img
        className={styles.image}
        loading="lazy"
        src={layout_image}
        alt={`Планировка ${rooms}-комнатной квартиры`}
      />
      <div className={styles.text}>
        <p>{formatPrice(price)}</p>
        <p>{formatArea(area_total, 'Общая площадь')}</p>
        <p>Комнат: {rooms}</p>
        <Link to={`/apartments/${id}`} className={styles.link}>
          Подробнее
        </Link>
      </div>
    </div>
  )
);

SearchItem.displayName = 'SearchItem';
