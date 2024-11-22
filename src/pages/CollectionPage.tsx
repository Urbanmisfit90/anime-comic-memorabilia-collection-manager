import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks'; // Ensure this file exists and is correct
import { fetchItems, updateItem, deleteItem } from '../redux/collectionSlice'; // Ensure collectionSlice has these functions
import CollectionList from '../components/CollectionList';

const CollectionPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector((state) => state.collection.items);
  const error = useAppSelector((state) => state.collection.error);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  const handleUpdateItem = (id: string, data: any) => {
    dispatch(updateItem({ id, data }));
  };

  const handleDeleteItem = (id: string) => {
    dispatch(deleteItem(id));
  };

  return (
    <div>
      {error ? <p>Error: {error}</p> : null}
      <CollectionList items={items} onUpdate={handleUpdateItem} onDelete={handleDeleteItem} />
    </div>
  );
};

export default CollectionPage;

