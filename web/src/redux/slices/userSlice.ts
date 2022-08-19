import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios"


const initialState = {
  list: [],
  user: {
    "id": "",
    "rut": "",
    "name": "",
    "paternallastname": "",
    "maternallastname": "",
    "email": "",
    "phone": "",
    "urlphoto": "",
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
        { email, password }
      )
      .then((response) => {
        console.log(response.data.data);
        
        dispatch(setUser(response.data.data));
      })
      .catch((error) => console.log(error));
};