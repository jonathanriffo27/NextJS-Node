import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import apiKey from "../../utils/config";

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
  axios
    .post(
      "http://localhost:3004/api/grade/create",
      {
        grade,
      },
      { headers: { api_key: apiKey } }
    )
    .then((response) => {
      dispatch(setGrade(response.data.data));
    })
    .catch((error) => console.log(error));
};

export const listGrade = () => (dispatch: any) => {
  axios
    .get("http://localhost:3004/api/grade/getAll", {
      headers: {
        api_key: apiKey,
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
  axios
    .put(
      `http://localhost:3004/api/grade/update/${id}`,
      {
        grade,
      },
      { headers: { api_key: apiKey } }
    )
    .then((response) => {
      dispatch(setGrade(response.data.data));
    })
    .catch((error) => console.log(error));
};

export const deleteGrade = (id: any) => (dispatch: any) => {
  axios
    .delete(`http://localhost:3004/api/grade/delete/${id}`, {
      headers: { api_key: apiKey },
    })
    .then((response) => {
      dispatch(setGrade(response.data.data));
    })
    .catch((error) => console.log(error));
};
