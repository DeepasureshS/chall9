import React, { useState, useEffect, useCallback } from 'react';
import CityFilter from './components/CityFilter';
import WeatherCard from './components/WeatherCard';
import LifecycleLogs from './components/LifecycleLogs';

function App() {
  const [c, setC] = useState([
    { id: 1, name: 'New York', condition: 'Sunny', temp: 22, active: true },
    { id: 2, name: 'London', condition: 'Cloudy', temp: 15, active: true },
    { id: 3, name: 'Tokyo', condition: 'Rainy', temp: 18, active: true },
    { id: 4, name: 'Paris', condition: 'Snowy', temp: 20, active: true }
  ]);

  const [l, setL] = useState([]);
  const [f, setF] = useState('all');
  const [rc, setRC] = useState(1);

  const AL = useCallback((m) => {
    setL((p) => [...p, `${new Date().toLocaleTimeString()} - ${m}`]);
  }, []);

  const FC = (v) => {
    setF(v);
    AL(`Filter changed to: ${v}`);
  };

  const TC = (id) => {
    setC((p) => p.map((ct) => ct.id === id ? { ...ct, active: !ct.active } : ct));
    AL(`City toggled: ${id}`);
  };

  const CL = () => setL([]);

  useEffect(() => AL('App Mounted'), [AL]);
  useEffect(() => setRC((ct) => ct + 1), [c]);

  const fc = f === 'all' ? c.filter((ct) => ct.active) : c.filter((ct) => ct.active && ct.condition === f);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Weather Dashboard</h1>
      <CityFilter currentFilter={f} onFilterChange={FC} addLog={AL} renderCount={rc} />

      <h2>Cities</h2>
      {
        fc.length > 0 ? (
          fc.map((ct) => (
            <WeatherCard key={ct.id} city={ct} onToggle={TC} addLog={AL} />
          ))
        ) : (
          <p>No cities to display</p>
        )
      }

      <LifecycleLogs logs={l} CL={CL} />
    </div>
  );
}

export default App;

