import React from 'react';
import './App.css';
import MainLayout from '../layout/MainLayout';
import CurrentWeather from '../components/utils/CurrentWeather';
import { useEffect } from 'react';

function App() {

  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
