//Start imports
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import { fetchBlog, editBlog } from "../../actions";
import BlogForm from "./BlogForm";

/**
 * BlogEdit is a class-based component that renders a BlogForm to receive
 * user input that is then used to edit a user's blog object
 **/
class BlogEdit extends React.Component {
  /**
   * componentDidMount fetches the blog that the user wants to edit using it's props
   **/
  componentDidMount() {
    this.props.fetchBlog(this.props.match.params.id);
  }

  /**
   * onSubmit handles submitting the editBlog action passing in the id of the blog
   * and the new properties for the blog object
   **/
  onSubmit = formValues => {
    this.props.editBlog(this.props.match.params.id, formValues);
  };

  /**
   * render displays the BlogForm component for the user to submit changes for a blog
   **/
  render() {
    if (!this.props.blog) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <h3>Edit a Blog</h3>
        <BlogForm
          //We use the lodash library to pick out the values of the blog to fill into the form
          initialValues={_.pick(this.props.blog, "title", "description")}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

/**
 * Map our state to props so we can use it to fill our form values
 **/
const mapStateToProps = (state, ownProps) => {
  return { blog: state.blogs[ownProps.match.params.id] };
};

/**
 * Export this component and connect it to our Redux store with the matchStateToProps,
 * fetchBlog, and editBlog functions
 **/
export default connect(
  mapStateToProps,
  { fetchBlog, editBlog }
)(BlogEdit);
