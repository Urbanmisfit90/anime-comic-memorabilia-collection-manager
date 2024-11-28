import axios from 'axios';

const api = {
  saveItem: async (item: { name: string; description: string }) => {
    try {
      // This is where you would make an actual API call
      // Example with a mock URL
      const response = await axios.post('/api/items', item);
      return response.data; // Assuming the backend returns the saved item
    } catch (error) {
      console.error('Error saving item:', error);
      throw new Error('Failed to save item');
    }
  },
};

export default api;


