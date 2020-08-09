//Start imports
import React from "react";
import { connect } from "react-redux";
import { Header, Item, Container, Segment, Image } from "semantic-ui-react";
import { fetchBlog } from "../../actions";
import "./css/BlogShow.css";

/**
 * BlogShow is a class-based compnent that displays a blog to our user
 **/
class BlogShow extends React.Component {
  /**
   * componentDidMount fetches our blog object when the component first mounts
   **/
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchBlog(id).then(() => {
      this.addPostContent(this.props.blog.content);
    });
  }

  addPostContent(content) {
    let element = document.getElementById(`post-body`);
    if (element) {
      element.innerHTML += content;
    }
  }

  formatDate(date) {
    let monthNames = [
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
   * render renders a single blog onto the webpage, with the video player
   **/
  render() {
    if (!this.props.blog) {
      return <div>Loading...</div>;
    }

    const { title, image } = this.props.blog;
    return (
      <Item>
        <Item>
          <Image src={image} alt="" id="blog-show-header-image" />
          <Header inverted id="blog-show-header">
            {title}
          </Header>
        </Item>
        <Container id="blog-show-main-container">
          <Container textAlign="left" id="blog-show-sub-container">
            <Segment id="post-body" basic>
              <Header size="medium">
                Posted by Austin on
                {this.formatDate(new Date(this.props.blog.created_at))}
              </Header>
            </Segment>
          </Container>
        </Container>
      </Item>
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
