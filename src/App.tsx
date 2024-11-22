import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [inventoryItem, setInventoryItem] = useState('');
  const [inventory, setInventory] = useState<string[]>([]);

  const handleAddItem = () => {
    if (inventoryItem.trim() !== '') {
      setInventory([...inventory, inventoryItem]);
      setInventoryItem('');
    }
  };

  const handleDeleteItem = (index: number) => {
    setInventory(inventory.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Welcome to My Collection Manager</h1>
      <p>Manage your collections efficiently!</p>
      <div className="input-container">
        <input
          type="text"
          value={inventoryItem}
          onChange={(e) => setInventoryItem(e.target.value)}
          placeholder="Enter inventory item"
        />
        <button onClick={handleAddItem} className="btn">
          Add Item
        </button>
      </div>
      <ul>
        {inventory.map((item, index) => (
          <li key={index} className="inventory-item">
            {item}
            <button
              onClick={() => handleDeleteItem(index)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;