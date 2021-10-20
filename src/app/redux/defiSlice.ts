
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import defiApi from 'app/api/defiApi';

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

export const connectWallets = createAsyncThunk(
  'defi/connect-wallets',
  () => {
    return true;
  },
);

export const getListManageWallets = createAsyncThunk(
  'defi/get-list-manage-wallets',
  async () => {
    const response = await defiApi.getListManageWallets();
    return response;
  },
);


interface IParameter {
  entities: any;
  productive_ethereum : any;
  isLoading: boolean;
  connect:boolean;
  manage_wallets:any
}
// Reducer
const initialState = {
  entities: {},
  productive_ethereum : {},
  connect:false,
  manage_wallets:{}
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

    builder.addCase(connectWallets.fulfilled, (state) => {
      state.connect = !state.connect;
    });

    builder.addCase(getListManageWallets.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getListManageWallets.fulfilled, (state, { payload }) => {
      state.manage_wallets = payload;
      state.isLoading = false;
    });
    builder.addCase(getListManageWallets.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default defiSlice.reducer;
