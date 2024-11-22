import React, { useState } from 'react';
import './App.css';

interface InventoryItem {
  id: number;
  value: string;
  isEditing: boolean;
}

const App: React.FC = () => {
  const [inventoryItem, setInventoryItem] = useState('');
  const [inventory, setInventory] = useState<InventoryItem[]>([]);
  const [editingValue, setEditingValue] = useState('');

  const handleAddItem = () => {
    if (inventoryItem.trim() !== '') {
      setInventory([...inventory, { id: Date.now(), value: inventoryItem, isEditing: false }]);
      setInventoryItem('');
    }
  };

  const handleDeleteItem = (id: number) => {
    setInventory(inventory.filter(item => item.id !== id));
  };

  const handleEditItem = (id: number) => {
    setInventory(inventory.map(item => 
      item.id === id ? { ...item, isEditing: true } : item
    ));
    setEditingValue(inventory.find(item => item.id === id)?.value || '');
  };

  const handleSaveEdit = (id: number) => {
    setInventory(inventory.map(item => 
      item.id === id ? { ...item, value: editingValue, isEditing: false } : item
    ));
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
        <button onClick={handleAddItem} className="btn">Add Item</button>
      </div>
      {inventory.map((item) => (
        <div key={item.id} className="input-container">
          {item.isEditing ? (
            <>
              <input
                type="text"
                value={editingValue}
                onChange={(e) => setEditingValue(e.target.value)}
              />
              <button onClick={() => handleSaveEdit(item.id)} className="btn save-btn">Save</button>
            </>
          ) : (
            <>
              <input type="text" value={item.value} readOnly />
              <button onClick={() => handleEditItem(item.id)} className="btn edit-btn">Edit</button>
            </>
          )}
          <button onClick={() => handleDeleteItem(item.id)} className="btn delete-btn">Delete</button>
        </div>
      ))}
    </div>
  );
};

export default App;