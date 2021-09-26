import dom from "react-dom";
import { Component } from "react";
import global from "../src/global.module.css";
import style from "../src/app.module.css";
import LeftNav from "./Components/leftNav";
import RightNav from "./Components/rightNav";
import BottomNav from "./Components/BottomNav";
import ThemeContext from "./Components/themeContext";
import changeTheme from "./Components/changeTheme";
import Homepage from "./Components/Homepage";
import TopBanner from "./Components/TopBanner";
import { Route, Switch } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.Getwidth = this.Getwidth.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      width: this.Getwidth(),
      theme: "default",
      name: "Home",
    };
  }
  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  handleResize() {
    this.setState({ width: this.Getwidth() });
  }
  Getwidth() {
    return window.innerWidth && document.documentElement.clientWidth
      ? Math.min(window.innerWidth, document.documentElement.clientWidth)
      : window.innerWidth ||
          document.documentElement.clientWidth ||
          document.getElementsByTagName("body")[0].clientWidth;
  }
  themeChange(val) {
    this.setState({ theme: val });
    changeTheme();
  }
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Provider value={{ theme: this.state.theme }}>
        <Router basename={process.env.PUBLIC_URL}>
          <div className={global.reactWrapper}>
            <div className={style.app}>
              {this.state.width >= 500 ? (
                <div className={style.leftNav}>
                  <LeftNav
                    setTheme={this.themeChange.bind(this)}
                    hide={this.state.width <= 1392 ? true : false}
                  />
                </div>
              ) : (
                ""
              )}
              <div className={style.mainContent}>
                <div className={style.content}>
                  <TopBanner
                    pageName={this.state.name}
                    showDp={this.state.width <= 500 ? true : false}
                    setTheme={this.themeChange.bind(this)}
                  />
                  <Switch>
                    <Route
                      path="/"
                      exact
                      render={() => {
                        this.state.name != "Home"
                          ? this.setState({ name: "Home" })
                          : " ";
                        return <Homepage Width={this.state.width} />;
                      }}
                    />
                    <Route
                      path="/explore"
                      render={() => {
                        this.state.name != "Explore"
                          ? this.setState({ name: "Explore" })
                          : " ";
                        return this.props.explore;
                      }}
                    />
                    <Route
                      path="/notifications"
                      render={() => {
                        this.state.name != "Notifications"
                          ? this.setState({ name: "Notifications" })
                          : " ";
                        return this.props.notifications;
                      }}
                    />
                    <Route
                      path="/messages"
                      render={() => {
                        this.state.name != "Messages"
                          ? this.setState({ name: "Messages" })
                          : " ";
                        return this.props.messages;
                      }}
                    />
                    <Route
                      path="/bookmarks"
                      render={() => {
                        this.state.name != "Bookmarks"
                          ? this.setState({ name: "Bookmarks" })
                          : " ";
                        return this.props.bookmarks;
                      }}
                    />
                    <Route
                      path="/lists"
                      render={() => {
                        this.state.name != "Lists"
                          ? this.setState({ name: "Lists" })
                          : " ";
                        return this.props.lists;
                      }}
                    />
                    <Route
                      path="/profile"
                      render={() => {
                        this.state.name != "Profile"
                          ? this.setState({ name: "Profile" })
                          : " ";
                        return this.props.profile;
                      }}
                    />
                  </Switch>

                  {this.state.width <= 500 ? <BottomNav /> : " "}
                </div>
                {this.state.width >= 980 ? <RightNav /> : " "}
              </div>
            </div>
          </div>
        </Router>
      </ThemeContext.Provider>
    );
  }
}
dom.render(<App />, document.getElementById("react-root"));
