import logo from './logo.svg';
import './App.css';
import Weather from './weather-folder/App';

function App() {

 // const url=`https://api.openweathermap.org/data/2.5/weather?lat=122.09&lon=37.39&appid={}`
  const url=`https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=d9f29f5b87cd92c2cb0f2223c4459d89`

  return (
    <div className="App">
       <Weather/>
    </div>
  );
}

export default App;
