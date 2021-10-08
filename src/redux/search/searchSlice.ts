import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface searchState {
  searchValue: string;
}

const initialState: searchState = {
  searchValue: '',
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    } 
  }
})

export const { setSearchValue } = searchSlice.actions
export default searchSlice.reducer