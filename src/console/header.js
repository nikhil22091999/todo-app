import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="headerText"
      >
        <a
          href="/"
          style={{
            marginLeft: "4%",
            textDecoration: "none",
            listStyle: "none",
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginTop: "1.5%",
          }}
        >
          Dashboard
        </a>
        <h2 className="nameHeader">Welcome, Nikhil</h2>
      </div>
    );
  }
}
