
import React from 'react'
import Gif from '../gif'
import styles from "./style.module.scss";

export default function ListOfGifs ({gifs}) {
  return <div className={styles.ListOfGifs}>
    {
      gifs.map(({id, title, url}) =>
        <Gif
          id={id}
          key={id}
          title={title}
          url={url}
        />
      )
    }
  </div>
}