import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const URL = 'https://api.nomics.com/v1/';
const API_KEY = 'c49d04d2873f612dfc1eaeee24dc21e97dee6af3';
const PREFIX = 'https://aqueous-falls-61535.herokuapp.com/';

export const cryptoApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  reducerPath: 'cryptocurrenciesApi',
  endpoints: (builder) => ({
    getCryptocurrencies: builder.query({
      query: (perPage) => ({
        url: `${PREFIX}${URL}currencies/ticker?key=${API_KEY}&page=1&per-page=${perPage}&interval=1d,7d`,
      }),
    }),
  }),
});

export const { useGetCryptocurrenciesQuery } = cryptoApi;
