import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  //persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
//import storage from "redux-persist/lib/storage";
//import { usersReducer } from "./user/slice";
import { rentalCarsReducer } from "./advertsCatalog/slice";

// const userPersistConfig = {
//   storage,
// };

export const store = configureStore({
  reducer: {
    //user: persistReducer(userPersistConfig, usersReducer),
    rentalCars: rentalCarsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
