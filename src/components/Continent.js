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
  const newStateData = stateData.slice(0, 50);
  const mostConfirmed = Math.max(...newStateData.map((confirmedCases) => confirmedCases.confirmed));

  let mostAffectedContinent = '';
  for (let i = 0; i < newStateData.length; i += 1) {
    if (mostConfirmed === newStateData[i].confirmed) {
      mostAffectedContinent = newStateData[i].continent;
    }
  }

  let continents = '';
  let confirmed = '';
  for (let i = 0; i < stateData.length; i += 1) {
    if (stateSearchData === stateData[i].continent) {
      continents = stateData[i].continent;
      confirmed = stateData[i].confirmed;
    }
  }

  const countries = [];
  const affected = [];
  for (let i = 0; i < newStateData.length; i += 1) {
    if (newStateData[i].continent === mostAffectedContinent) {
      countries.push(newStateData[i].country);
      affected.push(newStateData[i].confirmed);
    }
  }

  const filteredContinent = stateData.filter(
    (eachContinent) => ((eachContinent.continent) === stateSearchData),
  );

  const filteredCountry = stateData.filter(
    (eachCountry) => ((eachCountry.country) === stateSearchData),
  );

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
      <form onSubmit={onSubmitHandler}>
        <input
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
                ? mostAffectedContinent.toUpperCase()
                : stateSearchData
            }
          </h2>
          <p className="numberOfAffected">
            {
              (stateSearchData === '' || stateSearchData !== continents) ? (
                (mostConfirmed === -Infinity) ? 'Loading...' : mostConfirmed)
                : confirmed
            }
            {' Affected'}
          </p>
        </div>
      </div>
      <section className="countries">
        <h5 className="titleh5">STATS BY COUNTRY</h5>
        <Countries
          filteredContinent={filteredContinent}
          filteredCountry={filteredCountry}
          countries={countries}
          affected={affected}
        />
      </section>
    </div>
  );
};

export default Continent;
