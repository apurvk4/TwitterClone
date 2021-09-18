import { Component } from "react";
import global from "../global.module.css";
import Deadpool from "../img/deadpool.svg";
import style from "./topbanner.module.css";
import T from "../img/t.svg";
import ThemeContext from "./themeContext";
import Modal from "../Components/Modal";
import MbLeftNav from "../Components/MbLeftNav";
export default class TopBanner extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }
  handleClick() {
    this.state.isNavOpen
      ? this.setState({ isNavOpen: false })
      : this.setState({ isNavOpen: true });
  }
  static contextType = ThemeContext;
  render() {
    return (
      <div className={style.container}>
        <ul className={style.navList}>
          {this.props.pageName == "Home" && this.props.showDp ? (
            <li className={style.navListItem}>
              <button style={{ all: "unset" }} onClick={this.handleClick}>
                <Deadpool width="32px" height="32px" style={{ fill: "red" }} />
              </button>
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
        {this.state.isNavOpen ? (
          <Modal outsideclick="allow" close={this.handleClick}>
            <MbLeftNav close={this.handleClick} />
          </Modal>
        ) : (
          " "
        )}
      </div>
    );
  }
}
