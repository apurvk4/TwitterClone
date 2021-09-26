import { Component } from "react";
import Tweet from "../img/tweet.svg";
import style from "../Components/css/tweetbtn.module.css";
import Modal from "./Modal";
import TweetModal from "./TweetModal";
export default class TweetBtn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
    this.close = this.close.bind(this);
  }
  close() {
    this.setState({ showModal: false });
  }
  render() {
    return (
      <div className={style["container"]}>
        <button
          onClick={() => {
            this.state.showModal
              ? this.setState({ showModal: false })
              : this.setState({ showModal: true });
          }}
        >
          <Tweet />
        </button>
        {this.state.showModal ? (
          <Modal outsideclick="allow" close={this.close} darken={false}>
            <TweetModal ismodal={true} close={this.close} />
          </Modal>
        ) : (
          " "
        )}
      </div>
    );
  }
}
