import React from "react";
import {connect} from "react-redux";

const StreamEdit = (props) => {
    
    
    return <div>
    <h1>{props.stream.title}</h1>
    <h2>{props.stream.description}</h2>
    </div>;
}

const mapStateToProps = (state, ownProps) => {
    console.log(ownProps);
    return {stream: state.streams[ownProps.match.params.id]};
}

export default connect(mapStateToProps)(StreamEdit);