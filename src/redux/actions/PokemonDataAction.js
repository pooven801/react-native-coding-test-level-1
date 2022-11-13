import * as ActionTypes from "./ActionTypes";

const onExecuted = (type, data) => {
  return {
    type,
    data,
  };
};

export const getDataSync = (params) => async (dispatch) => {
  if (params.results) {
    setTimeout(() => {
      let data = params;
      dispatch(onExecuted(ActionTypes.GET_POKEMON_DATA, data));
    }, 1000);
    return true;
  }
};
