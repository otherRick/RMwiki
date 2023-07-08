import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCharacters } from '../services/getCharacters';

export interface shopSliceProps {
  data: {
    info: {
      pages: number;
      next: string;
      prev: string;
    };
    results: [
      {
        id: number;
        name: string;
        status: 'Dead' | 'Alive' | 'unknown';
        species: string;
        type: string;
        gender: string;
        origin: {
          name: string;
          url: string;
        };
        location: {
          name: string;
          url: string;
        };
        image: string;
        episode: string[];
        url: string;
      }
    ];
  };
}

const initialState: shopSliceProps = {
  data: {
    info: {
      pages: 0,
      next: '',
      prev: ''
    },
    results: [
      {
        id: 0,
        name: '',
        status: 'Dead',
        species: '',
        type: '',
        gender: '',
        origin: {
          name: '',
          url: ''
        },
        location: {
          name: '',
          url: ''
        },
        image: '',
        episode: [''],
        url: ''
      }
    ]
  }
};

export const getCharactersThunk = createAsyncThunk(
  'home-slice/get-characters',
  async (payload: number, { rejectWithValue }) => {
    try {
      const { data } = await getCharacters(payload);

      const results = data.results.map((character: any) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        type: character.type,
        gender: character.gender,
        origin: {
          name: character.origin.name,
          url: character.origin.url
        },
        location: {
          name: character.location.name,
          url: character.location.url
        },
        image: character.image,
        episode: character.episode,
        url: character.url
      }));
      return {
        data: {
          info: {
            pages: data.info.pages,
            next: data.info.next,
            prev: data.info.prev
          },
          results
        }
      };
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const shopSlice = createSlice({
  initialState,
  name: 'shop',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getCharactersThunk.fulfilled, (state, action) => {
      state.data = action.payload.data;
    });
    builder.addCase(getCharactersThunk.pending, (_, action) => {
      console.log(action.payload);
    });
    builder.addCase(getCharactersThunk.rejected, (_, action) => {
      console.log(action.payload);
    });
  }
});
