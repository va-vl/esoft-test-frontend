import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apartments',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (build) => ({
    searchApartments: build.query({
      query: ({ queryString }) => `/apartments?${queryString}`,
    }),
    getApartmentById: build.query({
      query: (id) => `/apartments/${id}`,
    }),
    getApartmentByFloorAndPosition: build.query({
      query: ({ floor, position }) =>
        `/apartments/floor/${floor}/pos_on_floor/${position}`,
    }),
  }),
});

export const {
  useGetApartmentByIdQuery,
  endpoints: {
    searchApartments: { useLazyQuery: useLazySearchApartmentsQuery },
    getApartmentByFloorAndPosition: {
      useLazyQuery: useLazyGetApartmentByFloorAndPositionQuery,
    },
  },
} = apiSlice;
