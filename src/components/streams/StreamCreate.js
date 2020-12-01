import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  inputFieldRenderer = (props) => {
    return (
      <div className="field">
        <label>{props.label}</label>
        <input autoComplete="off" {...props.input} />
      </div>
    );
  };

  onFormSubmit = (fieldValues) => {
      console.log(fieldValues);
  }

  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form">
          <Field
            name="title"
            component={this.inputFieldRenderer}
            label="Enter the name of your new Stream"
          />
          <Field
            name="description"
            component={this.inputFieldRenderer}
            label="What is this Stream about? Some description would attract viewers to watch it."
          />
          <button className="ui button primary">Submit</button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "StreamCreate",
})(StreamCreate);
