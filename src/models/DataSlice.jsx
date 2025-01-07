import { createSlice } from '@reduxjs/toolkit';

let data = createSlice({
  name: 'data',
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    IncreaseCount(state, action) {
      let Index = state.findIndex((target) => target.id === action.payload.id);
      if (Index !== -1) {
        state[Index].count += action.payload.num;
      }
    },
    DecreaseCount(state, action) {
      let Index = state.findIndex((target) => target.id === action.payload.id);
      if (Index !== -1 && state[Index].count > 0) {
        state[Index].count -= action.payload.num;
      }
    },
    addDataa(state, action) {
      let Index = state.findIndex((target) => target.id === action.payload.id);
      if (Index !== -1) {
        state[Index] = action.payload;
      } else state.push(action.payload);
    },
  },
});

export let { addDataa, IncreaseCount, DecreaseCount } = data.actions;
export default data.reducer;
