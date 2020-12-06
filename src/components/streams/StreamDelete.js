import React from "react";
import Modal from "./Modal";
import history from "../../history";
import {connect} from "react-redux";
import {deleteStream, getStream} from "../../actions";

class StreamDelete extends React.Component{

  componentDidMount(){
    if (!this.props.stream){
      this.props.getStream(this.props.match.params.id);
    }

  }

  onModalDismiss = () => {
    history.push("/");
  };

  actions = (
    <React.Fragment>
      <div onClick={() => this.props.deleteStream(this.props.match.params.id)} className="ui button negative">Delete</div>
      <div onClick={this.onModalDismiss} className="ui button">Cancel</div>
    </React.Fragment>
  );

  render(){

    return <Modal
        onOutClick={this.onModalDismiss}
        actions={this.actions}
        headerText="Delete Stream"
        description={`Do you want to delete the stream "${this.props.stream ? this.props.stream.title : ''}"`}
      />

  }
}

function mapStateToProps(state, ownProps){
  return {stream: state.streams[ownProps.match.params.id]};

}

export default connect(mapStateToProps, {deleteStream, getStream})(StreamDelete);
