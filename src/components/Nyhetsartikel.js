import React from 'react'; // Det här skriver man in för att appen ska förstå att React är en komponent som ska användas.

/* Här är det Nyhetsartikeln som är en funktion som ser till att koden hamnar i skilda block eller moduler. 
Den här funktionen består av olika satser och de används på olika sätt. */
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
      /* Inuti article-taggen finns alla nyhetsartiklar med rubriker, bilder, 
      beskrivningar samt en länk där man kan läsa mer ingående om de olika artiklarna. */
    ); 
    }


export default Nyhetsartikel; /* För att man ska kunna importera Nyhetsartikeln 
till appen, så måste man exportera den så den går att komma åt */