import { configureStore } from '@reduxjs/toolkit';

import { userReducer } from '@/entities/user';

import { apiBase } from '@/shared/api/apiBase';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiBase.reducerPath]: apiBase.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiBase.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
