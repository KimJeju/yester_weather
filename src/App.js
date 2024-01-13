import './App.css';
import MainLayout from './Layout/MainLayout';
import CurrentWeather from './Components/Utils/CurrentWeather';
import LoadingBox from './Components/Shared/LoadingBox';
import PastWeather from './Components/Utils/PastWeather';

function App() {

  const curWeather = CurrentWeather();

  const pastWeather = PastWeather();

  if (curWeather === undefined && pastWeather === undefined) {
    return (<div className="App">
      <LoadingBox />
    </div>)
  } else{
    return (
      <div className="App">
        <MainLayout />
      </div>
    )
  }
  

}

export default App;
