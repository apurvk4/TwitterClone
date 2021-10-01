import dom from "react-dom";
import "core-js";
import { Component } from "react";

import ThemeContext from "./utils/themeContext";
import changeTheme from "./utils/changeTheme";
import Navigation from "./Components/Navigation";
import Login from "./Components/login";
import { Redirect, Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
export default class App extends Component {
  getWidth = () => {
    return window.innerWidth && document.documentElement.clientWidth
      ? Math.min(window.innerWidth, document.documentElement.clientWidth)
      : window.innerWidth ||
          document.documentElement.clientWidth ||
          document.querySelector("body").clientWidth;
  };
  checkLogin = () => {
    return document.cookie
      .split(";")
      .find((row) => row.startsWith("userToken"));
  };
  state = {
    width: this.getWidth(),
    theme: "default",
    name: "Home",
    login: this.checkLogin(),
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize = () => {
    this.setState({ width: this.getWidth() });
  };
  themeChange = (val) => {
    this.setState({ theme: val });
    changeTheme();
  };
  setLogin = () => {
    if (
      !document.cookie.split(";").find((row) => row.startsWith("userToken"))
    ) {
      let token = "" + Math.random() * 100000;
      document.cookie = `userToken=${token}; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure`;
      this.setState({ login: !this.state.login });
    }
  };
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme }}>
        <Router basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path="/">
              {this.state.login ? (
                <Redirect to="/home" />
              ) : (
                <Login login={this.setLogin} />
              )}
            </Route>
            <Route path="/home">
              {this.state.login ? (
                <Navigation
                  route="Home"
                  width={this.state.width}
                  themeChange={this.themeChange}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/explore">
              {this.state.login ? (
                <Navigation
                  route="Explore"
                  width={this.state.width}
                  themeChange={this.themeChange}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/notifications">
              {this.state.login ? (
                <Navigation
                  route="Notifications"
                  width={this.state.width}
                  themeChange={this.themeChange}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/messages">
              {this.state.login ? (
                <Navigation
                  route="Messages"
                  width={this.state.width}
                  themeChange={this.themeChange}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/bookmarks">
              {this.state.login ? (
                <Navigation
                  route="Bookmarks"
                  width={this.state.width}
                  themeChange={this.themeChange}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/lists">
              {this.state.login ? (
                <Navigation
                  route="Lists"
                  width={this.state.width}
                  themeChange={this.themeChange}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
            <Route path="/:id">
              {this.state.login ? (
                <Navigation
                  route="Profile"
                  width={this.state.width}
                  themeChange={this.themeChange}
                />
              ) : (
                <Redirect to="/" />
              )}
            </Route>
          </Switch>
        </Router>
      </ThemeContext.Provider>
    );
  }
}
dom.render(<App />, document.getElementById("react-root"));
