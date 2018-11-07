import isEmpty from "../../utils/isEmpty"
import { GET_PORTFOLIO_SUCCESS, GET_PORTFOLIO_FAILURE } from "../actions/constants";
const initState = {
  images: {},
  error: {},
  done: false
};

export default function portfolioImages(state = initState, action) {
  switch (action.type) {
    case GET_PORTFOLIO_SUCCESS:
      return {
        ...state,
        images: action.payload,
        done: _ => !isEmpty(action.payload)
      };
    case GET_PORTFOLIO_FAILURE:
      return {
        ...state,
        error: action.payload,
        done: _ => !isEmpty(action.payload)
      };
    default:
      return state;
  }
}
