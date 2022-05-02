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
    getApartment: build.query({
      query: (id) => `/apartments:${id}`,
    }),
  }),
});

export const {
  useSearchApartmentsQuery,
  useGetApartmentQuery,
  endpoints: {
    searchApartments: { useLazyQuery: useLazySearchApartmentsQuery },
  },
} = apiSlice;
