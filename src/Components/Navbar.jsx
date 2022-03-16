import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div style={{ display: "flex", padding: "0.5" }}>
        <h1 style={{ marginTop: "1rem", marginLeft: "1rem", color: "blue" }}>
          Home
        </h1>
        <h3
          style={{ marginLeft: "1.5rem", marginTop: "1.5rem", color: "blue" }}
        >
          About Us{" "}
        </h3>
        <h3
          style={{ marginLeft: "1.5rem", marginTop: "1.5rem", color: "blue" }}
        >
          Movies{" "}
        </h3>
      </div>
    );
  }
}
