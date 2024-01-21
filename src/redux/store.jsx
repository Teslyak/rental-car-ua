import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { rentalCarsReducer } from "./advertsCatalog/slice";

const persistConfig = {
  key: "rentalCarst",
  storage,
  blacklist: ["adverts", "page", "filters"],
};

export const store = configureStore({
  reducer: {
    rentalCars: persistReducer(persistConfig, rentalCarsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
