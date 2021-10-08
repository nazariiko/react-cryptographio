import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface pageState {
  currentPage: string;
}

const initialState: pageState = {
  currentPage: window.location.href.slice(window.location.href.lastIndexOf('/') + 1),
}

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<string>) => {
      state.currentPage = action.payload
    },
  },
})

export const { setCurrentPage } = pageSlice.actions
export default pageSlice.reducer