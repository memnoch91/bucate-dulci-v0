import axios from "axios";
import { SERVER_URL } from "../../utils/links"
import { GET_PORTFOLIO_FAILURE, GET_PORTFOLIO_SUCCESS } from "./constants";

export function getPortfolioImages() {
  return dispatch => {
    return axios
      .get(`${SERVER_URL}/api/portfolio`)
      .then(res => {
        dispatch({
          type: GET_PORTFOLIO_SUCCESS,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: GET_PORTFOLIO_FAILURE,
          payload: err
        });
      });
  };
}
