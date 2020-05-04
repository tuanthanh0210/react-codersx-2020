import React, { Component } from "react";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="go-back">
          <img
            width={24}
            src="https://image.flaticon.com/icons/svg/545/545680.svg"
            alt=""
          />
          <span>Go back</span>
        </div>

        <div className="logo">
          <img
            width={200}
            src="https://coders-x.com/images/logo@256.png"
            alt=""
          />
        </div>

        <div className="sign-up">
          <button>Sign up</button>
        </div>
      </div>
    );
  }
}

export default Header;
