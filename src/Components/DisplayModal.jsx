import { Component } from "react";
import style from "../Components/css/displaymodal.module.css";
// import global from "../global.module.css";
import Twitter from "../img/twitter_square.jpg";
import ThemeContext from "../utils/themeContext";
function findColor() {
  let color = document.documentElement.style.getPropertyValue("--accent-color");
  switch (color) {
    case "#1d9bf0":
      return "blue";
    case "#ffd400":
      return "yellow";
    case "#f91880":
      return "red";
    case "#7856ff":
      return "voilet";
    case "#ff7a00":
      return "orange";
    case "#00ba7c":
      return "green";
    default:
      return "blue";
  }
}
export default class DisplayModal extends Component {
  state = {
    color: findColor(),
  };
  colorChange = (color) => {
    switch (color) {
      case "blue":
        this.setState({ color: "blue" });
        document.documentElement.style.setProperty("--accent-color", "#1d9bf0");
        break;
      case "yellow":
        this.setState({ color: "yellow" });
        document.documentElement.style.setProperty("--accent-color", "#ffd400");
        break;
      case "red":
        this.setState({ color: "red" });
        document.documentElement.style.setProperty("--accent-color", "#f91880");
        break;
      case "voilet":
        this.setState({ color: "voilet" });
        document.documentElement.style.setProperty("--accent-color", "#7856ff");
        break;
      case "orange":
        this.setState({ color: "orange" });
        document.documentElement.style.setProperty("--accent-color", "#ff7a00");
        break;
      case "green":
        this.setState({ color: "green" });
        document.documentElement.style.setProperty("--accent-color", "#00ba7c");
        break;
      default:
        break;
    }
  };
  static contextType = ThemeContext;
  render() {
    return (
      <div className={style["container0"]}>
        <div className={style["container"]}>
          <div className={style["header"]}>
            <span>Customize your view</span>
          </div>
          <div className={style["body"]}>
            <div className={style["body-item-top"]}>
              Manage your font size, color, and background. These settings
              affect all the Twitter accounts on this browser.
            </div>
            <div className={style["body-item-tweet"]}>
              <div className={style["body-item-tweet-card"]}>
                <div className={style["body-item-tweet-card-body"]}>
                  <div className={style["body-item-tweet-card-body-left"]}>
                    <img src={Twitter} alt="dp" />
                  </div>
                  <div className={style["body-item-tweet-card-body-main"]}>
                    <div
                      className={style["body-item-tweet-card-body-main-top"]}
                    >
                      <span style={{ fontWeight: 700 }}>Twitter</span>
                      <span muted-text="true">@Twitter</span>
                      <span muted-text="false">10m</span>
                    </div>
                    <div>
                      <span></span>
                      At the heart of Twitter are short messages called Tweets —
                      just like this one — which can include photos, videos,
                      links, text, hashtags, and mentions like
                      <span data-at="true">@Twitter</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={style["body-item-color"]}>
              <span
                muted-text="true"
                style={{ fontSize: "small", fontWeight: 700 }}
              >
                Color
              </span>
            </div>
            <div className={style["body-item-selector"]}>
              <div className={style["row"]}>
                <div
                  className={style["color-selector-item"]}
                  style={{ backgroundColor: "#1d9bf0" }}
                >
                  <button onClick={() => this.colorChange("blue")}>
                    {this.state.color == "blue" ? (
                      <svg viewBox="0 0 24 24" style={{ fill: "#fff" }}>
                        <g>
                          <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                        </g>
                      </svg>
                    ) : (
                      " "
                    )}
                  </button>
                </div>
                <div
                  className={style["color-selector-item"]}
                  style={{ backgroundColor: "#ffd400" }}
                >
                  <button onClick={() => this.colorChange("yellow")}>
                    {this.state.color == "yellow" ? (
                      <svg viewBox="0 0 24 24" style={{ fill: "#fff" }}>
                        <g>
                          <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                        </g>
                      </svg>
                    ) : (
                      " "
                    )}
                  </button>
                </div>
                <div
                  className={style["color-selector-item"]}
                  style={{ backgroundColor: "#f91880" }}
                >
                  <button onClick={() => this.colorChange("red")}>
                    {this.state.color == "red" ? (
                      <svg viewBox="0 0 24 24" style={{ fill: "#fff" }}>
                        <g>
                          <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                        </g>
                      </svg>
                    ) : (
                      " "
                    )}
                  </button>
                </div>
              </div>
              <div className={style["row"]}>
                <div
                  className={style["color-selector-item"]}
                  style={{ backgroundColor: "#7856ff" }}
                >
                  <button onClick={() => this.colorChange("voilet")}>
                    {this.state.color == "voilet" ? (
                      <svg viewBox="0 0 24 24" style={{ fill: "#fff" }}>
                        <g>
                          <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                        </g>
                      </svg>
                    ) : (
                      " "
                    )}
                  </button>
                </div>
                <div
                  className={style["color-selector-item"]}
                  style={{ backgroundColor: "#ff7a00" }}
                >
                  <button onClick={() => this.colorChange("orange")}>
                    {this.state.color == "orange" ? (
                      <svg viewBox="0 0 24 24" style={{ fill: "#fff" }}>
                        <g>
                          <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                        </g>
                      </svg>
                    ) : (
                      " "
                    )}
                  </button>
                </div>
                <div
                  className={style["color-selector-item"]}
                  style={{ backgroundColor: "#00ba7c" }}
                >
                  <button onClick={() => this.colorChange("green")}>
                    {this.state.color == "green" ? (
                      <svg viewBox="0 0 24 24" style={{ fill: "#fff" }}>
                        <g>
                          <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                        </g>
                      </svg>
                    ) : (
                      " "
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div className={style["body-item-background"]}>
              <span
                muted-text="true"
                style={{ fontSize: "small", fontWeight: 700 }}
              >
                Background
              </span>
            </div>
            <div className={style["body-item-background-selector"]}>
              <div
                className={
                  this.context.theme == "default"
                    ? style["body-item-background-selector-default-selected"]
                    : style["body-item-background-selector-default"]
                }
              >
                <button
                  onClick={() => {
                    this.context.theme == "default"
                      ? this.props.setTheme("dark")
                      : this.props.setTheme("default");
                  }}
                >
                  <div
                    className={
                      this.context.theme == "default"
                        ? style["default-circle-selected"]
                        : style["default-circle"]
                    }
                  >
                    {this.context.theme == "default" ? (
                      <svg viewBox="0 0 24 24">
                        <g>
                          <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                        </g>
                      </svg>
                    ) : (
                      " "
                    )}
                  </div>
                  <span>Default</span>
                </button>
              </div>
              <div
                className={
                  this.context.theme == "dark"
                    ? style["body-item-background-selector-dark-selected"]
                    : style["body-item-background-selector-dark"]
                }
              >
                <button
                  onClick={() => {
                    this.context.theme == "dark"
                      ? this.props.setTheme("default")
                      : this.props.setTheme("dark");
                  }}
                >
                  <div
                    className={
                      this.context.theme == "dark"
                        ? style["dark-circle-selected"]
                        : style["dark-circle"]
                    }
                  >
                    {this.context.theme == "dark" ? (
                      <svg viewBox="0 0 24 24">
                        <g>
                          <path d="M9 20c-.264 0-.52-.104-.707-.293l-4.785-4.785c-.39-.39-.39-1.023 0-1.414s1.023-.39 1.414 0l3.946 3.945L18.075 4.41c.32-.45.94-.558 1.395-.24.45.318.56.942.24 1.394L9.817 19.577c-.17.24-.438.395-.732.42-.028.002-.057.003-.085.003z"></path>
                        </g>
                      </svg>
                    ) : (
                      " "
                    )}
                  </div>
                  <span>Dark</span>
                </button>
              </div>
            </div>
            <button
              style={{
                width: "72px",
                height: "36px",
                borderRadius: "30px",
                backgroundColor: "var(--accent-color)",
                marginTop: "20px",
                color: "white",
                fontWeight: "700",
              }}
              onClick={this.props.close}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    );
  }
}
