import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import apiKey from "../../utils/config";


const initialState = {
  list: [],
  user: {
    "id": "",
    "rut": "",
    "name": "",
    "paternalLastName": "",
    "maternalLastName": "",
    "email": "",
    "phone": "",
    "urlPhoto": "",
    "grade": ""
  },
  error: '',
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
        resetUser: (state:any) => {
            state.user = initialState.user;
        },
        setError: (state: any, action: PayloadAction<any>) => { 
          state.error = action.payload;
        }
    }
}) 

export const {setUserList, setUser, resetUser, setError} = userSlice.actions;

export default userSlice.reducer;

export const validateUser =
  (email: string, password: string) => (dispatch: any) => {
    axios
      .post(
        'http://localhost:3001/api/user/validate',
        { email, password }, { headers: {api_key: apiKey}}
      )
      .then((response) => {
        const { id,
                rut,
                name,
                paternallastname,
                maternallastname,
                email,
                phone,
                urlphoto,
                grade 
        } = response.data.data;
        dispatch(setUser({id,
                          rut,
                          name,
                          paternalLastName: paternallastname,
                          maternalLastName: maternallastname,
                          email,
                          phone,
                          urlPhoto: urlphoto,
                          grade }));
      })
      .catch((error) =>  dispatch(setError('Usuario o contraseña incorrecta')));
};

export const assignPassword =
  (id: string, password: string) => (dispatch: any) => {
    axios
      .put(
        'http://localhost:3001/api/user/assignPassword',
        { id, password }, { headers: {api_key: apiKey}}
      )
      .then((response) => {
        console.log('Registro de nueva contrasela exitoso');
        
      })
      .catch((error) =>  dispatch(setError('Error en el proceso')));
};