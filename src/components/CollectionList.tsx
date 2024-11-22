import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Update this path to where your RootState is defined

const CollectionList: React.FC = () => {
  // Fetch items from the Redux store
  const items = useSelector((state: RootState) => state.collection.items);

  return (
    <div>
      <h2>Items in Collection</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CollectionList;


