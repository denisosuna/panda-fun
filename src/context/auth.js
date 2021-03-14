import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { watchUserChange } from "services/firebase";

export const AuthContext = React.createContext();

export function AuthContextProvider(props) {
  const [user, setUser] = useState([]);
  const [authReady, setisAuthReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    watchUserChange((user) => {
      if (user) {
        setisAuthReady(true);
        setUser(user);
        setIsLoggedIn(true);
      } else {
        setisAuthReady(true);
        setIsLoggedIn(false);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, authReady, isLoggedIn }}>
      {props.children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node,
};

export const AuthContextConsumer = AuthContext.Consumer;
