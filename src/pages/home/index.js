import React from "react";
import { useGifs } from "hooks/useGifs";
import ListOfGifs from "components/listOfGifs";
import Category from "components/Category";
import TreandingSeaches from "components/TrendingSearch";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function Home() {
  const { gifs } = useGifs();

  return (
    <>
      <Helmet>
        <title>Home | Panda Fun</title>
      </Helmet>
      <header className="o-header">
        <SearchForm />
      </header>
      <div className="App-wrapper">
        <div className="App-main">
          <div className="App-results">
            <h3 className="App-title">Última búsqueda</h3>
            <ListOfGifs gifs={gifs} />
          </div>
          <div className="App-category">
            <Category
              name="Mascotas"
              options={["Perros", "Gatos", "Hamster"]}
            />
            <TreandingSeaches />
          </div>
        </div>
      </div>
    </>
  );
}
