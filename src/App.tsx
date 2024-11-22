import React, { useState } from 'react';

// Button component to trigger inventory addition
const App: React.FC = () => {
  // State to keep track of the collection items
  const [inventory, setInventory] = useState<string[]>([]);

  // Function to handle adding items to the collection
  const handleAddInventory = () => {
    setInventory((prevInventory) => [
      ...prevInventory,
      `Item ${prevInventory.length + 1}`,
    ]);
  };

  return (
    <div>
      <h1>Welcome to My Collection Manager</h1>
      <p>Learn React by managing your collections!</p>
      
      {/* Button to trigger adding an inventory item */}
      <button onClick={handleAddInventory} className="btn">
        Add Inventory Item
      </button>

      {/* Display the added inventory items */}
      <ul>
        {inventory.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
