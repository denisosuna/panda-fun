import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../context/auth";

const ProtectedRoute = ({ component: Component, user, ...rest }) => {
  const context = useContext(AuthContext);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (context.isLoggedIn) {
          return <Component {...rest} {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/",
                state: {
                  from: props.location,
                },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
