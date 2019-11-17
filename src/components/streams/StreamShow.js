import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading....</div>;
    }
    return (
      <div>
        <h1>{this.props.stream.title}</h1>
        <h3>{this.props.stream.description}</h3>
      </div>
    );
  }
}

const mapStatetProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStatetProps, { fetchStream })(StreamShow);
