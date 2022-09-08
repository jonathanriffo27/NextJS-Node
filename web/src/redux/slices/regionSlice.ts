import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

import apiKey from "../../utils/config";

const initialState = {
  listRegions: [],
  region: {},
};

export const regionSlice = createSlice({
  name: "region",
  initialState,
  reducers: {
    setRegion: (state: any, action: PayloadAction<any>) => {
      state.region = action.payload;
    },
    resetRegion: (state: any) => {
      state.region = initialState.listRegions;
    },
    setRegionList: (state: any, action: PayloadAction<any>) => {
      state.listRegions = action.payload;
    },
  },
});

export const { setRegion, resetRegion, setRegionList } = regionSlice.actions;

export default regionSlice.reducer;

export const listRegion = () => (dispatch: any) => {
  axios
    .get("http://localhost:3003/api/adress/region/getAll", {
      headers: {
        api_key: apiKey,
      },
    })
    .then((response) => {
      dispatch(setRegionList(response.data.data));
      // console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};
