import { useContext } from "react";
import { GifsContext } from "context/gifs";


export default function useGifsGlobal() {
  return useContext(GifsContext).gifs;

}
