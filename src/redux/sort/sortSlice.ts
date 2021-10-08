import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface sortState {
  sort: string;
}

const initialState: sortState = {
  sort: 'Market cap'
}

export const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    setSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    }
  }
})

export const { setSort } = sortSlice.actions
export default sortSlice.reducer