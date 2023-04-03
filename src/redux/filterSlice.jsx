import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    setFilteredValue(state, action) {
      return (state = action.payload);
    },
  },
});

export const { setFilteredValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
