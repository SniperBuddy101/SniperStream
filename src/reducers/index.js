
import { combineReducers } from "redux";
import {reducer as reduxFormReducer} from "redux-form";
import _ from "lodash";

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

function streamReducer (state = {}, action){
    switch (action.type){
        case "GET_STREAMS":
            return {...state, ...action.payload};
        case "GET_STREAM":
            return {...state, [action.payload.id]: action.payload};
        case "CREATE_STREAM":
            return {...state, [action.payload.id]: action.payload};
        case "EDIT_STREAM":
            return {...state, [action.payload.id]: action.payload};
        case "DELETE_STREAM":
            return _.omit(state, action.payload);
        default:
            return state;

    }

}



export default combineReducers({
    authState: authReducer,
    form: reduxFormReducer,
    streams: streamReducer
});