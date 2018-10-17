const initState = {
    images: {},
    error: {}
}

export default function sliderReducer(state = initState, action)  {
    switch(action.type) {
        case "GET_IMAGES_SUCCESS":
        return {
            ...state,
            images: action.payload,
        }
        case "GET_IMAGES_FAILURE":
        return {
            ...state,
            error: action.payload,
        }
    default:
        return state;
    }
}