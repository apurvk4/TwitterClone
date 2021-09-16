import { Component } from "react";
import global from "../global.module.css";
import Deadpool from "../img/deadpool.svg";
import style from "./topbanner.module.css";
import T from "../img/t.svg";
import ThemeContext from "./themeContext";
export default class TopBanner extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = ThemeContext;
  render() {
    return (
      <div className={style.container}>
        <ul className={style.navList}>
          {this.props.pageName == "Home" && this.props.showDp ? (
            <li className={style.navListItem}>
              <Deadpool width="32px" height="32px" style={{ fill: "red" }} />
            </li>
          ) : (
            " "
          )}
          <li
            className={style.navListItem}
            style={{ fontWeight: "900", fontSize: "x-large" }}
          >
            {this.props.pageName}
          </li>
          <li className={style.navListItem} style={{ flexGrow: 1 }}></li>
          <li className={style.navListItem}>
            <T
              width="32px"
              height="32px"
              className={
                this.context.theme == "default"
                  ? global.bgDefault
                  : global.bgDark
              }
            />
          </li>
        </ul>
      </div>
    );
  }
}
