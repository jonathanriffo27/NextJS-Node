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
    setUser: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    resetUser: (state: any) => {
      state.user = initialState.user;
    },
  },
});

export const { setUser, resetUser } = uiSlice.actions;

export default uiSlice.reducer;
