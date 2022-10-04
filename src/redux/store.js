import { configureStore } from '@reduxjs/toolkit';
import coronaReducers, { getData } from './actions-reducers';

const store = configureStore({
  reducer: {
    corona: coronaReducers,
  },
});

store.dispatch(getData());

export default store;
