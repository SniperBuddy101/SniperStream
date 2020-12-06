import streams from "../api/streams";
import history from "../history";



function changeAuthState(isSignedIn) {
  const userId = isSignedIn
    ? window.gapi.auth2.getAuthInstance().currentUser.get().getId()
    : null;
  return {
    type: "AUTH_STATE",
    payload: { isSignedIn, userID: userId },
  };
}

function signIn(auth) {
  return () => auth.signIn();
}

function signOut(auth) {
  return () => auth.signOut();
}

const createStream = fieldValues => async (dispatch, getState) => {
  const response = await streams.post("/streams", {...fieldValues, userID: getState().authState.userID});
  dispatch({
    type: "CREATE_STREAM",
    payload: {...response.data}
  });
  history.push("/");
}


const getStreams = () => async dispatch => {
    const response = await streams.get("/streams");
    const obj = {};
    for (let strm of response.data){
      obj[strm.id] = strm;
    }
    dispatch({
      type: "GET_STREAMS",
      payload: obj
    });
}

const getStream = (id) => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({
    type: "GET_STREAM",
    payload: response.data
  });
}

const editStream = (id, fieldValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, fieldValues);
  dispatch({
    type: "EDIT_STREAM",
    payload: response.data
  });
  history.push("/");
}

const deleteStream = (id) => async dispatch => {
  await streams.delete(`streams/${id}`);
  dispatch({
    type: "DELETE_STREAM",
    payload: id
  });
}

export {createStream, changeAuthState, signIn, signOut, getStreams, getStream, editStream, deleteStream};
