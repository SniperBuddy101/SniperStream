import React from "react";
import { connect } from "react-redux";
import { getStreams } from "../../actions";
import { Link } from "react-router-dom";

class StreamList extends React.Component {
  componentDidMount() {
    this.props.getStreams();
  }

  listRendered = (id, streamsArray) => {
    return streamsArray.map((streamElement) => {
      return (
        <div key={streamElement.id} className="item">
          {id === streamElement.userID && (
            <div className="right floated content">
              <Link
                className="ui button primary"
                to={`/streams/edit/${streamElement.id}`}
              >
                Edit
              </Link>
              <Link
                className="ui button negative"
                to={`/streams/delete/${streamElement.id}`}
              >
                Delete
              </Link>
            </div>
          )}
          <i className="large middled icon camera" />
          <div className="content">
            <Link className="header" to={`/streams/${streamElement.id}`}>
              {streamElement.title}
            </Link>
            {streamElement.description}
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="ui celled list">
          {this.listRendered(this.props.userID, this.props.streams)}
        </div>
        {this.props.isSignedIn === true && (
          <Link to="/streams/create">
            <button
              className="ui button green right floated"
              style={{ marginRight: "7px" }}
            >
              Create a Stream
            </button>
          </Link>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.authState.userID,
    streams: Object.values(state.streams),
    isSignedIn: state.authState.isSignedIn,
  };
};

export default connect(mapStateToProps, { getStreams })(StreamList);
