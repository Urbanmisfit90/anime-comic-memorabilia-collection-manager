import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CollectionState {
  items: any[]; // Adjust the type of items if you know the structure (e.g., `{ id: string, name: string }[]`)
  error: string | null;
}

const initialState: CollectionState = {
  items: [],
  error: null,
};

const collectionSlice = createSlice({
  name: 'collection',
  initialState,
  reducers: {
    fetchItemsSuccess(state, action: PayloadAction<any[]>) {
      state.items = action.payload;
      state.error = null;
    },
    fetchItemsFailure(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    updateItem(state, action: PayloadAction<{ id: string; data: any }>) {
      const { id, data } = action.payload;
      const index = state.items.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.items[index] = { ...state.items[index], ...data };
      }
    },
    deleteItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { fetchItemsSuccess, fetchItemsFailure, updateItem, deleteItem } = collectionSlice.actions;
export default collectionSlice.reducer;

// Example asynchronous thunk actions
export const fetchItems = () => async (dispatch: any) => {
  try {
    const response = await fetch('/api/items'); // Replace with your API endpoint
    const data = await response.json();
    dispatch(fetchItemsSuccess(data));
  } catch (error: any) {
    dispatch(fetchItemsFailure(error.message));
  }
};
