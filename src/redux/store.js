import { configureStore } from '@reduxjs/toolkit';
import coronaReducers, { getData, searchReducers } from './actions-reducers';

const store = configureStore({
  reducer: {
    corona: coronaReducers,
    search: searchReducers,
  },
});

store.dispatch(getData());

export default store;
