import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "./NASA.png";
import Settings from "./settings.png";
import Font1 from "./21592_Kidprint.ttf";

class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar fixed-top navbar-dark">
        <Link className="navbar-brand" to="/">
            <img className="settings" src={Settings} />
        </Link>
        <div className="title" style={{fontFamily: {Font1}}}>Welcome<br />
        (Child's Name)</div>
        <div>
            <img className="logo" src={Logo}/>
        </div>
      </nav>
    );
  }
}

export default Nav;
