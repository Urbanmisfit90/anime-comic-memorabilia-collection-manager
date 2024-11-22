import axios from 'axios';

const api = {
  saveItem: async (item: { name: string; description: string }) => {
    const response = await axios.post('/api/items', item); // Make sure the endpoint is correct
    return response.data; // Return the saved item data
  },
};

export default api;
