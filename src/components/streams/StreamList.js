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
        <div className="item">
          {id === streamElement.userID && (
            <div className="right floated content">
              <Link to="/streams/edit">
                <button className="ui button primary">Edit</button>
              </Link>
              <Link to="/streams/delete">
                <button className="ui button negative">Delete</button>
              </Link>
            </div>
          )}
          <i className="large middled icon camera" />
          <div className="content">
            <div className="header">{streamElement.title}</div>
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
        {(this.props.isSignedIn === true) && <Link to="/streams/create">
          <button className="ui button green right floated" style={{marginRight: "7px"}}>
            Create a Stream
          </button>
        </Link>}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userID: state.authState.userID,
    streams: Object.values(state.streams),
    isSignedIn: state.authState.isSignedIn
  };
};

export default connect(mapStateToProps, { getStreams })(StreamList);
