import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    menu: {
      list: [],
      option: {},
      show: {
        menu: false,
        subMenu: false
      }
    }
  }

export const uiSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        setShowMenu: (state: any, action: PayloadAction<any>) => {
            state.menu.show.menu = action.payload;
        },
        setShowSubMenu: (state: any, action: PayloadAction<any>) => {
            state.menu.show.subMenu = action.payload;
        }
    }
}) 

export const {setShowMenu, setShowSubMenu} = uiSlice.actions;

export default uiSlice.reducer;