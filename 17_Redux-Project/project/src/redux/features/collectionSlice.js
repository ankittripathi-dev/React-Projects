import { createSlice } from "@reduxjs/toolkit";

const collectionSlice = createSlice({
  name: "collection",
  initialState: {
    items: [],
  },
  reducers: {
    addToCollection: (state, action) => {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id && i.type === item.type);
      if (!exists) {
        state.items.push(item);
      }
    },
    removeFromCollection: (state, action) => {
      const { id, type } = action.payload;
      state.items = state.items.filter((i) => !(i.id === id && i.type === type));
    },
  },
});

export const { addToCollection, removeFromCollection } = collectionSlice.actions;

export default collectionSlice.reducer;
