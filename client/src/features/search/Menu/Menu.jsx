import * as React from 'react';
//
import { useLazySearchApartmentsQuery } from '@app/apiSlice';
import { Button } from '@components';
import {
  formReducer,
  initialState,
  setAreaKitchenMaxAC,
  setAreaKitchenMinAC,
  setAreaTotalMaxAC,
  setAreaTotalMinAC,
  setFloorAC,
  setPageAC,
  setPriceMaxAC,
  setPriceMinAC,
  setRoomsAC,
  setSortAC,
} from './reducer';
import { Card } from '../Card/Card';
import {
  AreaKitchenInputs,
  AreaTotalInputs,
  FloorInputs,
  PriceInputs,
  RoomInputs,
  SortSelect,
} from './FormComponents';
import { toQueryString } from './toQueryString';
import styles from './Menu.module.scss';

export const SearchMenu = () => {
  const [hidden, setHidden] = React.useState(true);
  const [state, dispatch] = React.useReducer(formReducer, initialState);
  const [trigger, { data, isFetching, isUninitialized, isError, error }] =
    useLazySearchApartmentsQuery({});

  const handleHidden = () => {
    setHidden(!hidden);
  };

  const handlePriceMin = ({ target: { value } }) => {
    dispatch(setPriceMinAC(value));
  };

  const handlePriceMax = ({ target: { value } }) => {
    dispatch(setPriceMaxAC(value));
  };

  const handleAreaTotalMin = ({ target: { value } }) => {
    dispatch(setAreaTotalMinAC(value));
  };

  const handleAreaTotalMax = ({ target: { value } }) => {
    dispatch(setAreaTotalMaxAC(value));
  };

  const handleRooms = ({ target: { value } }) => {
    dispatch(setRoomsAC(value));
  };

  const handleAreaKitchenMin = ({ target: { value } }) => {
    dispatch(setAreaKitchenMinAC(value));
  };

  const handleAreaKitchenMax = ({ target: { value } }) => {
    dispatch(setAreaKitchenMaxAC(value));
  };

  const handleFloor = ({ target: { value } }) => {
    dispatch(setFloorAC(value));
  };

  const handleSort = ({ target: { value } }) => {
    dispatch(setSortAC(value));
  };

  const handlePage = ({ target: { value } }) => {
    dispatch(setPageAC(value));
    trigger({ queryString: toQueryString(state) }, true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    trigger({ queryString: toQueryString(state) }, true);
  };

  let content;

  if (isUninitialized) {
    content = <div>Введите запрос</div>;
  } else if (isFetching) {
    content = <div>Загрузочный экран</div>;
  } else if (isError) {
    content = <div>{JSON.stringify(error)}</div>;
  } else {
    content = (
      <>
        <div className={styles.container}>
          {data.data.length
            ? data.data.map((props) => (
                <div key={props.id} className={styles.container_item}>
                  <Card {...props} />
                </div>
              ))
            : 'По запросу ничего не найдено'}
        </div>
        {`Страница: ${state.page} Страниц: ${data.pages}`}
      </>
    );
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.main}>
          <PriceInputs
            priceMin={state.price_min}
            priceMax={state.price_max}
            handlePriceMin={handlePriceMin}
            handlePriceMax={handlePriceMax}
          />
          <AreaTotalInputs
            areaTotalMin={state.area_total_min}
            areaTotalMax={state.area_total_max}
            handleAreaTotalMin={handleAreaTotalMin}
            handleAreaTotalMax={handleAreaTotalMax}
          />
          <RoomInputs rooms={state.rooms} handleRooms={handleRooms} />
        </div>
        {!hidden && (
          <div className={styles.extra}>
            <FloorInputs floor={state.floor} handleFloor={handleFloor} />
            <AreaKitchenInputs
              areaKitchenMin={state.area_kitchen_min}
              areaKitchenMax={state.area_kitchen_max}
              handleAreaKitchenMin={handleAreaKitchenMin}
              handleAreaKitchenMax={handleAreaKitchenMax}
            />
          </div>
        )}
        <div className={styles.controls}>
          <SortSelect sort={state.sort} handleSort={handleSort} />
          <Button onClick={handleHidden} className={styles.button__extra}>
            {hidden ? `Дополнительно` : 'Скрыть \u2A2F'}
          </Button>
          <Button type="submit" isLoading={isFetching}>
            Найти
          </Button>
        </div>
      </form>
      {content}
    </>
  );
};
