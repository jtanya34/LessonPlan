import { FETCH_DATA, SET_OBJ_ACT } from "./constants";
import axios from "axios";

export const getAllData = () => {
  return async (dispatch) => {
    const response = await axios.get("https://api.myjson.com/bins/qubzl");
    const data = await response;
    dispatch({
      type: FETCH_DATA,
      data: data,
    });
  };
};

export const setLessonObjectActivity = (data) => {
  return {
    type: SET_OBJ_ACT,
    data: data,
  };
};
