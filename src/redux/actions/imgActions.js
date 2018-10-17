import axios from "axios";
import { SERVER_URL } from "../../utils/links"


export function getSliderImages() {
  return dispatch => {
    return axios
      .get(`${SERVER_URL}/api/images`)
      .then(res => {
        dispatch({
          type: "GET_IMAGES_SUCCESS",
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: "GET_IMAGES_FAILURE",
          payload: err
        });
      });
  };
}
