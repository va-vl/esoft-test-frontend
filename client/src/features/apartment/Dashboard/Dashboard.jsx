import * as React from 'react';
import { useParams } from 'react-router-dom';
//
import * as service from '@service';
import { useGetApartmentByIdQuery } from '@app/apiSlice';
import { ErrorMessage, SkeletonShape } from '@components';
import styles from './Dashboard.module.scss';

const DashboardContent = ({
  floor,
  price,
  rooms,
  area_total,
  area_kitchen,
  area_live,
  layout_image,
}) => (
  <>
    <img alt={'План квартиры'} className={styles.image} src={layout_image} />
    <div className={styles.text}>
      <h3>Основные критерии</h3>
      <p>Цена: {service.formatPrice(price)}</p>
      <p>Общая площадь: {service.formatArea(area_total)}</p>
      <p>Комнат: {rooms}</p>
    </div>
    <div className={styles.text}>
      <h3>Второстепенные критерии</h3>
      <p>Этаж: {floor}</p>
      <p>Жилая площадь: {service.formatArea(area_live)}</p>
      <p>Кухня: {service.formatArea(area_kitchen)}</p>
    </div>
  </>
);

export const ApartmentDashboard = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetApartmentByIdQuery(id);

  if (isLoading) {
    return (
      <div className={styles.dashboard}>
        <SkeletonShape className={styles.skeleton} />
        <SkeletonShape className={styles.skeleton} />
        <SkeletonShape className={styles.skeleton} />
      </div>
    );
  } else if (isError) {
    return <ErrorMessage message={error.data.message} />;
  } else if (data === null) {
    return (
      <h3 className={styles.blunder}>Запрашиваемой квартиры не существует</h3>
    );
  }

  return (
    <div className={styles.dashboard}>
      <DashboardContent {...data} />
    </div>
  );
};
