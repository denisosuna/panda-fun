import React, { useState } from "react";
import PropTypes from "prop-types";

export const GifsContext = React.createContext();

export function GifsContextProvider({ children }) {
  const [gifs, setGifs] = useState([]);
/*
  const setGifs = (valor) => {
    setGif(valor);
    if (valor) {
      localStorage.Gifs = JSON.stringify(valor);
    }
  };

  const gifs = gif.length > 0 ? gif : JSON.parse(localStorage.Gifs);
*/



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
