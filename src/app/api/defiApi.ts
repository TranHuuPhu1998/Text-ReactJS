import { getData } from 'utils/fetch-api';

import {
  IResponse,
  IResponseDataDeFi
} from 'data/types';

const getListDeFi = (): Promise<IResponse<IResponseDataDeFi>> => {
  return getData(`defi`);
};

const getListProductiveEthereum = ()=> {
  return getData(`defi-productive-ethereum`);
};

const getListManageWallets = ()=> {
  return getData(`manage-wallets`);
};

const defiSlice = {
  getListDeFi,
  getListProductiveEthereum,
  getListManageWallets
};

export default defiSlice;