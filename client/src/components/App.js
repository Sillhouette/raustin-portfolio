import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Header from "./common/Header";
import SideMenu from "./common/SideMenu";
import HomeButton from "./common/HomeButton";
import HomePage from "./home/HomePage";
import ProjectPage from "./project/ProjectPage";
import AboutPage from "./about/AboutPage";
import BlogList from "./blog/BlogList";
// import BlogCreate from "./blog/BlogCreate";
// import BlogDelete from "./blog/BlogDelete";
// import BlogEdit from "./blog/BlogEdit";
import BlogShow from "./blog/BlogShow";
import Footer from "./common/Footer";
import MtgShowPage from "./project/mtg/MtgShowPage";
import ResumePage from "./resume/ResumePage";
import history from "../history";
import "./App.css";

export default class App extends Component {
  state = { activeItem: window.location.pathname.split("/")[1] || "home" };

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name });
  };

  render() {
    return (
      <div
        className="App"
        style={{
          paddingBottom: "122px",
          width: "100%",
          minHeight: "100vh",
          overflow: "hidden",
          display: "block",
          position: "relative"
        }}
      >
        <Router history={history}>
          <Container fluid style={{ marginLeft: 0 }}>
            <Header
              invisible={this.state.activeItem === "home" ? true : false}
              activeItem={this.state.activeItem}
              handleItemClick={this.handleItemClick}
            />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <HomePage handleItemClick={this.handleItemClick} />
                )}
              />
              <Route
                path="/projects"
                exact
                render={() => (
                  <ProjectPage handleItemClick={this.handleItemClick} />
                )}
              />
              <Route
                path="/projects/MTG-Manager-Pro"
                exact
                component={MtgShowPage}
              />
              <Route path="/projects/News-CLI" exact component={AboutPage} />
              <Route
                path="/projects/Stream-Source"
                exact
                component={AboutPage}
              />
              <Route path="/about" exact component={AboutPage} />
              <Route path="/blog" exact component={BlogList} />
              {/*<Route path="/blog/new" exact component={BlogCreate} /> */}
              {/*<Route path="/blog/edit/:id" exact component={BlogEdit} /> */}
              {/*<Route path="/blog/delete/:id" exact component={BlogDelete} /> */}
              <Route path="/blog/:id" exact component={BlogShow} />
              <Route path="/resume" exact component={ResumePage} />
            </Switch>
          </Container>
          <HomeButton handleItemClick={this.handleItemClick} />
          <SideMenu handleItemClick={this.handleItemClick} />
          <Footer handleItemClick={this.handleItemClick} />
        </Router>
      </div>
    );
  }
}
