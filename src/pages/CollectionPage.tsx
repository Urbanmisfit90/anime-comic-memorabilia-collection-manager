import React from 'react';
import CollectionList from '../components/CollectionList';

const CollectionPage = () => {
  const items = [
    { id: '1', name: 'Anime DVD' },
    { id: '2', name: 'Comic Book' },
  ];

  const handleUpdate = (id: string, data: { name: string }) => {
    console.log('Update item', id, data);
  };

  const handleDelete = (id: string) => {
    console.log('Delete item', id);
  };

  return (
    <div>
      <h2>My Collections</h2>
      <CollectionList items={items} onUpdate={handleUpdate} onDelete={handleDelete} />
    </div>
  );
};

export default CollectionPage;
