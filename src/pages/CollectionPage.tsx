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
      // Save item to the backend (this assumes you have implemented api.saveItem)
      const savedItem = await api.saveItem(newItem);

      // Dispatch to Redux store
      dispatch(addItem({
        id: savedItem.id, // Use the ID returned from the API
        name: savedItem.name,
        description: savedItem.description,
      }));
    } catch (error) {
      console.error('Failed to save item:', error);
    }
  };

  return (
    <div>
      <h1>Inventory</h1>
      <CollectionForm onSubmit={handleAddItem} />
    </div>
  );
};

export default CollectionPage;