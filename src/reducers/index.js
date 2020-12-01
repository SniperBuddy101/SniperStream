
import { combineReducers } from "redux";
import {reducer as reduxFormReducer} from "redux-form";

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
    authState: authReducer,
    form: reduxFormReducer
});