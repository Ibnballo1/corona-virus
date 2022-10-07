import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Continent from './components/Continent';
// import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Continent />} />
        <Route
          path="/:country"
          element={<CountryDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
