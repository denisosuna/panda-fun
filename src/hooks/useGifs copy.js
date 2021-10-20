import { useEffect, useState, useContext } from "react";
import { GifsContext } from "context/gifs";
import { getGifs } from "services/giphy";

const INITIAL_PAGE = 0;

export function useGifs({ keyword } = { keyword: null }) {
  const { gifs, setGifs } = useContext(GifsContext);
  const [loading, setLoading] = useState(false);
  const [loadingNextPage, setLoadingNextPage] = useState(false);
  const [page, setPage] = useState(INITIAL_PAGE);
  let keywordToUSe = keyword || localStorage.lastKeyword || "random";

  useEffect(() => {
    setLoading(true);
    //Recuperamos la keyword del localStorage
    getGifs({ keyword: keywordToUSe }).then((gifs) => {
      setGifs(gifs);
      setLoading(false);
      localStorage.lastKeyword = keywordToUSe;
    });
  }, [keyword]);

  useEffect(() => {
    if (page !== INITIAL_PAGE) 
    setLoadingNextPage(true);
    getGifs({ keyword: keywordToUSe, page }).then(nextgifs => {
      setGifs(gifs.concat(nextgifs));
      setLoadingNextPage(false);
      localStorage.lastKeyword = keywordToUSe;
    });
  }, [keyword, page]);

  return { loading, loadingNextPage, gifs, setPage };
}
