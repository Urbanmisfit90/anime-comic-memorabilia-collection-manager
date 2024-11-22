import React, { useState } from 'react';

interface CollectionItem {
  id?: string;
  name: string;
  brand: string;
  series: string;
  character: string;
  type: string;
  condition: string;
  tags: string[];
  image?: File | null;
}

interface CollectionFormProps {
  onSubmit: (item: CollectionItem) => void;
  initialData?: CollectionItem;
}

const CollectionForm: React.FC<CollectionFormProps> = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState<CollectionItem>(
    initialData || {
      name: '',
      brand: '',
      series: '',
      character: '',
      type: '',
      condition: 'New',
      tags: [],
      image: null,
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, image: file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow">
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Brand:</label>
        <input
          type="text"
          name="brand"
          value={formData.brand}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Series:</label>
        <input
          type="text"
          name="series"
          value={formData.series}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Character:</label>
        <input
          type="text"
          name="character"
          value={formData.character}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Type:</label>
        <input
          type="text"
          name="type"
          value={formData.type}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Condition:</label>
        <select name="condition" value={formData.condition} onChange={handleChange}>
          <option value="New">New</option>
          <option value="Mint">Mint</option>
          <option value="Used">Used</option>
        </select>
      </div>
      <div>
        <label>Image:</label>
        <input type="file" onChange={handleImageUpload} />
      </div>
      <button type="submit">Save Item</button>
    </form>
  );
};

export default CollectionForm;
