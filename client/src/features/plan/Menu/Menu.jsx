import * as React from 'react';
//
import { useLazyGetApartmentByFloorAndPositionQuery } from '@app/apiSlice';
import * as service from '@service';
import { Select, SkeletonShape } from '@components';
import { PlanDrawing } from '../Drawing/Drawing';
import styles from './Menu.module.scss';

export const PlanMenu = () => {
  const [floor, setFloor] = React.useState('1');
  const [trigger, { isUninitialized, isFetching, isError, error, data }] =
    useLazyGetApartmentByFloorAndPositionQuery();

  const hanldeClick = (position) => {
    trigger({ floor, position }, true);
  };

  const handleFloor = ({ target: { value } }) => {
    setFloor(value);
  };

  let content;

  if (isUninitialized) {
    content = (
      <span className={styles.hint}>
        Выберите этаж и нажмите на план чтобы получить данные
      </span>
    );
  } else if (isFetching) {
    content = <SkeletonShape className={styles.skeleton} />;
  } else if (isError || !data) {
    content = (
      <span className={styles.hint}>
        Ошибка! {error.result?.message || 'Что-то пошло не так'}
      </span>
    );
  } else {
    content = (
      <div className={styles.content}>
        <p>Цена: {service.formatPrice(data.price)}</p>
        <p>Общая площадь: {service.formatArea(data.area_total)}</p>
        <p>Комнат: {data.rooms}</p>
        <p>Этаж: {data.floor}</p>
        <p>Жилая площадь: {service.formatArea(data.area_live)}</p>
        <p>Кухня: {service.formatArea(data.area_kitchen)}</p>
      </div>
    );
  }

  return (
    <div className={styles.menu}>
      <div className={styles.drawing}>
        <PlanDrawing onClick={hanldeClick} />
      </div>
      <Select
        id="floor"
        label="Этаж:"
        name="floor"
        value={floor}
        onChange={handleFloor}
        className={styles.select}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </Select>
      {content}
    </div>
  );
};
