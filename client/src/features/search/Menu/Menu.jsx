import * as React from 'react';
//
import { useLazySearchApartmentsQuery } from '@app/apiSlice';
import { Button, ErrorMessage } from '@components';
import {
  formReducer,
  initialState,
  setAreaKitchenMaxAC,
  setAreaKitchenMinAC,
  setAreaLiveMaxAC,
  setAreaLiveMinAC,
  setAreaTotalMaxAC,
  setAreaTotalMinAC,
  setFloorAC,
  setPageAC,
  setPriceMaxAC,
  setPriceMinAC,
  setRoomsAC,
  setSortAC,
} from './reducer';
import {
  AreaKitchenInputs,
  AreaLiveInputs,
  AreaTotalInputs,
  FloorInputs,
  PriceInputs,
  RoomInputs,
  SortSelect,
} from './FormComponents';
import { toQueryString } from './toQueryString';
import { Paginator } from '../Paginator/Paginator';
import { ResultsList } from '../List/List';
import styles from './Menu.module.scss';

export const SearchMenu = () => {
  const [hidden, setHidden] = React.useState(true);
  const [state, dispatch] = React.useReducer(formReducer, initialState);
  const [trigger, { data, isFetching, isUninitialized, isError, error }] =
    useLazySearchApartmentsQuery({});

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [state.sort, state.page]);

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

  const handleAreaLiveMin = ({ target: { value } }) => {
    dispatch(setAreaLiveMinAC(value));
  };

  const handleAreaLiveMax = ({ target: { value } }) => {
    dispatch(setAreaLiveMaxAC(value));
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
    trigger(
      { queryString: toQueryString({ ...state, page: '1', sort: value }) },
      true
    );
  };

  const handlePage = (value) => {
    dispatch(setPageAC(value));
    trigger({ queryString: toQueryString({ ...state, page: value }) }, true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(setPageAC('1'));
    trigger({ queryString: toQueryString({ ...state, page: '1' }) }, true);
  };

  let content;

  if (isUninitialized) {
    content = 'Введите запрос';
  } else if (isFetching) {
    content = <ResultsList data={undefined} />;
  } else if (isError) {
    content = <ErrorMessage message={error.message} />;
  } else if (data?.result?.length === 0) {
    content = 'По вашему запросу ничего не найдено';
  } else {
    content = (
      <>
        <ResultsList data={data?.result} />
        {data?.pages && (
          <Paginator
            page={state.page}
            pages={data?.pages}
            onChange={handlePage}
          />
        )}
      </>
    );
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_row}>
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
          <div className={styles.form_row}>
            <AreaLiveInputs
              areaLiveMin={state.area_live_min}
              areaLiveMax={state.area_live_max}
              handleAreaLiveMin={handleAreaLiveMin}
              handleAreaLiveMax={handleAreaLiveMax}
            />
            <AreaKitchenInputs
              areaKitchenMin={state.area_kitchen_min}
              areaKitchenMax={state.area_kitchen_max}
              handleAreaKitchenMin={handleAreaKitchenMin}
              handleAreaKitchenMax={handleAreaKitchenMax}
            />
            <FloorInputs floor={state.floor} handleFloor={handleFloor} />
          </div>
        )}
        <div className={styles.form_control}>
          <Button onClick={handleHidden} className={styles.button__extra}>
            {hidden ? `Дополнительно` : 'Скрыть \u2A2F'}
          </Button>
          <Button type="submit" isLoading={isFetching}>
            Найти
          </Button>
        </div>
      </form>
      <div className={styles.sort}>
        <SortSelect sort={state.sort} handleSort={handleSort} />
      </div>
      <div className={styles.content}>{content}</div>
    </>
  );
};
