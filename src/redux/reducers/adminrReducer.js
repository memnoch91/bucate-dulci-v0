const initState = {
    isAuth: false,
    role: "",
    adminID: "",
    error: {}
}

export default function adminReducer(state = initState, action)  {
    switch(action.type) {
        case "LOGIN_SUCCESS":
        return {
            ...state,
            role: action.payload.role,
            adminID: action.payload.id
        }
    default:
        return state;
    }
}