//Start imports
import React from "react";
import { connect } from "react-redux";
import { Header, Item, Container, Segment, Image } from "semantic-ui-react";
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
    this.props.fetchBlog(id).then(() => {
      this.addPostContent(this.props.blog.post);
    });
  }

  addPostContent(content) {
    let element = document.getElementById(`post_body`);
    if (element) {
      element.innerHTML += content;
    }
  }

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
          <Image
            src={image}
            alt=""
            style={{
              position: "absolute",
              width: "100vw",
              zIndex: "-1",
              top: 0,
              filter:
                "blur(2px) drop-shadow(16px 16px 10px black) grayscale(75%)",
              height: "300px",
              objectFit: "cover",
              objectPosition: "bottom"
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
            {title}
          </Header>
        </Item>
        <Container style={{ width: "75%", padding: 75 }}>
          <Container
            textAlign="left"
            style={{
              borderRadius: "10px",
              background: "#fff",
              backgroundColor: "rgba(255,255,255,0.8)"
            }}
          >
            <Segment
              id={`post_body`}
              basic
              style={{ color: "black", fontSize: "16px" }}
            >
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
