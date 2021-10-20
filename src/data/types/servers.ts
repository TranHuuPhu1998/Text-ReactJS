export interface IResponse<T> {
  data: T;
}

export interface IResponseDataDeFi {
  total_floor: {
    ethereum: string,
    binance_smart_chain: string,
    polygon: string,
  },
  total_productive: {
    total_productive_assets: string,
    total_liabilities: string,
    interests_and_rewards: string,
    total_profit_and_loss: string,
    daily_interest: string,
  },
  next_word: {
    others: number,
    polygon: number,
    ethereum: number,
    bsc: number,
    total: number,
  },
  chart: {
    name: string,
    polygon: number,
    ethereum: number,
    bsc: 4,
    others: number,
  }[],
}