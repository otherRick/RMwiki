import { createSlice } from '@reduxjs/toolkit';

interface cartSliceState {
  name: string;
  id: number;
  image: string;
}

interface cartSliceProps {
  data: cartSliceState[];
}

const initialState: cartSliceProps = {
  data: []
};

export const cartSlice = createSlice({
  initialState,
  name: 'cartSlice',
  reducers: {
    addItemCart: (state, action) => {
      console.log('action.payload.data', action.payload);

      state.data = [...state.data, action.payload];
    },
    removeItemCart: (state, action) => {
      const index = state.data.findIndex((item) => item.id === action.payload);

      if (index > -1) {
        // only splice array when item is found
        state.data.splice(index, 1); // 2nd parameter means remove one item only
      }

      // array = [2, 9]
      console.log(state.data);
    },

    removeAllItemCart: (state, action) => {
      state.data = action.payload;
    }
  }
});
