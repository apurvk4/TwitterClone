import { Component } from "react";
import Tweet from "../Components/Tweet";
import ThemeContext from "../utils/themeContext";
import TweetModal from "../Components/TweetModal";
import TweetBtn from "../Components/TweetBtn";
let arr = new Array(20).fill(0);
arr = arr.map(() => {
  return Math.floor(Math.random() * 10000);
});
export default class Homepage extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <>
        {this.props.Width >= 500 ? (
          <TweetModal ismodal={false} />
        ) : (
          <TweetBtn />
        )}
        {arr.map((e) => {
          return <Tweet key={e} id={e} />;
        })}
      </>
    );
  }
}
