//Start imports
import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions";
import { Link } from "react-router-dom";
import { Header, Grid } from "semantic-ui-react";
import BlogListItem from "./BlogListItem";

/**
 * Bloglist is a class-based component that fetches and displays the list of our blogs
 **/
class BlogList extends React.Component {
  /**
   * componentDidMount calls the fetchBlogs action to retreive a list of Blogs
   * from our rails api backend
   **/
  componentDidMount() {
    this.props.fetchBlogs();
  }

  /**
   * renderList loops over the blogs object in this components props and returns
   * a list of the blogs and their properties to be displayed
   **/
  renderList() {
    return this.props.blogs.map(blog => {
      return (
        <Grid.Column>
          <BlogListItem blog={blog} key={blog.id} />
        </Grid.Column>
      );
    });
  }

  /**
   * renderCreate returns the create blog button
   **/
  renderCreate() {
    return (
      <div style={{ textAlign: "right" }}>
        <Link to="/blogs/new" className="ui button primary">
          Create Blog
        </Link>
      </div>
    );
  }

  /**
   * render renders our list of blogs and the create blog button on the page
   **/
  render() {
    return (
      <div>
        <Header as="h2" inverted>
          Blogs:
        </Header>
        <Grid>
          <Grid.Row stretched></Grid.Row>
        </Grid>
        <div className="ui celled list">{this.renderList()}</div>
      </div>
    );
  }
}

/**
 * mapStateToProps maps the blogs, and isSignedIn values to this component's props
 **/
const mapStateToProps = state => {
  debugger;
  return {
    blogs: Object.values(state.blogs)
  };
};

/**
 * export BlogList and hook it up to our redux store with mapStateToProps and the fetchBlogs action
 **/
export default connect(
  mapStateToProps,
  { fetchBlogs }
)(BlogList);
