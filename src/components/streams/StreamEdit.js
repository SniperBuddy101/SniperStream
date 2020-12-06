import React from "react";
import { connect } from "react-redux";
import { getStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    if (!this.props.stream) {
      this.props.getStream(this.props.match.params.id);
    }
  }

  onFormSubmit = (fieldValues) => {
      this.props.editStream(this.props.match.params.id, fieldValues);
  }

  renderStream() {
    if (this.props.stream) {
      return (
          <div>
          <h2>Edit a Stream</h2>
        <StreamForm
        onSubmit={this.onFormSubmit}
          initialValues={{
            title: this.props.stream.title,
            description: this.props.stream.description,
          }}
        />
        </div>
      );
    }

    return null;
  }

  render() {
    return this.renderStream();
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { getStream, editStream })(StreamEdit);
