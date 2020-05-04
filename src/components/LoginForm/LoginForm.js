import React, { Component } from "react";
import "./LoginForm.scss";

class LoginForm extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {}
  // }
  render() {
    const { email } = this.props;
    return (
      <div className="LoginForm">
        <h1>Sign in</h1>
        <form action="">
          <div className="form-control username">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              name="name"
              placeholder="Le Tuan Thanh"
              value={email}
            />
          </div>

          <div className="form-control password">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="******************"
            />
          </div>

          <button>Sign in to Coders-X</button>
        </form>
        <div className="keep-me">
          <input id="keepme" type="checkbox" />
          <label htmlFor="keepme">Keep me signed in</label>
        </div>

        <div className="forgot">
          <a href="http://google.com">
            <p>Forgot username ?</p>
          </a>
          <a href="http://google.com">
            <p>Forgot password ?</p>
          </a>
        </div>
      </div>
    );
  }
}

export default LoginForm;
