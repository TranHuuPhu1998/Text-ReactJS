
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import defiApi from 'app/api/defiApi';
import {
  IResponseDataDeFi,
} from 'data/types';


// Thunk
export const getListDeFi = createAsyncThunk(
  'defi/get-list-defi',
  async () => {
    const response = await defiApi.getListDeFi();
    return response.data;
  },
);

export const getListProductiveEthereum = createAsyncThunk(
  'defi/get-list-productive-ethereum ',
  async () => {
    const response = await defiApi.getListProductiveEthereum();
    return response.data;
  },
);


interface IParameter {
  entities: IResponseDataDeFi;
  productive_ethereum : any,
  isLoading: boolean;
}
// Reducer
const initialState = {
  entities: {},
  productive_ethereum : {},
} as IParameter;

export const defiSlice = createSlice({
  name: 'defi',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getListDeFi.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListDeFi.fulfilled, (state, { payload }) => {
      state.entities = payload;
      state.isLoading = false;
    });
    builder.addCase(getListDeFi.rejected, (state) => {
      state.isLoading = false;
    });

    builder.addCase(getListProductiveEthereum.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListProductiveEthereum.fulfilled, (state, { payload }) => {
      state.productive_ethereum = payload;
      state.isLoading = false;
    });
    builder.addCase(getListProductiveEthereum.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default defiSlice.reducer;
