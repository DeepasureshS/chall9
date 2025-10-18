import React from 'react';

const LifecycleLogs = ({ logs, CL }) => {
  return (
    <div style={{ marginTop: '30px' }}>
      <h2>Lifecycle Logs</h2>
      <button onClick={CL}>Clear Log</button>
      <div
        style={{
          border: '1px solid #ccc',
          marginTop: '10px',
          padding: '10px',
          minHeight: '100px'
        }}
      >
        {logs.length === 0 ? (
          <p>No logs yet</p>
        ) : (
          logs.map((l, ind) => <p key={ind}>{l}</p>)
        )}
      </div>
    </div>
  );
};

export default LifecycleLogs;

