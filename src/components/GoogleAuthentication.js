import React from "react";
import {connect} from "react-redux";
import {changeAuthState, signIn, signOut} from "../actions";

const CLIENT_ID = '539490745699-cj8i5p8am9uf0lf3erpi6jh4o3v33igm.apps.googleusercontent.com';

class GoogleAuth extends React.Component{

    button = () => {
        switch (this.props.isSignedIn){
            case null:
                return null;
            case true:
                return (<div onClick={() => this.props.signOut(this.auth)} className="ui button red">
                    <i className="google icon" />
                    Sign Out
                </div>);
            case false:
                return (
                    <div onClick={() => this.props.signIn(this.auth)} className="ui red button">
                        <i className="google icon" />
                        Sign In with Google
                    </div>
                );
            default:
                return null;

        }
    }


    componentDidMount(){
        window.gapi.load('auth2', () => window.gapi.auth2.init({client_id: CLIENT_ID}).then(
            () => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.props.changeAuthState(this.auth.isSignedIn.get());            
                this.auth.isSignedIn.listen(this.props.changeAuthState);
            }
        ));

    }

    render(){
        
    return <div className="item">{this.button()}</div>;
    }
}

const mapStateToProps = state => {
    return {isSignedIn: state.authState.isSignedIn};
}

export default connect(mapStateToProps, {changeAuthState, signIn, signOut})(GoogleAuth);