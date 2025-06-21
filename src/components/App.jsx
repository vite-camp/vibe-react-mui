import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <div style={{ 
        textAlign: 'center', 
        color: 'white',
        background: 'rgba(255,255,255,0.1)',
        padding: '2rem',
        borderRadius: '1rem',
        backdropFilter: 'blur(10px)'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          🚀 Vite + React
        </h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9 }}>
          Fast development with hot module replacement
        </p>
        
        <div style={{ marginBottom: '2rem' }}>
          <button 
            onClick={() => setCount(count - 1)}
            style={{
              background: '#ef4444',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              margin: '0 0.5rem',
              borderRadius: '0.5rem',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}
          >
            -
          </button>
          
          <span style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold',
            background: 'rgba(255,255,255,0.2)',
            padding: '0.5rem 1rem',
            borderRadius: '0.5rem',
            margin: '0 0.5rem'
          }}>
            {count}
          </span>
          
          <button 
            onClick={() => setCount(count + 1)}
            style={{
              background: '#22c55e',
              color: 'white',
              border: 'none',
              padding: '0.75rem 1.5rem',
              margin: '0 0.5rem',
              borderRadius: '0.5rem',
              fontSize: '1.2rem',
              cursor: 'pointer'
            }}
          >
            +
          </button>
        </div>
        
        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>
          Edit <code>src/components/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  );
};

export default App;
