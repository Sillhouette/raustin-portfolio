//Start imports
import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions";
import setup from "./images/setup.jpg";
import setupWeb from "./images/setup.webp";
import { Link } from "react-router-dom";
import { Header, Grid, Container, Item, Image } from "semantic-ui-react";
import BlogListItem from "./BlogListItem";
import "./css/BlogList.css";

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
    return this.props.blogs.reverse().map(blog => {
      return (
        <Grid.Row stretched key={blog.id}>
          {/*<Container text textAlign="left">*/}
          <BlogListItem blog={blog} key={blog.id} />
          {/*</Container>*/}
        </Grid.Row>
      );
    });
  }

  /**
   * renderCreate returns the create blog button
   **/
  renderCreate() {
    return (
      <div id="create-blog-button">
        <Link to="/blogs/new" className="ui button primary">
          Create Blog
        </Link>
      </div>
    );
  }

  /**
   * render renders our list of blogs
   **/
  render() {
    return (
      <div>
        <Item>
          <picture>
            <source type="image/webp" srcSet={setupWeb} />
            <source type="image/jpg" srcSet={setup} />
            <Image id="blog-list-header-image" alt="" src={setup} />
          </picture>
          <Header inverted id="blog-list-header">
            Austin Melchior
          </Header>
        </Item>
        <Grid id="blog-list-grid">{this.renderList()}</Grid>
      </div>
    );
  }
}

/**
 * mapStateToProps maps the blogs, and isSignedIn values to this component's props
 **/
const mapStateToProps = state => {
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
