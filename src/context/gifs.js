import React, { useState } from "react";
import PropTypes from "prop-types";

export const GifsContext = React.createContext();

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);


  return (
    <GifsContext.Provider value={{ gifs, setGifs }}>
      {children}
    </GifsContext.Provider>
  );
}

GifsContextProvider.propTypes = {
  children: PropTypes.node,
};

export const GifsContextConsumer = GifsContext.Consumer;
