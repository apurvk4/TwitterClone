import { Component } from "react";
import Deadpool from "../img/deadpool.svg";
import Rt from "../img/rt.svg";
import Reply from "../img/reply.svg";
import Like from "../img/like.svg";
import Share from "../img/share.svg";
import Verified from "../img/verified.svg";
import Dots from "../img/three-dots.svg";
import style from "../Components/css/tweet.module.css";
import global from "../global.module.css";
import ThemeContext from "../utils/themeContext";
import TweetOptions from "./TweetOptions";
export default class Tweet extends Component {
  state = {
    showOptions: false,
  };
  close = () => {
    this.state.showOptions
      ? this.setState({ showOptions: false })
      : this.setState({ showOptions: true });
  };
  static contextType = ThemeContext;
  render() {
    return (
      <div className={style["tweet-card"]} key={this.props.id}>
        <div className={style["tweet-top"]}>
          <Rt
            height="16px"
            width="16px"
            alt="retweet"
            className={
              this.context.theme == "default" ? global.bgDefault : global.bgDark
            }
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
              <button
                style={{ all: "unset" }}
                id="tweet-options"
                onClick={this.close}
              >
                <Dots
                  className={style["tweet-body-main-info-dots"]}
                  height="16px"
                  width="16px"
                  alt="get more info about this tweet"
                />
                {this.state.showOptions ? (
                  <TweetOptions
                    username="lorem_ipsum"
                    closeModal={this.close}
                  />
                ) : (
                  " "
                )}
              </button>
            </div>
            <div className={style["tweet-body-main-body"]}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              nulla doloremque a debitis, natus, architecto obcaecati qui iste
              vero fugiat sit esse magni perferendis dicta?
            </div>
            <div className={style["tweet-body-main-engage"]}>
              <div className={style["btn-group"]}>
                <Reply data-reply />
                <span>120</span>
              </div>
              <div className={style["btn-group"]}>
                <Rt data-rt />
                <span>10</span>
              </div>
              <div className={style["btn-group"]}>
                <Like data-like />
                <span>1000</span>
              </div>
              <div className={style["btn-group"]}>
                <Share data-share />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
