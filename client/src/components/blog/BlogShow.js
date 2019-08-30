//Start imports
import React from "react";
import { connect } from "react-redux";
import { fetchBlog } from "../../actions";

/**
 * BlogShow is a class-based compnent that displays a blog to our user
 **/
class BlogShow extends React.Component {
  /**
   * componentDidMount fetches our blog object when the component first mounts
   * as well as builds our video player
   **/
  componentDidMount() {
    const { id } = this.props.match.params;

    this.props.fetchBlog(id);
  }

  /**
   * render renders a single blog onto the webpage, with the video player
   **/
  render() {
    if (!this.props.blog) {
      return <div>Loading...</div>;
    }

    const { title, description } = this.props.blog;

    return (
      <div>
        <h1>{title}</h1>
        <h5>{description}</h5>
      </div>
    );
  }
}

/**
 * mapStateToProps returns our blog for access through props
 **/
const mapStateToProps = (state, ownProps) => {
  return { blog: state.blogs[ownProps.match.params.id] };
};

/**
 * export the component and connect it to our redux store, passing it our state as props
 * and the fetchBlog action
 **/
export default connect(
  mapStateToProps,
  { fetchBlog }
)(BlogShow);
