import { Component } from "react";
import style from "../Components/rightNav.module.css";
import global from "../global.module.css";
import Dots from "../img/three-dots.svg";
import ThemeContext from "../Components/themeContext";
import Food from "../img/food.png";
import Deadpool from "../img/deadpool.svg";
import Verified from "../img/verified.svg";
export default class RightNav extends Component {
  constructor(props) {
    super(props);
  }
  componentWillUnmount() {
    console.log("done");
  }
  static contextType = ThemeContext;
  render() {
    return (
      <div className={style.Nav}>
        <div
          className={global.reactFlexWrapper}
          style={{ flexDirection: "column", flexBasis: "inherit" }}
        >
          <div className={style.Nav}>
            <div className={style.fixedNav}>
              <div className={style.fixedNavItem}>
                <ul style={{ listStyle: "none" }}>
                  <li>
                    {/* <div>
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        width="20px"
                        height="32px"
                        style={{
                          paddingLeft: "12px",
                          alignSelf: "center",
                          backgroundColor: "inherit",
                        }}
                      >
                        <g>
                          <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                        </g>
                      </svg>
                    </div> */}
                    <span
                      style={{
                        backgroundColor: "var(--default)",
                        paddingLeft: "7px",
                        paddingRight: "12px",
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </span>
                    <input
                      style={{ flexGrow: 3 }}
                      type="search"
                      placeholder="Search Twitter"
                    />
                  </li>
                </ul>
                <ul>
                  <li>what&apos;s happening</li>
                  <li>
                    <div className={style.story}>
                      <div className={style["story-text"]}>
                        <span muted-text="true">World . Last Night</span>
                        <span>
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Soluta, quibusdam.
                        </span>
                      </div>
                      <div className={style["story-img"]} dots="true">
                        <Dots
                          width="16px"
                          height="16px"
                          className={
                            this.context.theme == "default"
                              ? global.bgDefault
                              : global.bgDark
                          }
                        />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={style.story}>
                      <div className={style["story-text"]}>
                        <span muted-text="true">Food . Last Night</span>
                        <span>khali eating food</span>
                        <span data-hashtag>#food </span>
                      </div>
                      <div className={style["story-img"]}>
                        <img src={Food} width="65px" height="65px" alt="food" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={style.story}>
                      <div className={style["story-text"]}>
                        <span muted-text="true">Food . Last Night</span>
                        <span>khali eating food</span>
                        <span data-hashtag>#food </span>
                      </div>
                      <div className={style["story-img"]}>
                        <img src={Food} width="65px" height="65px" alt="food" />
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={style.story}>
                      <div className={style["story-text"]}>
                        <span muted-text="true">Food . Last Night</span>
                        <span>khali eating food</span>
                        <span data-hashtag>#food </span>
                      </div>
                      <div className={style["story-img"]}>
                        <img src={Food} width="65px" height="65px" alt="food" />
                      </div>
                    </div>
                  </li>
                  <li data-last="true">
                    <div className={style.story} data-last="true">
                      <div className={style["story-text"]} data-last>
                        Show More
                      </div>
                    </div>
                  </li>
                </ul>
                <ul>
                  <li>who to follow</li>
                  <li>
                    <div className={style["story"]}>
                      <div className={style["story-dp"]}>
                        <Deadpool
                          width="48px"
                          height="48px"
                          style={{ fill: "red" }}
                        />
                      </div>
                      <div className={style["story-text"]}>
                        <span
                          style={{ height: "fit-content", fontWeight: 700 }}
                        >
                          lorem ipsum
                          <Verified
                            width="16px"
                            height="16px"
                            className={global.verified}
                          />
                        </span>
                        <span
                          style={{ height: "fit-content" }}
                          muted-text="true"
                        >
                          @lorem_ipsum
                        </span>
                      </div>
                      <div className={style["story-img"]}>
                        <button
                          style={{
                            borderRadius: "30px",
                            width: "77px",
                            height: "32px",
                          }}
                          data-follow="follow"
                          onClick={(e) => {
                            let status =
                              e.currentTarget.getAttribute("data-follow");
                            if (status == "follow") {
                              e.currentTarget.setAttribute(
                                "data-follow",
                                "following"
                              );
                              e.currentTarget.innerHTML = "following";
                            } else {
                              e.currentTarget.setAttribute(
                                "data-follow",
                                "follow"
                              );
                              e.currentTarget.innerHTML = "follow";
                            }
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={style["story"]}>
                      <div className={style["story-dp"]}>
                        <Deadpool
                          width="48px"
                          height="48px"
                          style={{ fill: "red" }}
                        />
                      </div>
                      <div className={style["story-text"]}>
                        <span
                          style={{ height: "fit-content", fontWeight: 700 }}
                        >
                          lorem ipsum
                          <Verified
                            width="16px"
                            height="16px"
                            className={global.verified}
                          />
                        </span>
                        <span
                          style={{ height: "fit-content" }}
                          muted-text="true"
                        >
                          @lorem_ipsum
                        </span>
                      </div>
                      <div className={style["story-img"]}>
                        <button
                          style={{
                            borderRadius: "30px",
                            width: "77px",
                            height: "32px",
                          }}
                          data-follow="follow"
                          onClick={(e) => {
                            let status =
                              e.currentTarget.getAttribute("data-follow");
                            if (status == "follow") {
                              e.currentTarget.setAttribute(
                                "data-follow",
                                "following"
                              );
                              e.currentTarget.innerHTML = "following";
                            } else {
                              e.currentTarget.setAttribute(
                                "data-follow",
                                "follow"
                              );
                              e.currentTarget.innerHTML = "follow";
                            }
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={style["story"]}>
                      <div className={style["story-dp"]}>
                        <Deadpool
                          width="48px"
                          height="48px"
                          style={{ fill: "red" }}
                        />
                      </div>
                      <div className={style["story-text"]}>
                        <span
                          style={{ height: "fit-content", fontWeight: 700 }}
                        >
                          lorem ipsum
                          <Verified
                            width="16px"
                            height="16px"
                            className={global.verified}
                          />
                        </span>
                        <span
                          style={{ height: "fit-content" }}
                          muted-text="true"
                        >
                          @lorem_ipsum
                        </span>
                      </div>
                      <div className={style["story-img"]}>
                        <button
                          style={{
                            borderRadius: "30px",
                            width: "77px",
                            height: "32px",
                          }}
                          data-follow="follow"
                          onClick={(e) => {
                            let status =
                              e.currentTarget.getAttribute("data-follow");
                            if (status == "follow") {
                              e.currentTarget.setAttribute(
                                "data-follow",
                                "following"
                              );
                              e.currentTarget.innerHTML = "following";
                            } else {
                              e.currentTarget.setAttribute(
                                "data-follow",
                                "follow"
                              );
                              e.currentTarget.innerHTML = "follow";
                            }
                          }}
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className={style["story"]}>
                      <div className={style["story-dp"]}>
                        <Deadpool
                          width="48px"
                          height="48px"
                          style={{ fill: "red" }}
                        />
                      </div>
                      <div className={style["story-text"]}>
                        <span
                          style={{ height: "fit-content", fontWeight: 700 }}
                        >
                          lorem ipsum
                          <Verified
                            width="16px"
                            height="16px"
                            className={global.verified}
                          />
                        </span>
                        <span
                          style={{ height: "fit-content" }}
                          muted-text="true"
                        >
                          @lorem_ipsum
                        </span>
                      </div>
                      <div className={style["story-img"]}>
                        <button
                          style={{
                            borderRadius: "30px",
                            width: "77px",
                            height: "32px",
                          }}
                          onClick={(e) => {
                            let status =
                              e.currentTarget.getAttribute("data-follow");
                            if (status == "follow") {
                              e.currentTarget.setAttribute(
                                "data-follow",
                                "following"
                              );
                              e.currentTarget.innerHTML = "following";
                            } else {
                              e.currentTarget.setAttribute(
                                "data-follow",
                                "follow"
                              );
                              e.currentTarget.innerHTML = "follow";
                            }
                          }}
                          data-follow="follow"
                        >
                          Follow
                        </button>
                      </div>
                    </div>
                  </li>
                  <li data-last="true">
                    <div className={style.story} data-last="true">
                      <div className={style["story-text"]} data-last>
                        Show More
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
