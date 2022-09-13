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
  token: "",
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
    setToken: (state: any, action: PayloadAction<any>) => {
      state.token = action.payload;
    },
  },
});

export const { setUserUi, resetUserUi, setToken } = uiSlice.actions;

export default uiSlice.reducer;
