import './App.css';
import { Counter } from './Components/Utils/Counter';
import MainLayout from './Layout/MainLayout';

function App() {
  return (
    <div className="App">
      <MainLayout />
      <Counter />
    </div>
  );
}

export default App;
