/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchFilter } from '../redux/actions-reducers';
import Countries from './Countries';

const date = new Date();
const hour = date.getHours();
const message = 'Come Back in the Morning by 7:00 AM';
const time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

const Continent = () => {
  const dispatch = useDispatch();
  const [searchContinent, setSearchContinent] = useState('');
  const stateData = useSelector((state) => state.corona);
  const stateSearchData = useSelector((state) => state.search);
  if (hour === 1 && hour <= 6) {
    return (
      <div>
        <h1>{message}</h1>
        <h3>
          The time is:
          {` ${time}`}
        </h3>
      </div>
    );
  }

  // Getting the total cases for the whole countries
  let totalCases = 0;
  stateData.map((confirmedCases) => {
    totalCases += confirmedCases.confirmed;
    return (totalCases);
  });

  const filteredContinent = stateData.filter(
    (eachContinent) => ((eachContinent.continent) === stateSearchData),
  );

  let continents = '';
  let confirmed = 0;
  for (let i = 0; i < filteredContinent.length; i += 1) {
    if (stateSearchData === filteredContinent[i].continent) {
      continents = filteredContinent[i].continent;
    }
    confirmed += filteredContinent[i].confirmed;
  }

  const text = 'Total Confirmed Corona-Virus Cases in The World';
  const onChangeHandler = (e) => (
    setSearchContinent(e.target.value)
  );

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const newSearch = searchContinent.charAt(0).toUpperCase()
    + searchContinent.slice(1);
    dispatch(searchFilter(newSearch));
    setSearchContinent('');
  };

  return (
    <div className="covidBody">
      <form
        onSubmit={onSubmitHandler}
        className="form"
      >
        <input
          className="input"
          type="search"
          name="search"
          placeholder="Search By Continent"
          onChange={onChangeHandler}
          value={searchContinent || ''}
        />
      </form>
      <div className="titleBody">
        <div className="img">
          <img src="map1.png" alt="Continent Map" />
        </div>
        <div className="mostAffectedContinent">
          <h2 className="continent">
            {
              (stateSearchData === '' || stateSearchData !== continents)
                ? text.toUpperCase()
                : stateSearchData
            }
          </h2>
          <p className="numberOfAffected">
            {
              (stateSearchData === '' || stateSearchData !== continents) ? totalCases
                : confirmed
            }
            {' Affected'}
          </p>
        </div>
      </div>
      <section className="countries">
        <h5 className="titleh5">STATS BY COUNTRY</h5>
        <Countries
          continents={continents}
          text={text}
          stateSearchData={stateSearchData}
          filteredContinent={filteredContinent}
        />
      </section>
    </div>
  );
};

export default Continent;
