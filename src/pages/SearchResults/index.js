import React, { useEffect, useRef, useCallback } from "react";
import Spinner from "components/spinner";
import ListOfGifs from "components/listOfGifs";
import { useGifs } from "hooks/useGifs";
import useNearScreen from "hooks/useNearScreen";
import debounce from "just-debounce-it";
import SearchForm from "components/SearchForm";
import { Helmet } from "react-helmet";

export default function SearchResults({ match }) {
  const { keyword, rating } = match.params;


  const { loading, gifs, setPage } = useGifs({ keyword,rating });

  const title = gifs ? `${gifs.length} resultados de ${keyword}` : "";

  const externalRef = useRef();
  const { isNearScreen } = useNearScreen({
    externalRef: loading ? null : externalRef,
    once: false,
  });

  const debounceNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 2000),
    []
  );

  useEffect(function () {
    // if (isNearScreen) setPage(prevPage => prevPage + 1)
    if (isNearScreen) debounceNextPage();
  });

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={title} />
            <meta name="rating" content="General" />
          </Helmet>
          <header className="o-header">
            <SearchForm initialKeyword={keyword} initialRating={rating}/>
          </header>
          <div className="App-wrapper">
            <h3 className="App-title">{decodeURI(keyword)}</h3>
            <ListOfGifs gifs={gifs} />
            <div data-testid="visor" ref={externalRef} />
          </div>
        </>
      )}
    </>
  );
}
