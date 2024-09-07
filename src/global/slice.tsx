import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  userID: "",
  resultState: false,
  faliedState: false,
  readToggle: false,
};

const slice = createSlice({
  name: "code-rabbit",
  initialState,
  reducers: {
    changeUser: (state, { payload }) => {
      state.user = payload;
    },

    changeUserID: (state, { payload }) => {
      state.userID = payload;
    },

    changeResultState: (state, { payload }) => {
      state.resultState = payload;
    },

    changeFaliedState: (state, { payload }) => {
      state.faliedState = payload;
    },

    changeReadToggle: (state, { payload }) => {
      state.readToggle = payload;
    },
  },
});

export const {
  changeUserID,
  changeUser,
  changeResultState,
  changeFaliedState,
  changeReadToggle,
} = slice.actions;

export default slice.reducer;
