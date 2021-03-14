import React from "react";
import Gif from "components/gif";
import { useSimpleGif } from "hooks/useSimpleGifs ";
import Spinner from "components/spinner";
import { Redirect } from "react-router-dom";
import {Helmet} from 'react-helmet'

export default function Detail({ match }) {
  const { loading, isError, gif } = useSimpleGif({ id: match.params.id });
  const title = gif ? decodeURI(gif.title) : ''
  

  if (loading) {
    return (
      <>
        <Helmet>
          <title>Cargando...</title>
        </Helmet>
        <Spinner />
      </>
    )
  }
  if (isError) return <Redirect to="/404" />;
  if (!gif) return null;



  return (
    <>
      <Helmet>
        <title>{title} || Giffy</title>
      </Helmet>
      <h3 className="App-title">{decodeURI(gif.title)}</h3>
      <Gif {...gif} />
    </>
  );
}
