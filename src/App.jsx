import React, { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  // Required State
  const [showProducts, setShowProducts] = useState(true);
  const [name, setName] = useState("");

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>React Product Dashboard</h1>

      {/* Controlled Input */}
      <div style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Type your name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>Hello, {name || "Stranger"}</p>
      </div>

      {/* Toggle Button */}
      <button onClick={() => setShowProducts(!showProducts)}>
        {showProducts ? "Hide Products" : "Show Products"}
      </button>

      {/* Conditional Rendering */}
      {showProducts && (
        <div style={{ marginTop: '20px' }}>
          <ProductList />
        </div>
      )}
    </div>
  );
}

export default App;