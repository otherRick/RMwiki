import { createSlice } from '@reduxjs/toolkit';

interface loginInitialState {
  name: string;
  password: string;
  registered: boolean;
}

const initialState: loginInitialState = {
  name: '',
  password: '',
  registered: false
};

export const loginSlice = createSlice({
  initialState,
  name: 'loginSlice',
  reducers: {
    setLogin: (state, action) => {
      state.name = action.payload.name;
      state.password = action.payload.password;
      state.registered = action.payload.registered;
    }
  }
});
