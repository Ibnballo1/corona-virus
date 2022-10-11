import axios from 'axios';

// Actions Types
const FETCH_DATA = 'corona-virus/redux/FETCH_DATA';
const FILTER_DATA = 'corona-virus/redux/FILTER_DATA';
const baseURL = 'https://covid-api.mmediagroup.fr/v1/cases';

// action creator
export const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getData = () => async (dispatch) => {
  const allData = await axios.get(baseURL);
  const dataArr = Object.entries(allData.data).map((eachData) => {
    const {
      continent,
      country,
      capitalCity,
      confirmed,
      deaths,
      recovered,
      updated,
    } = eachData[1].All;

    return {
      continent,
      country,
      capitalCity,
      confirmed,
      deaths,
      recovered,
      updated,
    };
  });
  dispatch(fetchData(dataArr));
};

export const searchFilter = (search) => ({
  type: FILTER_DATA,
  payload: search,
});

// Reducers
const coronaReducers = (state = [], action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return payload;
    default:
      return state;
  }
};

export const searchReducers = (state = '', action) => {
  const { type, payload } = action;
  switch (type) {
    case FILTER_DATA:
      return payload;
    default:
      return state;
  }
};

export default coronaReducers;
