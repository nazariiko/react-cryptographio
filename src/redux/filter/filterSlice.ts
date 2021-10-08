import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface filterState {
  filterByMarketCap: Array<number>;
  filterByWatchlist: boolean;
}

const initialState: filterState = {
  filterByMarketCap: [0, 1500000000000],
  filterByWatchlist: false,
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setMarketCapFilter: (state, action: PayloadAction<Array<number>>) => {
      state.filterByMarketCap = action.payload;
    },

    setWatchlistFilter: (state, action: PayloadAction<boolean>) => {
      state.filterByWatchlist = action.payload;
    },
  },
});

export const { setMarketCapFilter, setWatchlistFilter } = filterSlice.actions;
export default filterSlice.reducer;
