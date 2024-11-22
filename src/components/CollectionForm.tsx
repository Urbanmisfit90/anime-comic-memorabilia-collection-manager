import React, { useState } from 'react';

interface CollectionFormProps {
  onSubmit: (newItem: { name: string; description: string }) => void;
}

const CollectionForm: React.FC<CollectionFormProps> = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description) {
      onSubmit({ name, description });
      setName('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default CollectionForm;

