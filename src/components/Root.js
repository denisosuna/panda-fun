import React, { useContext } from "react";
import { AuthContext } from "../context/auth";
import PropTypes from "prop-types";

export default function Root(props) {
  const context = useContext(AuthContext);
  console.log(context);
  if (!context.authReady) {
    return <div>Loading...</div>;
  }
  return props.children;
}

Root.propTypes = {
  children: PropTypes.node,
};
