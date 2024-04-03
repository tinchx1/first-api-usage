import { useEffect, useState } from 'react';
import './App.css';
import { getAll, getWeather } from './services/countries.tsx';
import { Countries } from './components/Countries.tsx';

const App = () => {
  const [country, setCountry] = useState('');
  const [data, setData] = useState([]);
  useEffect(() => {
    getAll().then((response) => setData(response));
  }, []);
  const handleChange = (event) => setCountry(event.target.value);
  return (
    <div>
      Find countries
      <input
        onChange={(event) => handleChange(event)}
        type="text"
        value={country}
      />
      {country !== '' && <Countries data={data} country={country} />}
    </div>
  );
};

export default App;
