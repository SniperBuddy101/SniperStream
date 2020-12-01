
export function changeAuthState(isSignedIn) {
   const userId = isSignedIn ? window.gapi.auth2.getAuthInstance().currentUser.get().getId() : null;
    return {
        type: "AUTH_STATE",
        payload: {isSignedIn, userID: userId}
    };

}

export function signIn (auth){
    return () => auth.signIn();
}

export function signOut(auth){
    return () => auth.signOut();
}

