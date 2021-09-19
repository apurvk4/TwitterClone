import dom from "react-dom";
import { Component } from "react";
import global from "../src/global.module.css";
import style from "../src/app.module.css";
import LeftNav from "./Components/leftNav";
import RightNav from "./Components/rightNav";
import BottomNav from "./Components/BottomNav";
import ThemeContext from "./Components/themeContext";
import changeTheme from "./Components/changeTheme";
import TopBanner from "./Components/TopBanner";
import Tweet from "./Components/Tweet";
import TweetModal from "./Components/TweetModal";
let arr = new Array(20).fill(0);
arr = arr.map(() => {
  return Math.floor(Math.random() * 10000);
});
export default class App extends Component {
  constructor(props) {
    super(props);
    this.Getwidth = this.Getwidth.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      width: this.Getwidth(),
      theme: "default",
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
                  pageName="Home"
                  showDp={this.state.width <= 500 ? true : false}
                  setTheme={this.themeChange.bind(this)}
                />
                <TweetModal ismodal={false} />
                {arr.map((e) => {
                  return <Tweet key={e} id={e} />;
                })}
                {this.state.width <= 500 ? <BottomNav /> : " "}
              </div>
              {this.state.width >= 980 ? <RightNav /> : " "}
            </div>
          </div>
        </div>
      </ThemeContext.Provider>
    );
  }
}
dom.render(<App />, document.getElementById("react-root"));
