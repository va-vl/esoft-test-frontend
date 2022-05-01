import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apartments',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (build) => ({
    filterApartments: build.query({
      query: (params) => ({
        url: '/apartments',
        params,
      }),
    }),
    getApartment: build.query({
      query: (id) => `/apartments:${id}`,
    }),
  }),
});

export const { useFilterApartmentsQuery, useGetApartmentQuery } = apiSlice;
