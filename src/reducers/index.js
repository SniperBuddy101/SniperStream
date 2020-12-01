
import { combineReducers } from "redux";

const initialState = {
    isSignedIn: null,
    userID: null
}

function authReducer(isSignedIn = initialState, action) {

    switch (action.type) {
        case "AUTH_STATE":
            return action.payload;
        default:
            return isSignedIn;

    }

}

export default combineReducers({
    authState: authReducer
});