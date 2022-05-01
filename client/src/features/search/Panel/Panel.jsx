import * as React from 'react';
import PropTypes from 'prop-types';
//
import { Button, CheckboxButton, CheckboxButtonGroup } from '@components';
import styles from './Panel.module.css';

export const SearchPanel = ({ isLoading = false }) => {
  const [hidden, setHidden] = React.useState(true);

  const handleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <form styles={styles.form}>
      <fieldset>
        <legend>Цена, {'\u20BD'}</legend>
        <div>
          <p>
            <label htmlFor="price_min">От:</label>
            <input type="number" id="price_min" placeholder="0"></input>
          </p>
          <p>
            <label htmlFor="price_max">До:</label>
            <input type="number" id="price_max" placeholder="0"></input>
          </p>
        </div>
      </fieldset>
      <fieldset>
        <legend>Общая площадь, м{'\u00b2'}</legend>
        <div>
          <p>
            <label htmlFor="area_total_min">От:</label>
            <input id="area_total_min" placeholder="0"></input>
          </p>
          <p>
            <label htmlFor="area_total_max">До:</label>
            <input id="area_total_max" placeholder="0"></input>
          </p>
        </div>
      </fieldset>
      <CheckboxButtonGroup legend="Комнат">
        <CheckboxButton id="rooms_1" name="rooms[]" value="1" label="1" />
        <CheckboxButton id="rooms_2" name="rooms[]" value="2" label="2" />
        <CheckboxButton id="rooms_3" name="rooms[]" value="3" label="3" />
      </CheckboxButtonGroup>
      <Button onClick={handleHidden}>
        {hidden ? 'Дополнительно' : 'Скрыть'}
      </Button>
      {!hidden && (
        <>
          <CheckboxButtonGroup legend="Этаж">
            <CheckboxButton id="floor_1" name="floor[]" value="1" label="1" />
            <CheckboxButton id="floor_2" name="floor[]" value="2" label="2" />
            <CheckboxButton id="floor_3" name="floor[]" value="3" label="3" />
            <CheckboxButton id="floor_4" name="floor[]" value="4" label="4" />
          </CheckboxButtonGroup>
          <fieldset>
            <legend>Площадь кухни, м{'\u00b2'}</legend>
            <div>
              <p>
                <label htmlFor="area_kitchen_min">От:</label>
                <input id="area_kitchen_min" placeholder="0"></input>
              </p>
              <p>
                <label htmlFor="area_kitchen_max">До:</label>
                <input id="area_kitchen_max" placeholder="0"></input>
              </p>
            </div>
          </fieldset>
        </>
      )}
      <Button type="submit" isLoading={isLoading}>
        Найти
      </Button>
    </form>
  );
};

SearchPanel.defaultProps = {
  isLoading: false,
};

SearchPanel.propTypes = {
  isLoading: PropTypes.bool,
};
