import React, { useState } from 'react';

const CollectionForm: React.FC<{ onSubmit: (item: { name: string; description: string }) => void }> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !description) {
      alert('Both fields are required!');
      return;
    }
    onSubmit({ name, description });
    setName('');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default CollectionForm;


