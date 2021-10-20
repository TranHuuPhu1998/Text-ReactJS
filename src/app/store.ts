import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import defiSlide from 'app/redux/defiSlice';

export const store = configureStore({
  reducer: {
    defiSlide
  }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
