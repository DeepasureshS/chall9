import React, { useEffect } from 'react';
const CityFilter = ({ currentFilter, onFilterChange, addLog, renderCount }) => {
useEffect(() => {
addLog('CityFilter Mounted');
}, [addLog]);
return (
<div style={{ marginBottom: '20px' }}>
<h2>Filter by Condition</h2>
<select
role="combobox"
value={currentFilter}
onChange={(e) => onFilterChange(e.target.value)}
>
<option value="all">All Conditions</option>
<option value="Sunny">Sunny</option>
<option value="Cloudy">Cloudy</option>
<option value="Rainy">Rainy</option>
<option value="Snowy">Snowy</option>
</select>
<p>Render Count: {renderCount}</p>
</div>
);
};
export default CityFilter;


