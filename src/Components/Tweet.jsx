import { Component } from "react";
import Deadpool from "../img/deadpool.svg";
import Rt from "../img/rt.svg";
import Reply from "../img/reply.svg";
import Like from "../img/like.svg";
import Share from "../img/share.svg";
import Verified from "../img/verified.svg";
import Dots from "../img/three-dots.svg";
import style from "../Components/tweet.module.css";
import global from "../global.module.css";
import ThemeContext from "./themeContext";
export default class Tweet extends Component {
  constructor(props) {
    super(props);
  }
  static contextType = ThemeContext;
  render() {
    return (
      <div className={style["tweet-card"]} key={this.props.key}>
        <div className={style["tweet-top"]}>
          <Rt
            height="16px"
            width="16px"
            alt="retweet"
            className={this.context.theme ? global.bgDefault : global.bgDark}
          />
          <span style={{ marginLeft: "10px" }}>Someone Retweeted</span>
        </div>
        <div className={style["tweet-body"]}>
          <div className={style["tweet-body-left"]}>
            <div className={style["tweet-body-left-dp"]}>
              <Deadpool
                height="46px"
                width="46px"
                alt="dp"
                style={{ fill: "red" }}
              />
            </div>
            {/* <div className={style["tweet-body-left-line"]}></div> */}
          </div>
          <div className={style["tweet-body-main"]}>
            <div className={style["tweet-body-main-info"]}>
              <div className={style["tweet-body-main-info-user"]}>
                <span data-name>
                  Lorem Ipsum
                  <Verified
                    height="16px"
                    width="16px"
                    className={global.verified}
                    data-verified
                  />
                </span>
                <span muted-text="true">@lorem_ipsum</span>
                <span muted-text="true">10m</span>
              </div>
              <Dots
                className={style["tweet-body-main-info-dots"]}
                height="16px"
                width="16px"
                alt="get more info about this tweet"
              />
            </div>
            <div className={style["tweet-body-main-body"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              nulla doloremque a debitis, natus, architecto obcaecati qui iste
              vero fugiat sit esse magni perferendis dicta?
            </div>
            <div className={style["tweet-body-main-engage"]}>
              <span>
                <Reply height="16px" width="16px" data-reply />
                120k
              </span>
              <span>
                <Rt height="16px" width="16px" data-rt />
                2m
              </span>
              <span>
                <Like height="16px" width="16px" data-like />
                5m
              </span>
              <span>
                <Share height="16px" width="16px" data-share />
                10m
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
