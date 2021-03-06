import React from "react";
import "./style.css";
import PropTypes from "prop-types";
import logo from "./logo.png";
import { Link } from "react-router-dom";

export default function Layout(props) {
  return (
    <>
      <div className="App">
      <section className="App-content">
        <Link to="/">
          <figure className="App-logo">
            <img alt="Giffy logo" src={logo} />
          </figure>
        </Link>
        {props.children}
      </section>
      </div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};
