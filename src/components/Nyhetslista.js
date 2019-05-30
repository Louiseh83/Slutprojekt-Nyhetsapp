import React from 'react'; // Skrivs in för att appen ska fatta att React är en komponent som den ska använda.
import Nyhetsartikel from './Nyhetsartikel';


/* I det här fallet är Nyhetslista en funktion som ordnar koden i olika separata block eller moduler. 
Funktionen består av en samling satser och vad de ska göra. */
function Nyhetslista(props) { 
   return (<section className="grid">
      {props.minaArtiklar.map(function (item, index) {
         return <Nyhetsartikel // Man ber funktionen att bearbeta datan från nyhetsartiklarna och skickar sedan tillbaka dessa. 
          minArtikel={item} 
          key={`artikel${index}`}
          />
      })}
      </section>); // Själva sektionen är en nyhetslista.
   }


export default Nyhetslista; /* För att man ska kunna importera Nyhetslistan 
till appen, som om det vore en vanlig HTML-tagg, så måste man exportera den så den går att komma åt */