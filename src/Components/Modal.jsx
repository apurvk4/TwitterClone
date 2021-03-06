import { Component } from "react";
import dom from "react-dom";
import global from "../global.module.css";
const modalRoot = document.getElementById("modal-root");
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }
  componentDidMount() {
    if (this.props.darken) {
      this.el.classList.add(global["overlay"]);
    } else {
      this.el.classList.add(global["overlay-noBg"]);
    }
    modalRoot.appendChild(this.el);
    if (this.props.outsideclick == "allow") {
      this.el.addEventListener("click", (e) => {
        if (e.currentTarget == e.target) {
          this.props.close();
        }
        e.stopPropagation();
      });
    }
  }
  componentDidUpdate() {
    if (this.props.darken) {
      this.el.classList.add(global["overlay"]);
    } else {
      this.el.classList.add(global["overlay-noBg"]);
    }
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
    this.el.removeEventListener("click", (e) => {
      if (e.currentTarget == e.target) {
        this.props.close();
      }
    });
  }
  render() {
    return dom.createPortal(this.props.children, this.el);
  }
}
