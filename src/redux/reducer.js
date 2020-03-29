const initialState = {
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      let newState = { ...state };
      newState.lessonDetails = action.data.data.lessonDetails;
      newState.instrumentTitle = action.data.data.instrumentTitle;
      newState.recitalTitle = action.data.data.recitalTitle;
      return newState;
    case "SET_OBJ_ACT":
    default:
      return state;
  }
};
export default rootReducer;
