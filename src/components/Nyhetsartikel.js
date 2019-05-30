import React from 'react';

function Nyhetsartikel (props){
    return (
      <div className="grid"> 
            <article>
        <img src={props.minArtikel.urlToImage} className="bilder" alt=""></img>
      <h2 className="rubriker">{props.minArtikel.title}</h2>
      <p>{props.minArtikel.description}</p>
      <a href={props.minArtikel.url}  target="">Läs mer..</a>
        </article> 
        </div>
      // Inuti article-taggen finns alla nyhetsartiklar.  
    ); 
    }


export default Nyhetsartikel;