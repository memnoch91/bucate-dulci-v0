import isEmpty from "../../utils/isEmpty";
const initState = {
  logo: null,
  error: {},
  done: false
};

export default function logoImage(state = initState, action) {
  switch (action.type) {
    case "GET_LOGO_SUCCESS":
      return {
        ...state,
        logo: action.payload,
        done: _ => !isEmpty(action.payload)
      };
    case "GET_LOGO_FAILURE":
      return {
        ...state,
        logo: action.payload,
        done: _ => !isEmpty(action.payload)
      };
    default:
      return state;
  }
}
