import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the initial state of the collection
interface CollectionItem {
  id: string;
  name: string;
  description: string;
}

interface CollectionState {
  items: CollectionItem[];
}

const initialState: CollectionState = {
  items: [],
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    // Action to add an item
    addItem: (state, action: PayloadAction<CollectionItem>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addItem } = collectionSlice.actions;

export default collectionSlice.reducer;

