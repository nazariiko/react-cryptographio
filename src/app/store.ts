import { configureStore } from '@reduxjs/toolkit';

import { cryptoApi } from '../redux/api/crypto';
import pageSlice from '../redux/page/pageSlice';
import sortSlice from '../redux/sort/sortSlice';
import searchSlice from '../redux/search/searchSlice';
import filterSlice from '../redux/filter/filterSlice';
import watchlistSlice from '../redux/watchlist/watchlistSlice';

export const store = configureStore({
  reducer: {
    page: pageSlice,
    sort: sortSlice,
    search: searchSlice,
    filter: filterSlice,
    watchlist: watchlistSlice,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cryptoApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
