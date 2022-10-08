/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
import Countries from './Countries';

const Continent = () => {
  const stateData = useSelector((state) => state.corona);
  const newStateData = stateData.slice(0, 50);
  const mostConfirmed = Math.max(...newStateData.map((confirmedCases) => confirmedCases.confirmed));

  let mostAffectedContinent = '';
  for (let i = 0; i < newStateData.length; i += 1) {
    if (mostConfirmed === newStateData[i].confirmed) {
      mostAffectedContinent = newStateData[i].continent;
    }
  }

  const countries = [];
  const affected = [];
  // Getting the countries of the most affected
  for (let i = 0; i < newStateData.length; i += 1) {
    if (newStateData[i].continent === mostAffectedContinent) {
      countries.push(newStateData[i].country);
      affected.push(newStateData[i].confirmed);
    }
  }

  return (
    <div className="covidBody">
      <div className="titleBody">
        <div className="img">
          <img src="map1.png" alt="Continent Map" />
        </div>
        <div className="mostAffectedContinent">
          <h2 className="continent">{mostAffectedContinent.toUpperCase()}</h2>
          <p className="numberOfAffected">
            {(mostConfirmed === -Infinity) ? 'Loading...' : mostConfirmed}
            {' Affected'}
          </p>
        </div>
      </div>
      <section className="countries">
        <h5 className="titleh5">STATS BY COUNTRY</h5>
        <Countries countries={countries} affected={affected} />
      </section>
    </div>
  );
};

export default Continent;
