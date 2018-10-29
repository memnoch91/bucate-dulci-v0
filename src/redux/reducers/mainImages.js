import isEmpty from "../../utils/isEmpty"

const initState = {
  images: {},
  error: {},
  done: false
};

export default function mainImages(state = initState, action) {
  switch (action.type) {
    case "GET_IMAGES_SUCCESS":
      return {
        ...state,
        images: action.payload,
        done: _ => !isEmpty(action.payload)
      };
    case "GET_IMAGES_FAILURE":
      return {
        ...state,
        error: action.payload,
        done: _ => !isEmpty(action.payload)

      };
    default:
      return state;
  }
}
