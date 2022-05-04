import * as React from 'react';
import { Link } from 'react-router-dom';
//
import styles from './Item.module.scss';
import { formatArea, formatPrice } from '@service';

export const SearchItem = React.memo(
  ({ id, price, rooms, area_total, layout_image }) => (
    <div className={styles.item}>
      <img
        className={styles.image}
        loading="lazy"
        src={layout_image}
        alt={`Планировка ${rooms}-комнатной квартиры`}
      />
      <p className={styles.text}>
        <span className={styles.text_description}>Цена:</span>
        <span>{formatPrice(price)}</span>
      </p>
      <p className={styles.text}>
        <span className={styles.text_description}>Общая пл.:</span>
        <span>{formatArea(area_total)}</span>
      </p>
      <p className={styles.text}>
        <span className={styles.text_description}>Комнат:</span>
        <span>{rooms}</span>
      </p>
      <Link to={`/apartments/${id}`} className={styles.link}>
        Подробнее
      </Link>
    </div>
  )
);

SearchItem.displayName = 'SearchItem';
