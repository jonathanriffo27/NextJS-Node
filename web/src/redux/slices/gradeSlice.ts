import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import apiKey from "../../utils/config";
import store from "../store";

const initialState = {
  listGrades: [],
  grade: "",
};

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setGrade: (state: any, action: PayloadAction<any>) => {
      state.grade = action.payload;
    },
    resetGrade: (state: any) => {
      state.grade = initialState.grade;
    },
    setGradeList: (state: any, action: PayloadAction<any>) => {
      state.listGrades = action.payload;
    },
  },
});

export const { setGrade, setGradeList, resetGrade } = regionSlice.actions;

export default regionSlice.reducer;

export const createGrade = (grade: any) => (dispatch: any) => {
  const { uiSlice } = store.getState();
  axios
    .post(
      "http://localhost:3001/api/grade/create",
      {
        grade,
      },
      {
        headers: {
          api_key: apiKey,
          token: uiSlice.token,
        },
      }
    )
    .then((response) => {
      dispatch(setGrade(response.data.data));
    })
    .catch((error) => console.log(error));
};

export const listGrade = () => (dispatch: any) => {
  const { uiSlice } = store.getState();
  axios
    .get("http://localhost:3001/api/grade/getAll", {
      headers: {
        api_key: apiKey,
        token: uiSlice.token,
      },
    })
    .then((response) => {
      dispatch(setGradeList(response.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const updateGrade = (id: any, grade: any) => (dispatch: any) => {
  const { uiSlice } = store.getState();
  axios
    .put(
      `http://localhost:3001/api/grade/update/${id}`,
      {
        grade,
      },
      {
        headers: {
          api_key: apiKey,
          token: uiSlice.token,
        },
      }
    )
    .then((response) => {
      dispatch(setGrade(response.data.data));
    })
    .catch((error) => console.log(error));
};

export const deleteGrade = (id: any) => (dispatch: any) => {
  const { uiSlice } = store.getState();
  axios
    .delete(`http://localhost:3001/api/grade/delete/${id}`, {
      headers: {
        api_key: apiKey,
        token: uiSlice.token,
      },
    })
    .then((response) => {
      dispatch(setGrade(response.data.data));
    })
    .catch((error) => console.log(error));
};
