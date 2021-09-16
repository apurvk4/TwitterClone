import { Component } from "react";
import dom from "react-dom";
import global from "../global.module.css";
const modalRoot = document.getElementById("modal-root");
export default class Modal extends Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
    this.el.classList.add(global["overlay"]);
  }
  componentDidMount() {
    modalRoot.appendChild(this.el);
  }
  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  render() {
    return dom.createPortal(this.props.children, this.el);
  }
}
