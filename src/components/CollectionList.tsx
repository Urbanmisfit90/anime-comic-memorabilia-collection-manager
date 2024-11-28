import React from 'react';
import { useAppSelector } from '../redux/hooks';  // Use custom typed hook

const CollectionList: React.FC = () => {
  // Fetch items from the Redux store
  const items = useAppSelector((state) => state.collection.items);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <strong>{item.name}</strong>: {item.description}
        </li>
      ))}
    </ul>
  );
};

export default CollectionList;



