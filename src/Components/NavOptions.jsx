import { Component } from "react";
import style from "../Components/css/tweetoptions.module.css";
import global from "../global.module.css";
import ThemeContext from "./themeContext";
export default class TweetOptions extends Component {
  constructor(props) {
    super(props);
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    document.addEventListener("click", this.clickHandler);
  }
  clickHandler(e) {
    if (
      !e.target.closest(style["container"]) &&
      !e.target.closest("#rightNav-options")
    ) {
      this.props.closeModal();
    }
  }
  componentWillUnmount() {
    document.removeEventListener("click", this.clickHandler);
  }
  static contextType = ThemeContext;
  render() {
    return (
      <div className={style["container"]}>
        <div className={style["flexContainer"]}>
          <div className={style["col-container"]}>
            <div className={style["col"]}>
              <div className={style["col-items"]}>
                <button>
                  <svg
                    viewBox="0 0 24 24"
                    height="18.75px"
                    width="18.75px"
                    className={
                      this.context.theme == "default"
                        ? global["bgDefault"]
                        : global["bgDark"]
                    }
                  >
                    <g>
                      <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                      <path d="M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z"></path>
                    </g>
                  </svg>
                  <span>Not intreseted in this </span>
                </button>
              </div>
              <div className={style["col-items"]}>
                <button>
                  <svg
                    viewBox="0 0 24 24"
                    height="18.75px"
                    width="18.75px"
                    className={
                      this.context.theme == "default"
                        ? global["bgDefault"]
                        : global["bgDark"]
                    }
                  >
                    <g>
                      <path d="M12 22.75C6.072 22.75 1.25 17.928 1.25 12S6.072 1.25 12 1.25 22.75 6.072 22.75 12 17.928 22.75 12 22.75zm0-20C6.9 2.75 2.75 6.9 2.75 12S6.9 21.25 12 21.25s9.25-4.15 9.25-9.25S17.1 2.75 12 2.75z"></path>
                      <path d="M12 13.415c1.892 0 3.633.95 4.656 2.544.224.348.123.81-.226 1.035-.348.226-.812.124-1.036-.226-.747-1.162-2.016-1.855-3.395-1.855s-2.648.693-3.396 1.854c-.224.35-.688.45-1.036.225-.35-.224-.45-.688-.226-1.036 1.025-1.594 2.766-2.545 4.658-2.545zm4.216-3.957c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478s1.478.66 1.478 1.478zm-5.476 0c0 .816-.662 1.478-1.478 1.478s-1.478-.66-1.478-1.478c0-.817.662-1.478 1.478-1.478.817 0 1.478.66 1.478 1.478z"></path>
                    </g>
                  </svg>
                  <span>This trend is harmful or spammy</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
