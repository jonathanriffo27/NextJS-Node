import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import apiKey from "../../utils/config";

const initialState = {
  districtList: [],
  district: [],
};

export const districtSlice = createSlice({
  name: "district",
  initialState,
  reducers: {
    setDistrict: (state: any, action: PayloadAction<any>) => {
      state.district = action.payload;
    },
    setDistrictList: (state: any, action: PayloadAction<any>) => {
      state.districtList = action.payload;
    },
  },
});

export const { setDistrict, setDistrictList } = districtSlice.actions;

export default districtSlice.reducer;

export const listDistrict = () => (dispatch: any) => {
  axios
    .get("http://localhost:3003/api/adress/district/getAll", {
      headers: {
        api_key: apiKey,
      },
    })
    .then((response) => {
      console.log(response);

      dispatch(setDistrictList(response.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
