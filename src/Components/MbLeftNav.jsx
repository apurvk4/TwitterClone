import { Component } from "react";
import Deadpool from "../img/deadpool.svg";
import global from "../global.module.css";
import style from "../Components/css/mbleftnav.module.css";
import ThemeContext from "../utils/themeContext";
import DisplayModal from "./DisplayModal";
import Modal from "./Modal";
export default class MbLeftNav extends Component {
  state = {
    showModal: false,
  };
  close = () => {
    this.state.showModal
      ? this.setState({ showModal: false })
      : this.setState({ showModal: true });
  };
  static contextType = ThemeContext;
  render() {
    return (
      <div className={style["nav"]}>
        <div className={style["leftnav"]}>
          <div className={style["navItemRowHeader"]} data-header="true">
            <div style={{ fontWeight: "700" }}>Account Info</div>
            <button style={{ all: "unset" }} onClick={this.props.close}>
              &#10006;
            </button>
          </div>
          <div className={style["navWrapper"]}>
            <div className={style["navItemCol"]}>
              <div
                className={style["navItemRowBetween"]}
                style={{ paddingTop: "10px" }}
              >
                <div
                  className={style["navCol"]}
                  style={{ borderBottom: "0px", paddingTop: "0px" }}
                >
                  <Deadpool
                    width="32px"
                    height="32px"
                    style={{ fill: "red" }}
                  />
                  <span style={{ fontWeight: 700 }}>lorem ipsum</span>
                  <span muted-text="true">@lorem_ipsum</span>
                </div>
                <span
                  style={{
                    pading: "5px",
                    borderRadius: "50%",
                    border: "1px solid var(--default-border)",
                  }}
                >
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
                      <path d="M19.75 11H13V4.25c0-.553-.447-1-1-1s-1 .447-1 1V11H4.25c-.553 0-1 .447-1 1s.447 1 1 1H11v6.75c0 .553.447 1 1 1s1-.447 1-1V13h6.75c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                    </g>
                  </svg>
                </span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
                  30 <span muted-text="true">Following</span>
                </span>
                <span>
                  2 <span muted-text="true">Followers</span>
                </span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="18.75px"
                    width="18.75px"
                    className={
                      this.context.theme == "default"
                        ? global["bgDefault"]
                        : global["bgDark"]
                    }
                  >
                    <g>
                      <path d="M12 11.816c1.355 0 2.872-.15 3.84-1.256.814-.93 1.078-2.368.806-4.392-.38-2.825-2.117-4.512-4.646-4.512S7.734 3.343 7.354 6.17c-.272 2.022-.008 3.46.806 4.39.968 1.107 2.485 1.256 3.84 1.256zM8.84 6.368c.162-1.2.787-3.212 3.16-3.212s2.998 2.013 3.16 3.212c.207 1.55.057 2.627-.45 3.205-.455.52-1.266.743-2.71.743s-2.255-.223-2.71-.743c-.507-.578-.657-1.656-.45-3.205zm11.44 12.868c-.877-3.526-4.282-5.99-8.28-5.99s-7.403 2.464-8.28 5.99c-.172.692-.028 1.4.395 1.94.408.52 1.04.82 1.733.82h12.304c.693 0 1.325-.3 1.733-.82.424-.54.567-1.247.394-1.94zm-1.576 1.016c-.126.16-.316.246-.552.246H5.848c-.235 0-.426-.085-.552-.246-.137-.174-.18-.412-.12-.654.71-2.855 3.517-4.85 6.824-4.85s6.114 1.994 6.824 4.85c.06.242.017.48-.12.654z"></path>
                    </g>
                  </svg>
                </span>
                <span>Profile</span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="18.75px"
                    width="18.75px"
                    className={
                      this.context.theme == "default"
                        ? global["bgDefault"]
                        : global["bgDark"]
                    }
                  >
                    <g>
                      <path d="M19.75 22H4.25C3.01 22 2 20.99 2 19.75V4.25C2 3.01 3.01 2 4.25 2h15.5C20.99 2 22 3.01 22 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM4.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h15.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H4.25z"></path>
                      <path d="M17 8.64H7c-.414 0-.75-.337-.75-.75s.336-.75.75-.75h10c.414 0 .75.335.75.75s-.336.75-.75.75zm0 4.11H7c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h10c.414 0 .75.336.75.75s-.336.75-.75.75zm-5 4.11H7c-.414 0-.75-.335-.75-.75s.336-.75.75-.75h5c.414 0 .75.337.75.75s-.336.75-.75.75z"></path>
                    </g>
                  </svg>
                </span>
                <span>Lists</span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
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
                      <path d="M12.003 23.274c-.083 0-.167-.014-.248-.042-.3-.105-.502-.39-.502-.708v-4.14c-2.08-.172-4.013-1.066-5.506-2.56-3.45-3.45-3.45-9.062 0-12.51s9.062-3.45 12.512 0c3.096 3.097 3.45 8.07.82 11.565l-6.49 8.112c-.146.182-.363.282-.587.282zm0-21.05c-1.882 0-3.763.717-5.195 2.15-2.864 2.863-2.864 7.524 0 10.39 1.388 1.387 3.233 2.15 5.195 2.15.414 0 .75.337.75.75v2.72l5.142-6.425c2.17-2.885 1.876-7.014-.696-9.587-1.434-1.43-3.316-2.148-5.197-2.148z"></path>
                      <path d="M15.55 8.7h-7.1c-.413 0-.75-.337-.75-.75s.337-.75.75-.75h7.1c.413 0 .75.335.75.75s-.337.75-.75.75zm-3.05 3.238H8.45c-.413 0-.75-.336-.75-.75s.337-.75.75-.75h4.05c.414 0 .75.336.75.75s-.336.75-.75.75z"></path>
                    </g>
                  </svg>
                </span>
                <span>Topic</span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
                  <svg
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                    height="18.75px"
                    width="18.75px"
                    className={
                      this.context.theme == "default"
                        ? global["bgDefault"]
                        : global["bgDark"]
                    }
                  >
                    <g>
                      <path d="M19.9 23.5c-.157 0-.312-.05-.442-.144L12 17.928l-7.458 5.43c-.228.164-.53.19-.782.06-.25-.127-.41-.385-.41-.667V5.6c0-1.24 1.01-2.25 2.25-2.25h12.798c1.24 0 2.25 1.01 2.25 2.25v17.15c0 .282-.158.54-.41.668-.106.055-.223.082-.34.082zM12 16.25c.155 0 .31.048.44.144l6.71 4.883V5.6c0-.412-.337-.75-.75-.75H5.6c-.413 0-.75.338-.75.75v15.677l6.71-4.883c.13-.096.285-.144.44-.144z"></path>
                    </g>
                  </svg>
                </span>
                <span>Bookmarks</span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
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
                      <path d="M8.98 22.698c-.103 0-.205-.02-.302-.063-.31-.135-.49-.46-.44-.794l1.228-8.527H6.542c-.22 0-.43-.098-.573-.266-.144-.17-.204-.393-.167-.61L7.49 2.5c.062-.36.373-.625.74-.625h6.81c.23 0 .447.105.59.285.142.18.194.415.14.64l-1.446 6.075H19c.29 0 .553.166.678.428.124.262.087.57-.096.796L9.562 22.42c-.146.18-.362.276-.583.276zM7.43 11.812h2.903c.218 0 .425.095.567.26.142.164.206.382.175.598l-.966 6.7 7.313-8.995h-4.05c-.228 0-.445-.105-.588-.285-.142-.18-.194-.415-.14-.64l1.446-6.075H8.864L7.43 11.812z"></path>
                    </g>
                  </svg>
                </span>
                <span>Moments</span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
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
                      <path d="M14 11.25H6c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm0-4H6c-.414 0-.75.336-.75.75s.336.75.75.75h8c.414 0 .75-.336.75-.75s-.336-.75-.75-.75zm-3.25 8H6c-.414 0-.75.336-.75.75s.336.75.75.75h4.75c.414 0 .75-.336.75-.75s-.336-.75-.75-.75z"></path>
                      <path d="M21.5 11.25h-3.25v-7C18.25 3.01 17.24 2 16 2H4C2.76 2 1.75 3.01 1.75 4.25v15.5C1.75 20.99 2.76 22 4 22h15.5c1.517 0 2.75-1.233 2.75-2.75V12c0-.414-.336-.75-.75-.75zm-18.25 8.5V4.25c0-.413.337-.75.75-.75h12c.413 0 .75.337.75.75v15c0 .452.12.873.315 1.25H4c-.413 0-.75-.337-.75-.75zm16.25.75c-.69 0-1.25-.56-1.25-1.25v-6.5h2.5v6.5c0 .69-.56 1.25-1.25 1.25z"></path>
                    </g>
                  </svg>
                </span>
                <span>Newsletters</span>
              </div>
            </div>
            <div className={style["navItemCol"]}>
              <div className={style["navItemRow"]}>
                <span>
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
                      <path d="M20.75 22H3.25C2.01 22 1 20.99 1 19.75V4.25C1 3.01 2.01 2 3.25 2h17.5C21.99 2 23 3.01 23 4.25v15.5c0 1.24-1.01 2.25-2.25 2.25zM3.25 3.5c-.414 0-.75.337-.75.75v15.5c0 .413.336.75.75.75h17.5c.414 0 .75-.337.75-.75V4.25c0-.413-.336-.75-.75-.75H3.25z"></path>
                      <path d="M16.758 6.982h-5.806c-.414 0-.75.336-.75.75s.336.75.75.75h3.995L6.92 16.508c-.292.293-.292.768 0 1.06.147.147.34.22.53.22s.385-.072.53-.22l8.027-8.025v3.995c0 .414.336.75.75.75s.75-.336.75-.75V7.732c0-.414-.335-.75-.75-.75z"></path>
                    </g>
                  </svg>
                </span>
                <span>Twitter Ads</span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
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
                      <path d="M12 22c-.414 0-.75-.336-.75-.75V2.75c0-.414.336-.75.75-.75s.75.336.75.75v18.5c0 .414-.336.75-.75.75zm5.14 0c-.415 0-.75-.336-.75-.75V7.89c0-.415.335-.75.75-.75s.75.335.75.75v13.36c0 .414-.337.75-.75.75zM6.86 22c-.413 0-.75-.336-.75-.75V10.973c0-.414.337-.75.75-.75s.75.336.75.75V21.25c0 .414-.335.75-.75.75z"></path>
                    </g>
                  </svg>
                </span>
                <span>Analytics</span>
              </div>
            </div>
            <div className={style["navItemCol"]}>
              <div className={style["navItemRow"]}>
                <span>
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
                      <path d="M12 8.21c-2.09 0-3.79 1.7-3.79 3.79s1.7 3.79 3.79 3.79 3.79-1.7 3.79-3.79-1.7-3.79-3.79-3.79zm0 6.08c-1.262 0-2.29-1.026-2.29-2.29S10.74 9.71 12 9.71s2.29 1.026 2.29 2.29-1.028 2.29-2.29 2.29z"></path>
                      <path d="M12.36 22.375h-.722c-1.183 0-2.154-.888-2.262-2.064l-.014-.147c-.025-.287-.207-.533-.472-.644-.286-.12-.582-.065-.798.115l-.116.097c-.868.725-2.253.663-3.06-.14l-.51-.51c-.836-.84-.896-2.154-.14-3.06l.098-.118c.186-.222.23-.523.122-.787-.11-.272-.358-.454-.646-.48l-.15-.014c-1.18-.107-2.067-1.08-2.067-2.262v-.722c0-1.183.888-2.154 2.064-2.262l.156-.014c.285-.025.53-.207.642-.473.11-.27.065-.573-.12-.795l-.094-.116c-.757-.908-.698-2.223.137-3.06l.512-.512c.804-.804 2.188-.865 3.06-.14l.116.098c.218.184.528.23.79.122.27-.112.452-.358.477-.643l.014-.153c.107-1.18 1.08-2.066 2.262-2.066h.722c1.183 0 2.154.888 2.262 2.064l.014.156c.025.285.206.53.472.64.277.117.58.062.794-.117l.12-.102c.867-.723 2.254-.662 3.06.14l.51.512c.836.838.896 2.153.14 3.06l-.1.118c-.188.22-.234.522-.123.788.112.27.36.45.646.478l.152.014c1.18.107 2.067 1.08 2.067 2.262v.723c0 1.183-.888 2.154-2.064 2.262l-.155.014c-.284.024-.53.205-.64.47-.113.272-.067.574.117.795l.1.12c.756.905.696 2.22-.14 3.06l-.51.51c-.807.804-2.19.864-3.06.14l-.115-.096c-.217-.183-.53-.23-.79-.122-.273.114-.455.36-.48.646l-.014.15c-.107 1.173-1.08 2.06-2.262 2.06zm-3.773-4.42c.3 0 .593.06.87.175.79.328 1.324 1.054 1.4 1.896l.014.147c.037.4.367.7.77.7h.722c.4 0 .73-.3.768-.7l.014-.148c.076-.842.61-1.567 1.392-1.892.793-.33 1.696-.182 2.333.35l.113.094c.178.148.366.18.493.18.206 0 .4-.08.546-.227l.51-.51c.284-.284.305-.73.048-1.038l-.1-.12c-.542-.65-.677-1.54-.352-2.323.326-.79 1.052-1.32 1.894-1.397l.155-.014c.397-.037.7-.367.7-.77v-.722c0-.4-.303-.73-.702-.768l-.152-.014c-.846-.078-1.57-.61-1.895-1.393-.326-.788-.19-1.678.353-2.327l.1-.118c.257-.31.236-.756-.048-1.04l-.51-.51c-.146-.147-.34-.227-.546-.227-.127 0-.315.032-.492.18l-.12.1c-.634.528-1.55.67-2.322.354-.788-.327-1.32-1.052-1.397-1.896l-.014-.155c-.035-.397-.365-.7-.767-.7h-.723c-.4 0-.73.303-.768.702l-.014.152c-.076.843-.608 1.568-1.39 1.893-.787.326-1.693.183-2.33-.35l-.118-.096c-.18-.15-.368-.18-.495-.18-.206 0-.4.08-.546.226l-.512.51c-.282.284-.303.73-.046 1.038l.1.118c.54.653.677 1.544.352 2.325-.327.788-1.052 1.32-1.895 1.397l-.156.014c-.397.037-.7.367-.7.77v.722c0 .4.303.73.702.768l.15.014c.848.078 1.573.612 1.897 1.396.325.786.19 1.675-.353 2.325l-.096.115c-.26.31-.238.756.046 1.04l.51.51c.146.147.34.227.546.227.127 0 .315-.03.492-.18l.116-.096c.406-.336.923-.524 1.453-.524z"></path>
                    </g>
                  </svg>
                </span>
                <span>Settings and privacy</span>
              </div>
              <div className={style["navItemRow"]}>
                <span>
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
                      <path d="M12.025 22.75c-5.928 0-10.75-4.822-10.75-10.75S6.098 1.25 12.025 1.25 22.775 6.072 22.775 12s-4.822 10.75-10.75 10.75zm0-20c-5.1 0-9.25 4.15-9.25 9.25s4.15 9.25 9.25 9.25 9.25-4.15 9.25-9.25-4.15-9.25-9.25-9.25z"></path>
                      <path d="M13.064 17.47c0-.616-.498-1.114-1.114-1.114-.616 0-1.114.498-1.114 1.114 0 .615.498 1.114 1.114 1.114.616 0 1.114-.5 1.114-1.114zm3.081-7.528c0-2.312-1.882-4.194-4.194-4.194-2.312 0-4.194 1.882-4.194 4.194 0 .414.336.75.75.75s.75-.336.75-.75c0-1.485 1.21-2.694 2.695-2.694 1.486 0 2.695 1.21 2.695 2.694 0 1.486-1.21 2.695-2.694 2.695-.413 0-.75.336-.75.75v1.137c0 .414.337.75.75.75s.75-.336.75-.75v-.463c1.955-.354 3.445-2.06 3.445-4.118z"></path>
                    </g>
                  </svg>
                </span>
                <span>Help center</span>
              </div>
            </div>
            <div className={style["navItemCol"]}>
              <div
                className={style["navItemRowBetween"]}
                style={{ paddingTop: "0px", alignItems: "center" }}
              >
                <div
                  className={style["navItemRow"]}
                  style={{ marginLeft: "0px", paddingTop: "0px" }}
                >
                  <span>
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
                        <path d="M20.602 17.158l-7.85-5.546V2c0-.418-.295-.75-.76-.752-1.705 0-3.41.417-4.935 1.206C1.793 5.18-.27 11.68 2.454 16.944c1.91 3.688 5.672 5.805 9.564 5.805 1.663 0 3.35-.39 4.925-1.205 1.527-.79 2.854-1.947 3.84-3.343.238-.338.157-.807-.18-1.045zm-4.348 3.056c-4.53 2.346-10.122.57-12.468-3.96-2.345-4.53-.57-10.122 3.96-12.468 1.11-.575 2.27-.92 3.505-1.004V12c0 .253.126.476.318.612l7.52 5.313c-.782.94-1.726 1.715-2.833 2.29zm5.408-4.88c-.064 0-.13-.007-.195-.025-.4-.11-.637-.52-.53-.92.175-.655.28-1.328.307-2.004.018-.414.376-.736.78-.718.415.016.736.366.72.78-.034.786-.154 1.57-.358 2.33-.09.334-.393.555-.724.555zm-.327-6.17c-.302 0-.586-.184-.7-.482-.243-.633-.555-1.24-.928-1.8-.23-.346-.135-.812.21-1.04.345-.23.81-.136 1.04.21.434.653.797 1.357 1.08 2.093.147.387-.047.82-.434.97-.088.033-.178.05-.268.05zm-3.888-4.8c-.14 0-.282-.04-.408-.12-.57-.37-1.18-.677-1.813-.913-.388-.143-.585-.575-.44-.963.145-.388.578-.585.965-.44.736.275 1.443.63 2.103 1.06.348.225.446.69.22 1.037-.143.22-.384.34-.63.34z"></path>
                      </g>
                    </svg>
                  </span>
                  <span>Data saver</span>
                </div>
                <div style={{ paddingTop: "0px" }}>
                  <label htmlFor="switch">
                    Toggle
                    <input type="checkbox" id={style["switch"]} />
                  </label>
                </div>
              </div>
              <div
                className={style["navItemRow"]}
                style={{ paddingTop: "0px" }}
              >
                <button
                  style={{ all: "unset" }}
                  onClick={() => {
                    this.state.showModal
                      ? this.setState({ showModal: false })
                      : this.setState({ showModal: true });
                  }}
                >
                  <span>
                    <svg
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      style={{
                        width: "18.75px",
                        height: "18.75px",
                      }}
                      className={
                        this.context.theme == "default"
                          ? global["bgDefault"]
                          : global["bgDark"]
                      }
                    >
                      <g>
                        <path d="M15.692 11.205l6.383-7.216c.45-.45.45-1.18 0-1.628-.45-.45-1.178-.45-1.627 0l-7.232 6.402s.782.106 1.595.93c.548.558.882 1.51.882 1.51z"></path>
                        <path d="M17.45 22.28H3.673c-1.148 0-2.083-.946-2.083-2.11V7.926c0-1.165.934-2.112 2.082-2.112h5.836c.414 0 .75.336.75.75s-.336.75-.75.75H3.672c-.32 0-.583.274-.583.612V20.17c0 .336.26.61.582.61h13.78c.32 0 .583-.273.583-.61v-6.28c0-.415.336-.75.75-.75s.75.335.75.75v6.28c0 1.163-.934 2.11-2.084 2.11z"></path>
                      </g>
                    </svg>
                    <svg
                      viewBox="0 0 24 24"
                      height="18.75px"
                      width="18.75px"
                      style={{
                        transform: "translate(-18.75px,0px)",
                        fill: "var(--accent-color)",
                      }}
                    >
                      <g>
                        <path d="M8.18 16.99c-.19.154-.476.032-.504-.21-.137-1.214-.234-4.053 1.483-5.943.908-1 3.02-1.52 4.475-.198s1.14 3.473.23 4.473c-2.07 2.15-3.428.058-5.686 1.878z"></path>
                      </g>
                    </svg>
                  </span>
                  <span>Display</span>
                </button>
              </div>
            </div>
            <div className={style["navItemCol"]}>
              <div className={style["navItemRow"]}>
                <span>Log out</span>
              </div>
            </div>
          </div>
        </div>
        {this.state.showModal ? (
          <Modal outsideclick="allow" darken={true} close={this.close}>
            <DisplayModal setTheme={this.props.setTheme} close={this.close} />
          </Modal>
        ) : (
          " "
        )}
      </div>
    );
  }
}