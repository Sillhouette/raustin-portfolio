//Start imports
import React from "react";
import { connect } from "react-redux";
import { fetchBlogs } from "../../actions";
import setup from "./images/setup.jpg";
import { Link } from "react-router-dom";
import { Header, Grid, Container, Item, Image } from "semantic-ui-react";
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
        <Grid.Column key={blog.id}>
          <Container text textAlign="left">
            <BlogListItem blog={blog} key={blog.id} />
          </Container>
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
        <Item>
          <Image
            src={setup}
            style={{
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
              top: 0,
              filter: "blur(5px) drop-shadow(16px 16px 10px black)",
              height: "300px",
              objectFit: "cover",
              objectPosition: "center"
            }}
          />
          <Header
            inverted
            style={{
              marginTop: "85px",
              marginBottom: "85px",
              fontSize: "50px",
              textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
            }}
          >
            Austin Melchior
          </Header>
        </Item>
        <Grid
          columns={1}
          style={{
            padding: "50px"
          }}
        >
          <Grid.Row stretched>{this.renderList()}</Grid.Row>
        </Grid>
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
