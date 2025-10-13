import React, { useEffect } from 'react';
const WeatherCard = ({ city, onToggle, addLog }) => {
useEffect(() => { 
addLog(`WeatherCard Mounted: ${city.name}`) 
}, [addLog, city]);
return (
<div style={{
border: '1px solid #ddd',
marginBottom: '10px',
padding: '10px',
borderRadius: '8px',
backgroundColor: '#f9f9f9'
}}>
<h3>{city.name}</h3>
<p>{city.temp}°C</p>
<span style={{
background: '#ddd',
padding: '4px 8px',
borderRadius: '6px'
}}>
{city.condition}
</span>
<div style={{ marginTop: '10px' }}>
<button onClick={() => onToggle(city.id)}>
{city.active === true ? 'Remove City' : 'Add City'}
</button>
</div>
<div>
<p>{city.condition}</p>
<p>{city.condition}</p>
</div>
</div>
);
};
export default WeatherCard;
