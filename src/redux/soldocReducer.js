import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = {
  reserve: {
    year: 0,
    month: 0,
    date: 0,
    time: 0,
    message: ""
  }
}

export const changeReserve = createAction("CHANGE_RESERVE");

const soldocReducer = createReducer(initialState,{
  [changeReserve]: (state, action) => {
    state.reserve = action.payload;
  }
})

export const actionCreator = {
  soldocReducer
}

export default soldocReducer;