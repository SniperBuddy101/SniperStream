import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {

  errorRenderer = (meta) => {
    if (meta.error && meta.touched){
      return (<div className="ui error message">
      <div className="header">{meta.error}</div>
    </div>);
    }

    return null;
  }


  inputFieldRenderer = (props) => {

    const fieldClassName = `field ${props.meta.error && props.meta.touched ? "error" : ""}`;

    return (
        <div className={fieldClassName}>
          <label>{props.label}</label>
          <input autoComplete="off" {...props.input} />
          {this.errorRenderer(props.meta)}
        </div> 
    );
  };

  onFormSubmit = (fieldValues) => {
    this.props.onSubmit(fieldValues);
  };

  render() {
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(this.onFormSubmit)}
          className="ui form error"
        >
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

const validationFunction = (fieldValues) => {
  const errors = {};

  if (!fieldValues.title) {
    errors.title = "Please enter a name of your stream";
  }
  if (!fieldValues.description) {
    errors.description = "Please enter a description of your stream. Tell the world what it's about!";
  }
  return errors;
};

const reduxFormWrapped = reduxForm({
  form: "StreamForm",
  validate: validationFunction,
})(StreamForm);

export default reduxFormWrapped;
