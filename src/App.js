import { useSelector } from 'react-redux';
import './App.css';
import { Counter } from './Components/Utils/Counter';
import MainLayout from './Layout/MainLayout';
import CurrentWeatherBox from './Components/Utils/CurrentWeather';

function App() {

  CurrentWeatherBox();

  return (
    <div className="App">
      <MainLayout />
    </div>
  );
}

export default App;
