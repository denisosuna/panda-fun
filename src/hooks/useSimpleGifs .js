import { useEffect, useState, useContext } from "react";
import useGifsGlobal from "hooks/useGifsGlobal";
import { getSimpleGifs } from "services/giphy";

export function useSimpleGif({ id }) {
  const gifs = useGifsGlobal();
  const gifFromCache = gifs.find((element) => element.id == id);

  const [gif, setGif] = useState(gifFromCache);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!gif) {
      setLoading(true);
      getSimpleGifs({ id })
        .then((gif) => {
          setGif(gif);
          setLoading(false);
        })
        .catch(() => {
          setLoading(false);
          setIsError(true);
        });
    }
  }, [gif, id]);

  return { loading, isError, gif };
}
