import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL_1 = 'https://api.nomics.com/v1/';
const URL_2 = 'https://api.coingecko.com/api/v3/';
const API_KEY_NOMICS = [
  'c49d04d2873f612dfc1eaeee24dc21e97dee6af3',
  '2fe1575317db39d359f61f3e5f8f910f90bbc24e',
];
const PREFIX = 'https://aqueous-falls-61535.herokuapp.com/';

export const cryptoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: URL_1 }),
  reducerPath: 'cryptocurrenciesApi',
  endpoints: (builder) => ({
    getCryptocurrencies: builder.query({
      query: (perPage) => ({
        url: `${PREFIX}${URL_1}currencies/ticker?key=${
          API_KEY_NOMICS[Math.floor(Math.random() * API_KEY_NOMICS.length)]
        }&page=1&per-page=${perPage}&interval=1d,7d`,
      }),
    }),

    getExchanges: builder.query({
      query: (perPage) => ({
        url: `${PREFIX}${URL_2}exchanges?&page=1&per_page=${perPage}&interval=1d`,
      }),
    }),
  }),
});

export const { useGetCryptocurrenciesQuery, useGetExchangesQuery } = cryptoApi;
