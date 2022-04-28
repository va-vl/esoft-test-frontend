import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'apartments',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: (build) => ({
    getApartments: build.query({
      query: () => '/apartments',
    }),
  }),
});

export const { useGetApartmentsQuery } = apiSlice;
