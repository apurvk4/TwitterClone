import { Component } from "react";
import global from "../global.module.css";
import style from "../app.module.css";
import LeftNav from "../Components/leftNav";
import RightNav from "../Components/rightNav";
import BottomNav from "../Components/BottomNav";
import Homepage from "../Components/Homepage";
import TopBanner from "../Components/TopBanner";
export default class Navigation extends Component {
  componentReducer = () => {
    switch (this.props.route) {
      case "Home":
        document.title = `${this.props.route}/Twitter`;
        return <Homepage Width={this.props.width} />;
      case "Explore":
        document.title = `${this.props.route}/Twitter`;
        return " ";
      case "Notifications":
        document.title = `${this.props.route}/Twitter`;
        return " ";
      case "Messages":
        document.title = `${this.props.route}/Twitter`;
        return " ";
      case "Bookmarks":
        document.title = `${this.props.route}/Twitter`;
        return " ";
      case "Lists":
        document.title = `${this.props.route}/Twitter`;
        return " ";
      case "Profile":
        document.title = `${this.props.route}/Twitter`;
        return " ";
      default:
        break;
    }
  };
  render = () => {
    return (
      <div className={global.reactWrapper}>
        <div className={style.app}>
          {(this.props.width >= 500 && (
            <div className={style.leftNav}>
              <LeftNav
                setTheme={this.props.themeChange}
                hide={this.props.width <= 1392 ? true : false}
              />
            </div>
          )) ||
            ""}
          <div className={style.mainContent}>
            <div className={style.content}>
              <TopBanner
                pageName={this.props.route}
                showDp={this.props.width <= 500 ? true : false}
                setTheme={this.props.themeChange}
              />
              {this.componentReducer()}
              {this.props.width <= 500 ? <BottomNav /> : " "}
            </div>
            {this.props.width >= 980 ? <RightNav /> : " "}
          </div>
        </div>
      </div>
    );
  };
}
