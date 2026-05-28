import { configureStore } from "@reduxjs/toolkit";
import agendaReducer from "./slices/agendaSlice";
import { agendaApi } from "./api/agendaApi";
import { authApi } from "./api/authApi";

export const store = configureStore({
  reducer: {
    agenda: agendaReducer,
    [agendaApi.reducerPath]: agendaApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(agendaApi.middleware)
      .concat(authApi.middleware),
});
