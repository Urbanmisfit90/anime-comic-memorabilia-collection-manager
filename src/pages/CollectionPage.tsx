import React from 'react';
import { useDispatch } from 'react-redux';
import CollectionForm from '../components/CollectionForm';
import { addItem } from '../redux/collectionSlice';
import api from '../api/api';  // <-- Import the API utility

const CollectionPage: React.FC = () => {
  const dispatch = useDispatch();

  // Handle form submission
  const handleAddItem = async (newItem: { name: string; description: string }) => {
    try {
      // Make the API call to save the item
      await api.saveItem(newItem);
  
      // Dispatch the action to add the item to the Redux store
      dispatch(addItem({
        id: Math.random().toString(), // You could also return the id from the API
        name: newItem.name,
        description: newItem.description,
      }));
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
      <h1>Collection Page</h1>
      <CollectionForm onSubmit={handleAddItem} />
    </div>
  );
};

export default CollectionPage;

