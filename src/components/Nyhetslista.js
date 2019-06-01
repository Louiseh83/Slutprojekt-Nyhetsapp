import React from 'react'; // Skrivs in för att appen ska fatta att React är en komponent som den ska använda.
import Nyhetsartikel from './Nyhetsartikel';


/* I det här fallet är Nyhetslista en funktion som ordnar koden i olika separata block eller moduler. 
Funktionen består av en samling satser och vad de ska göra. */
function Nyhetslista(props) { 
   return (<section className="grid">
      {props.minaArtiklar.map(function (item, index) { /* När man använder "map" får man två saker som map skickar in 
      till den funktionen som man skriver inuti "map". Man får själva föremålet (item) och (index) för föremålet. */
         return <Nyhetsartikel /* Med instruktionen return ber man om att bearbeta datan från nyhetsartiklarna och returnerar sedan dessa, 
         alltså nyhetsartiklarna.*/ 
          minArtikel={item} // minArtikel är attributet som man skickar in och så lägger man in en "item", dvs. själva objektet som också ska in.
          key={`artikel${index}`} /* För att React ska kunna hålla reda på artiklarna som finns i Nyhetslistan 
          så vill React att alla artiklar i Nyhetslistan ska ha en unik, i det här fallet en, nyckel. 
          För att vara säker på att det är en unik nyckel så lägger man till ordet 'artikel' framför. 
          Annars hade det bara blivit en siffra.*/ 
          />
      })}
      </section>); // Själva sektionen är en nyhetslista.
   }


export default Nyhetslista; /* För att man ska kunna importera Nyhetslistan 
till appen, som om det vore en vanlig HTML-tagg, så måste man exportera den så den går att komma åt */