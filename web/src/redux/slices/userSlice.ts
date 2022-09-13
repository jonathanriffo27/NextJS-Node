import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import store from "../store";
import { setUserUi, setToken } from "./uiSlice";
import apiKey from "../../utils/config";

const initialState = {
  list: [],
  user: {
    id: "",
    rut: "",
    name: "",
    paternalLastName: "",
    maternalLastName: "",
    adress: "",
    region: "",
    region_id: "",
    district: "",
    district_id: "",
    email: "",
    phone: "",
    urlPhoto: "",
    grade: "",
    grade_id: "",
  },
  token: "",
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

export const listUsers = () => (dispatch: any) => {
  const { uiSlice } = store.getState();
  axios
    .get("http://localhost:3001/api/user/list", {
      headers: {
        api_key: apiKey,
        token: uiSlice.token,
      },
    })
    .then((response) => {
      dispatch(setUserList(response.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const validateUser =
  (email: string, password: string) => (dispatch: any) => {
    axios
      .post(
        "http://localhost:3001/api/user/validate",
        { email, password },
        { headers: { api_key: apiKey } }
      )
      .then((response) => {
        const {
          id,
          rut,
          name,
          paternallastname,
          maternallastname,
          adress,
          region,
          district,
          email,
          phone,
          urlphoto,
          grade,
        } = response.data.data.response;
        dispatch(
          setUserUi({
            id,
            rut,
            name,
            paternalLastName: paternallastname,
            maternalLastName: maternallastname,
            adress,
            region,
            district,
            email,
            phone,
            urlPhoto: urlphoto,
            grade,
          })
        );
        dispatch(setToken(response.data.data.token));
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

export const createUser = (userInfo: any) => (dispatch: any) => {
  const {
    rut,
    name,
    paternalLastName,
    maternalLastName,
    adress,
    region_id,
    district_id,
    email,
    phone,
    urlPhoto,
    grade_id,
  } = userInfo;

  axios
    .post(
      "http://localhost:3001/api/user/create",
      {
        rut,
        name,
        paternalLastName,
        maternalLastName,
        adress,
        region_id,
        district_id,
        email,
        phone,
        urlPhoto,
        grade_id,
      },
      { headers: { api_key: apiKey } }
    )
    .then(() => {
      dispatch(listUsers());
    })
    .catch(() => dispatch(setError("Error al crear usuario")));
};

export const updateUser = (userInfo: any) => (dispatch: any) => {
  const {
    id,
    rut,
    name,
    paternalLastName,
    maternalLastName,
    adress,
    region,
    district,
    email,
    phone,
    urlPhoto,
    grade,
  } = userInfo;

  axios
    .put(
      `http://localhost:3001/api/user/update/${id}`,
      {
        rut,
        name,
        paternalLastName,
        maternalLastName,
        adress,
        region,
        district,
        email,
        phone,
        urlPhoto,
        grade,
      },
      { headers: { api_key: apiKey } }
    )
    .then(() => {
      dispatch(listUsers());
    })
    .catch(() => dispatch(setError("Error al crear usuario")));
};

export const deleteUser = (id: any) => (dispatch: any) => {
  axios
    .delete(`http://localhost:3001/api/user/delete/${id}`, {
      headers: { api_key: apiKey },
    })
    .then(() => {
      dispatch(listUsers());
    })
    .catch(() => dispatch(setError("Error al crear usuario")));
};
