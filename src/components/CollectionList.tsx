import React from 'react';

// Define the structure for a collection item
interface CollectionItem {
  id: string;
  name: string;
  // Add more properties specific to your item
}

interface CollectionListProps {
  items: CollectionItem[]; // Array of items to display
  onUpdate: (id: string, data: CollectionItem) => void; // Function to handle update action
  onDelete: (id: string) => void; // Function to handle delete action
}

const CollectionList: React.FC<CollectionListProps> = ({ items, onUpdate, onDelete }) => {
  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <button onClick={() => onUpdate(item.id, item)}>Update</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default CollectionList;

