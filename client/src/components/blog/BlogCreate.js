//Start imports
import React from "react";
import { connect } from "react-redux";
import { createBlog } from "../../actions";
import BlogForm from "./BlogForm";

/**
 * BlogCreate is a class-based component that displays a BlogForm which is
 * used to get the data required to create a new blog
 **/
class BlogCreate extends React.Component {
  /**
   * onSubmit takes in the submitted form values and passes them to the
   * createBlog action
   **/
  onSubmit = formValues => {
    this.props.createBlog(formValues);
  };

  /**
   * Render function tells React how we want to render our blog creation component
   **/
  render() {
    return (
      <div>
        <h3>Create a Blog Post</h3>
        <BlogForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

/**
 * Export this component while passing it to Redux's connect component wiring this
 * component to redux through the createBlog action
 **/
export default connect(
  null,
  { createBlog }
)(BlogCreate);
