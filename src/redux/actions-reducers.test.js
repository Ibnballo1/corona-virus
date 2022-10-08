/* eslint-disable import/no-named-as-default */
import coronaReducers from './actions-reducers';

describe('Testing actions and reducers', () => {
  it('should return the initial state', () => {
    const expected = [];

    // Executiom
    const result = coronaReducers(undefined, {});

    // Expectation
    expect(result).toEqual(expected);
  });
});
