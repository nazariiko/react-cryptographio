import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL_1 = 'https://api.nomics.com/v1/';
const URL_2 = 'https://api.coingecko.com/api/v3/';
const URL_3 = 'https://pro-api.coinmarketcap.com/v1/';
const API_KEY_NOMICS = [
  process.env.REACT_APP_API_KEY_NOMICS_1,
  process.env.REACT_APP_API_KEY_NOMICS_2,
];
const API_KEY_MARKETCAP = process.env.REACT_APP_API_KEY_MARKETCAP;
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

    getGlobalData: builder.query({
      query: () => ({
        url: `${PREFIX}${URL_3}global-metrics/quotes/latest?CMC_PRO_API_KEY=${API_KEY_MARKETCAP}`,
      }),
    }),
  }),
});

export const { useGetCryptocurrenciesQuery, useGetExchangesQuery, useGetGlobalDataQuery } =
  cryptoApi;
