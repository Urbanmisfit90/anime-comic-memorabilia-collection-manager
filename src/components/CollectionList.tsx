import React from 'react';

interface CollectionListProps {
  items: any[]; // Adjust the type of `items` if you know the structure (e.g., `{ id: string, name: string }[]`)
  onUpdate: (id: string, data: any) => void;
  onDelete: (id: string) => void;
}

const CollectionList: React.FC<CollectionListProps> = ({ items, onUpdate, onDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <button onClick={() => onUpdate(item.id, { name: 'Updated Name' })}>Update</button>
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default CollectionList;

