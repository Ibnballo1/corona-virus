import axios from 'axios';

// Actions Types
const FETCH_DATA = 'corona-virus/redux/FETCH_DATA';
// const GET_DATA = 'corona-virus/redux/GET_DATA';
const FILTER_DATA = 'corona-virus/redux/FILTER_DATA';
const baseURL = 'https://covid-api.mmediagroup.fr/v1/cases';

// action creator
const fetchData = (payload) => ({
  type: FETCH_DATA,
  payload,
});

export const getData = () => async (dispatch) => {
  const allData = await axios.get(baseURL);
  // console.log(allData);
  const dataArr = Object.entries(allData.data).map((eachData) => {
    // console.log(eachData[1].All);
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
  // console.log(dataArr);
  dispatch(fetchData(dataArr));
};

// Reducers
const coronaReducers = (state = [], action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_DATA:
      return payload;
    case FILTER_DATA:
      return payload;
    default:
      return state;
  }
};

export default coronaReducers;
