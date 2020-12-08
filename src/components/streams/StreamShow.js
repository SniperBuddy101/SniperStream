import React from "react";
import {connect} from "react-redux";
import {getStream} from "../../actions";
import flvJS from "flv.js"; 

class StreamShow extends React.Component{

    constructor(props){
        super(props);

        this.videoElement = React.createRef();

    }

    componentDidMount(){
        if (!this.props.stream){
            this.props.getStream(this.props.match.params.id);
        }
        const videoSrc = `http://localhost:8000/live/${this.props.match.params.id}.flv`;
        if (flvJS.isSupported()) {
            this.flvPlayer = flvJS.createPlayer({
                type: 'flv',
                url: videoSrc
            });
            this.flvPlayer.attachMediaElement(this.videoElement.current);
            this.flvPlayer.load();
        }
        
    }

    componentWillUnmount(){
        this.flvPlayer.destroy();
    }

    renderContent = () => {
        if (!this.props.stream){
            return null;
        }

        return (<div className="ui segment">
            <div className="header"><h1>{this.props.stream.title}</h1></div>
            <h3>{this.props.stream.description}</h3>
        </div>);
    }

    render(){

        return <div>
            <video controls ref={this.videoElement} style={{width: "100%"}}></video>
            {this.renderContent()}
        </div>;


        
    }
}

const mapStateToProps = (state, ownProps) => {
    return {stream: state.streams[ownProps.match.params.id]}
}

export default connect(mapStateToProps, {getStream})(StreamShow);