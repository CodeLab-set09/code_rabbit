import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {} || null,
  userID: "",
  resultState: false,
  faliedState: false,
  successState: false,
  readToggle: false,

  timing: 0,
  yValue1: 0,
  xValue1: 0,
  rotateValue1: 0,
  rotateValue2: 0,
  play: false,

  playYi: [],
  playRotate: [],

  statePlay: [] || 0 || null,
  testState: [],
};

const slice = createSlice({
  name: "code-rabbit",
  initialState,
  reducers: {
    changeTiming: (state, { payload }) => {
      state.timing = payload;
    },
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

    changeYValue1: (state, { payload }) => {
      state.yValue1 = payload;
    },

    changeXValue1: (state, { payload }) => {
      state.xValue1 = payload;
    },

    changeRotateValue1: (state, { payload }) => {
      state.rotateValue1 = payload;
    },

    changeRotateValue2: (state, { payload }) => {
      state.rotateValue2 = payload;
    },

    changePlay: (state, { payload }) => {
      state.play = payload;
    },

    changePlayY: (state, { payload }) => {
      state.playYi = payload;
    },

    changePlayRotate: (state, { payload }) => {
      state.playRotate = payload;
    },

    changeStatePlay: (state, { payload }) => {
      state.statePlay = payload;
    },

    changeStatePlayNull: (state: { statePlay: {} | null | number }) => {
      state.statePlay = [0];
    },

    changeSuccessState: (state, { payload }) => {
      state.successState = payload;
    },

    changeTestState: (state, { payload }) => {
      state.testState = payload;
    },
  },
});

export const {
  changeUserID,
  changeStatePlayNull,
  changeTestState,
  changeUser,
  changeResultState,
  changeFaliedState,
  changeReadToggle,
  changePlay,
  changePlayY,
  changePlayRotate,
  changeSuccessState,
  changeStatePlay,
  changeTiming,

  changeYValue1,
  changeXValue1,
  changeRotateValue1,
  changeRotateValue2,
} = slice.actions;

export default slice.reducer;
