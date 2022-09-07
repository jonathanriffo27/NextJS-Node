import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../slices/userSlice";
import uiSlice from "../slices/uiSlice";

const store = configureStore({ reducer: { userSlice, uiSlice } });

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
