import React from "react";
import {connect} from "react-redux";
import {createStream} from "../../actions";
import StreamForm from "./StreamForm";


const StreamCreate = (props) => {

  const onFormSubmit = (fieldValues) => {
    props.createStream(fieldValues);
  };

  return (
  <div>
  <h2>Create a Stream</h2>
  <StreamForm onSubmit={onFormSubmit}/></div>);

}


export default connect(null, {createStream})(StreamCreate);
