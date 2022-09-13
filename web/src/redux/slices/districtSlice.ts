import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import apiKey from "../../utils/config";
import store from "../store";

const initialState = {
  districtList: [],
  districtListByRegionId: [],
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
    setDistrictListByRegionId: (state: any, action: PayloadAction<any>) => {
      state.districtListByRegionId = action.payload;
    },
  },
});

export const { setDistrict, setDistrictList, setDistrictListByRegionId } =
  districtSlice.actions;

export default districtSlice.reducer;

export const listDistrict = () => (dispatch: any) => {
  const { uiSlice } = store.getState();
  axios
    .get("http://localhost:3001/api/district/getAll", {
      headers: {
        api_key: apiKey,
        token: uiSlice.token,
      },
    })
    .then((response) => {
      dispatch(setDistrictList(response.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getDistrictByRegionId = (id: string) => (dispatch: any) => {
  const { uiSlice } = store.getState();
  axios
    .get(`http://localhost:3001/api/district/getByRegionId/${id}`, {
      headers: {
        api_key: apiKey,
        token: uiSlice.token,
      },
    })
    .then((response) => {
      dispatch(setDistrictListByRegionId(response.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};
