import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import apiKey from "../../utils/config";

const initialState = {
  list: [],
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
  error: "",
  genericPassword: { state: false, userId: "", success: true },
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setUserList: (state: any, action: PayloadAction<any>) => {
      state.list = action.payload;
    },
    setUser: (state: any, action: PayloadAction<any>) => {
      state.user = action.payload;
    },
    resetUser: (state: any) => {
      state.user = initialState.user;
    },
    setError: (state: any, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setGenericPassword: (state: any, action: PayloadAction<any>) => {
      state.genericPassword = action.payload;
    },
  },
});

export const { setUserList, setUser, resetUser, setError, setGenericPassword } =
  userSlice.actions;

export default userSlice.reducer;

export const validateUser =
  (email: string, password: string) => (dispatch: any) => {
    axios
      .post(
        "http://localhost:3001/api/user/validate",
        { email, password },
        { headers: { api_key: apiKey } }
      )
      .then((response) => {
        console.log(response);
        const {
          id,
          rut,
          name,
          paternallastname,
          maternallastname,
          email,
          phone,
          urlphoto,
          grade,
        } = response.data.data.response;
        dispatch(
          setUser({
            id,
            rut,
            name,
            paternalLastName: paternallastname,
            maternalLastName: maternallastname,
            email,
            phone,
            urlPhoto: urlphoto,
            grade,
          })
        );
      })
      .catch(() => dispatch(setError("Usuario o contraseña incorrecta")));
  };

export const assignPassword =
  (id: string, password: string) => (dispatch: any) => {
    axios
      .put(
        "http://localhost:3001/api/user/assignPassword",
        { id, password },
        { headers: { api_key: apiKey } }
      )
      .then(() => {
        dispatch(setError(""));
        console.log("Registro de contrasela exitoso");
      })
      .catch(() => dispatch(setError("Error")));
  };

export const assignGenericPassword = (email: any) => (dispatch: any) => {
  axios
    .put(
      "http://localhost:3001/api/user/assignGenericPassword",
      { email },
      { headers: { api_key: apiKey } }
    )
    .then(({ data }) =>
      dispatch(setGenericPassword({ state: true, userId: data.data }))
    )
    .catch(() => dispatch(setError("Email no valido")));
};

export const assignNewPassword =
  (id: string, password: string, generatedPassword: string) =>
  (dispatch: any) => {
    axios
      .put(
        "http://localhost:3001/api/user/assignNewPassword",
        { id, password, generatedPassword },
        { headers: { api_key: apiKey } }
      )
      .then(() => {
        dispatch(setGenericPassword({ state: false, id: "", success: true }));
        dispatch(setError(""));
        console.log("Registro de nueva contrasela exitoso");
      })
      .catch(() => dispatch(setError("Contraseña generica invalida")));
  };
