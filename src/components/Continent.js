/* eslint-disable no-unused-vars */
/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useSelector } from 'react-redux';
// import Countries from './Countries';

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
    <div>
      <div>
        <h2>{mostAffectedContinent}</h2>
        <p>{mostConfirmed}</p>
      </div>
      <section>
        <h5>STATS BY COUNTRY</h5>
        <div>
          {
            countries.map((country, index) => (
              <div key={index}>
                {country}
                <p>{affected[index]}</p>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default Continent;
