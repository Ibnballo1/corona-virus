/* eslint-disable import/no-named-as-default */
// import fetchData from './actions-reducers';
import coronaReducers from './actions-reducers';

describe('Testing actions and reducers', () => {
  it('should return the initial state', () => {
    // Setup
    // const dataArr = {
    //   continent: 'South American',
    //   country: 'Brazil',
    //   capitalCity: 128765,
    //   confirmed: 4536278,
    //   deaths: 0,
    //   recovered: 453689,
    //   updated: '2022-09-10',
    // };
    // const expectedAction = {
    //   type: 'FETCH_DATA',
    //   payload: dataArr,
    // };

    const expected = [];

    // Executiom
    const result = coronaReducers(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});
