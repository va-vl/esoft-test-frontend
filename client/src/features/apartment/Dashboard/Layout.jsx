import PropTypes from 'prop-types';
//
import * as service from '@service';
import styles from './Layout.module.scss';

export const DashboardLayout = ({
  floor,
  price,
  rooms,
  area_total,
  area_kitchen,
  area_live,
  layout_image,
}) => (
  <div className={styles.dashboard}>
    <img alt={'План квартиры'} className={styles.image} src={layout_image} />
    <div className={styles.text}>
      <h3>Основные критерии</h3>
      <p>{service.formatPrice(price)}</p>
      <p>{service.formatArea(area_total, 'Общая площадь')}</p>
      <p>{`Комнат: ${rooms}`}</p>
    </div>
    <div className={styles.text}>
      <h3>Второстепенные критерии</h3>
      <p>{`Этаж: ${floor}`}</p>
      <p>{service.formatArea(area_live, 'Жилая площадь')}</p>
      <p>{service.formatArea(area_kitchen, 'Площадь кухни')}</p>
    </div>
  </div>
);
