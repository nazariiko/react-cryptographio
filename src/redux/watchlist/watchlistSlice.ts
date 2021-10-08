import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface watchlistState {
  crypto: string | null;
  exchange: string | null;
}

const initialState: watchlistState = {
  crypto: localStorage.getItem('watchlist-crypto'),
  exchange: localStorage.getItem('watchlist-exchange'),
};

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addCryptoWatchListItem(state, action: PayloadAction<string>) {
      let parsed = JSON.parse(state.crypto ? state.crypto : '[]');
      parsed.push(action.payload);
      state.crypto = JSON.stringify(parsed);
      localStorage.setItem('watchlist-crypto', state.crypto);
    },

    removeCryptoWatchListItem(state, action: PayloadAction<string>) {
      let parsed = JSON.parse(state.crypto ? state.crypto : '[]');
      state.crypto = JSON.stringify(parsed.filter((item: string) => item !== action.payload));
      localStorage.setItem('watchlist-crypto', state.crypto);
    },

    addExchangeWatchListItem(state, action: PayloadAction<string>) {
      state.exchange = JSON.stringify(
        JSON.parse(state.exchange ? state.exchange : '[]').push(action.payload),
      );
    },

    removeExchangeWatchListItem(state, action: PayloadAction<string>) {
      state.exchange = JSON.stringify(
        JSON.parse(state.exchange as string).filter((item: string) => item !== action.payload),
      );
    },
  },
});

export const {
  addCryptoWatchListItem,
  removeCryptoWatchListItem,
  addExchangeWatchListItem,
  removeExchangeWatchListItem,
} = watchlistSlice.actions;

export default watchlistSlice.reducer;
