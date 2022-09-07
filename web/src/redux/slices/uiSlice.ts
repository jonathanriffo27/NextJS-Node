import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  user: {
    id: "",
    rut: "",
    name: "",
    paternalLastName: "",
    maternalLastName: "",
    email: "",
    phone: "",
    urlPhoto: "",
    grade: "",
  },
};

export const uiSlice = createSlice({
  name: "userUi",
  initialState,
  reducers: {
    setUserUi: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    resetUserUi: (state: any) => {
      state.user = initialState.user;
    },
  },
});

export const { setUserUi, resetUserUi } = uiSlice.actions;

export default uiSlice.reducer;
