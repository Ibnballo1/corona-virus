import React from 'react';
import { Provider } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import store from './redux/store';
import Header from './components/Header';
import Continent from './components/Continent';
import CountryDetails from './components/CountryDetails';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Continent />} />
          <Route
            path="/:country"
            element={<CountryDetails />}
          />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
