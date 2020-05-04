import React from "react";
import "./styles.css";
import Header from "./components/Header/Header";
import LoginForm from "./components/LoginForm/LoginForm";

export default function App() {
  return (
    <div className="App">
      <Header />
      <LoginForm email={"tuanthanh@coders-x.com"} />
    </div>
  );
}
