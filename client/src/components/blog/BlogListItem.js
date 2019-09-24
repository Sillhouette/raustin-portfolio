import React from "react";
import { Link } from "react-router-dom";
import { Header, Segment, Item, Divider, Container } from "semantic-ui-react";
import "./css/BlogListItem.css";
class BlogListItem extends React.Component {
  state = { counter: 0 };

  formatDate(date) {
    var monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return ` ${monthNames[monthIndex]} ${day}, ${year}`;
  }

  /**
   * renderAdmin renders administrative buttons on a given blog if the current user
   * is the user that created the blog
   **/
  renderAdmin(blog) {
    return (
      <div className="right floated content">
        <Link to={`blogs/edit/${blog.id}`} className="ui button primary">
          Edit
        </Link>
        <Link to={`blogs/delete/${blog.id}`} className="ui button negative">
          Delete
        </Link>
      </div>
    );
  }

  increaseCount() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    const { props } = this;

    if (!props.blog) {
      return null;
    }
    return (
      <Item>
        <Link to={`/blog/${props.blog.id}`}>
          <Header inverted size="huge">
            {props.blog.title}
          </Header>
          <Container fluid id="blog-item-main-container">
            <Segment basic id="blog-item-sub-container">
              {props.blog.post.replace(/<p>/g, "").substring(0, 250)}...
            </Segment>
          </Container>

          <div id="post-date">
            Posted by Austin on
            {this.formatDate(new Date(props.blog.created_at))}
          </div>
        </Link>

        <Divider inverted />
      </Item>
    );
  }
}

export default BlogListItem;
