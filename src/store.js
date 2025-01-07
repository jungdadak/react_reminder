import { configureStore, createSlice } from '@reduxjs/toolkit';
import dataReducer from './models/DataSlice';
let user = createSlice({
  name: 'user',
  initialState: { name: 'Lee', age: 28 },
  reducers: {
    changeAge(state) {
      state.age += 1;
    },
  },
});

export let { changeAge } = user.actions;

export default configureStore({
  reducer: {
    data: dataReducer,
    user: user.reducer,
  },
});
