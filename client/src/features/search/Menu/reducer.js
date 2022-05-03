import { formatInputString } from './formatInputString';

export const initialState = {
  price_min: '',
  price_max: '',
  area_total_min: '',
  area_total_max: '',
  rooms: [],
  area_live_min: '',
  area_live_max: '',
  area_kitchen_min: '',
  area_kitchen_max: '',
  floor: [],
  sort: 'price-DESC',
  page: '1',
};

export const formReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET/PRICE_MIN': {
      return {
        ...state,
        price_min: formatInputString(payload),
      };
    }
    case 'SET/PRICE_MAX': {
      return {
        ...state,
        price_max: formatInputString(payload),
      };
    }
    case 'SET/AREA_TOTAL_MIN': {
      return {
        ...state,
        area_total_min: formatInputString(payload),
      };
    }
    case 'SET/AREA_TOTAL_MAX': {
      return {
        ...state,
        area_total_max: formatInputString(payload),
      };
    }
    case 'SET/ROOMS': {
      const newRooms = state.rooms.includes(payload)
        ? state.rooms.filter((r) => r !== payload)
        : [...state.rooms, payload];
      return {
        ...state,
        rooms: newRooms,
      };
    }
    case 'SET/AREA_LIVE_MIN': {
      return {
        ...state,
        area_live_min: formatInputString(payload),
      };
    }
    case 'SET/AREA_LIVING_MAX': {
      return {
        ...state,
        area_live_max: formatInputString(payload),
      };
    }
    case 'SET/AREA_KITCHEN_MIN': {
      return {
        ...state,
        area_kitchen_min: formatInputString(payload),
      };
    }
    case 'SET/AREA_KITCHEN_MAX': {
      return {
        ...state,
        area_kitchen_max: formatInputString(payload),
      };
    }
    case 'SET/FLOOR': {
      const newFloor = state.floor.includes(payload)
        ? state.floor.filter((f) => f !== payload)
        : [...state.floor, payload];
      return {
        ...state,
        floor: newFloor,
      };
    }
    case 'SET/SORT': {
      if (payload === state.sort) {
        return state;
      }

      return {
        ...state,
        page: '1',
        sort: payload,
      };
    }
    case 'SET/PAGE': {
      return {
        ...state,
        page: payload,
      };
    }
    default:
      return state;
  }
};

export const setPriceMinAC = (payload) => ({
  type: 'SET/PRICE_MIN',
  payload,
});

export const setPriceMaxAC = (payload) => ({
  type: 'SET/PRICE_MAX',
  payload,
});

export const setAreaTotalMinAC = (payload) => ({
  type: 'SET/AREA_TOTAL_MIN',
  payload,
});

export const setAreaTotalMaxAC = (payload) => ({
  type: 'SET/AREA_TOTAL_MAX',
  payload,
});

export const setRoomsAC = (payload) => ({
  type: 'SET/ROOMS',
  payload,
});

export const setAreaLiveMinAC = (payload) => ({
  type: 'SET/AREA_LIVE_MIN',
  payload,
});

export const setAreaLiveMaxAC = (payload) => ({
  type: 'SET/AREA_LIVE_MAX',
  payload,
});

export const setAreaKitchenMinAC = (payload) => ({
  type: 'SET/AREA_KITCHEN_MIN',
  payload,
});

export const setAreaKitchenMaxAC = (payload) => ({
  type: 'SET/AREA_KITCHEN_MAX',
  payload,
});

export const setFloorAC = (payload) => ({
  type: 'SET/FLOOR',
  payload,
});

export const setSortAC = (payload) => ({
  type: 'SET/SORT',
  payload,
});

export const setPageAC = (payload) => ({
  type: 'SET/PAGE',
  payload,
});
