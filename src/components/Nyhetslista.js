import React from 'react';
import Nyhetsartikel from './Nyhetsartikel';


/* I det här fallet är Nyhetslista en funktion som ordnar koden i olika separata block eller moduler. 
Funktionen består av en samling satser och vad de ska göra. */
function Nyhetslista(props) { 
   return (<section className="grid">
      {props.minaArtiklar.map(function (item, index) {
         return <Nyhetsartikel // Man ber funktionen att bearbeta data och skicka tillbaka resultatet. 
          minArtikel={item} 
          key={`artikel${index}`}
          />
      })}
      </section>);
   }


export default Nyhetslista;