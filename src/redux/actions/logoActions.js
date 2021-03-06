import { SERVER_URL } from "../../utils/links";
import axios from "axios";
import { GET_LOGO_SUCCESS, GET_LOGO_FAILURE } from "./constants";


export function getLogo() {
  return dispatch => {
    return axios
      .get(`${SERVER_URL}/api/logo`)
      .then(res => {
        dispatch({
          type: GET_LOGO_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_LOGO_FAILURE,
          payload: err
        });
      });
  };
}
