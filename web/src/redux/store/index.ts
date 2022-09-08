import { configureStore } from "@reduxjs/toolkit";

import userSlice from "../slices/userSlice";
import uiSlice from "../slices/uiSlice";
import regionSlice from "../slices/regionSlice";
import districtSlice from "../slices/districtSlice";

const store = configureStore({
  reducer: { userSlice, uiSlice, regionSlice, districtSlice },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
