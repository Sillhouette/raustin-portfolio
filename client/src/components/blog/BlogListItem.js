import React from "react";
import { Link } from "react-router-dom";

class BlogListItem extends React.Component {
  state = { counter: 0 };

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

  callApi() {
    console.log("a");
    fetch("http://localhost:3000/api/blogs")
      .then(function(response) {
        console.log("b");
        return response.json();
      })
      .then(function(data) {
        console.log("c", data);
      })
      .catch(err => console.log("d", err));
    console.log("e");
  }

  render() {
    const { props } = this;

    if (!props.blog) {
      return null;
    }

    return (
      <div className="item">
        //{this.renderAdmin(props.blog)}
        <i className="large middle aligned icon camera" />
        <div className="content">
          <Link to={`/blogs/${props.blog.id}`} className="header">
            {props.blog.title}
          </Link>
          <div className="description">{props.blog.description}</div>
        </div>
      </div>
    );
  }
}

export default BlogListItem;
