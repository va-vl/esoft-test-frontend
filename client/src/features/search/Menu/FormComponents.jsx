import PropTypes from 'prop-types';
//
import { InputGroup, Input, CheckboxButton, Select } from '@components/';

export const PriceInputs = ({
  priceMin,
  priceMax,
  handlePriceMin,
  handlePriceMax,
}) => (
  <InputGroup legend={'Цена, \u20BD'}>
    <Input
      id="priceMin"
      name="priceMin"
      value={priceMin}
      placeholder="От"
      onChange={handlePriceMin}
    />
    <Input
      id="priceMax"
      name="priceMax"
      value={priceMax}
      placeholder="До"
      onChange={handlePriceMax}
    />
  </InputGroup>
);

PriceInputs.propTypes = {
  priceMin: PropTypes.string.isRequired,
  priceMax: PropTypes.string.isRequired,
  handlePriceMin: PropTypes.func.isRequired,
  handlePriceMax: PropTypes.func.isRequired,
};

export const AreaTotalInputs = ({
  areaTotalMin,
  areaTotalMax,
  handleAreaTotalMin,
  handleAreaTotalMax,
}) => (
  <InputGroup legend={'Общая площадь, м\u00b2'}>
    <Input
      id="areaTotalMin"
      name="areaTotalMin"
      value={areaTotalMin}
      placeholder="От"
      onChange={handleAreaTotalMin}
    />
    <Input
      id="areaTotalMax"
      name="areaTotalMax"
      value={areaTotalMax}
      placeholder="До"
      onChange={handleAreaTotalMax}
    />
  </InputGroup>
);

AreaTotalInputs.propTypes = {
  areaTotalMin: PropTypes.string.isRequired,
  areaTotalMax: PropTypes.string.isRequired,
  handleAreaTotalMin: PropTypes.func.isRequired,
  handleAreaTotalMax: PropTypes.func.isRequired,
};

export const RoomInputs = ({ rooms, handleRooms }) => (
  <InputGroup legend="Комнат">
    {['1', '2', '3'].map((item) => (
      <CheckboxButton
        key={`rooms_${item}`}
        id={`rooms_${item}`}
        name="rooms[]"
        label={item}
        value={item}
        checked={rooms.includes(item)}
        onChange={handleRooms}
      />
    ))}
  </InputGroup>
);

RoomInputs.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleRooms: PropTypes.func.isRequired,
};

export const FloorInputs = ({ floor, handleFloor }) => (
  <InputGroup legend="Этаж">
    {['1', '2', '3', '4'].map((item) => (
      <CheckboxButton
        key={`floor_${item}`}
        id={`floor_${item}`}
        name="floor[]"
        label={item}
        value={item}
        checked={floor.includes(item)}
        onChange={handleFloor}
      />
    ))}
  </InputGroup>
);

FloorInputs.propTypes = {
  floor: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleFloor: PropTypes.func.isRequired,
};

export const AreaKitchenInputs = ({
  areaKitchenMin,
  areaKitchenMax,
  handleAreaKitchenMin,
  handleAreaKitchenMax,
}) => (
  <InputGroup legend={'Площадь кухни, м\u00b2'}>
    <Input
      id="areaKitchenMin"
      name="areaKitchenMin"
      value={areaKitchenMin}
      placeholder="От"
      onChange={handleAreaKitchenMin}
    />
    <Input
      id="areaKitchenMax"
      name="areaKitchenMax"
      value={areaKitchenMax}
      placeholder="До"
      onChange={handleAreaKitchenMax}
    />
  </InputGroup>
);

AreaKitchenInputs.propTypes = {
  areaKitchenMin: PropTypes.string.isRequired,
  areaKitchenMax: PropTypes.string.isRequired,
  handleAreaKitchenMin: PropTypes.func.isRequired,
  handleAreaKitchenMax: PropTypes.func.isRequired,
};

export const SortSelect = ({ sort, handleSort }) => (
  <Select
    id="sort"
    name="sort"
    label="Показывать:"
    value={sort}
    onChange={handleSort}
  >
    <option value="price-ASC">Сначала дешевле</option>
    <option value="price-DESC">Сначала дороже</option>
    <option value="area_total-ASC">Сначала небольшие</option>
    <option value="area_total-DESC">Сначала просторные</option>
  </Select>
);

SortSelect.propTypes = {
  sort: PropTypes.string.isRequired,
  handleSort: PropTypes.func.isRequired,
};
