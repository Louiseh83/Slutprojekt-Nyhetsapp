import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import './App.css';
import Nyhetslista from './components/Nyhetslista' /* Man skriver ./ där . betyder att man börjar i den mappen man står i. 
/ betyder att man vill gå ner i en annan mapp. */


const firebaseApp = firebase.initializeApp(firebaseConfig);

                // Component är en färdig class som har sin egen constructor. 
class App extends Component { /* En class är en speciell typ av objekt. 
  I det här fallet är det App som är ett objekt.
  Alla objekt kan, förutom att ha data i sig som kallas för properties, 
  även ha ett antal funktioner. 
  När den har funktioner i sig så kallar man det för metoder.*/
constructor(props) { /* Constructor bygger objektet, i det här fallet Appen,
  med alla komponenter som den innehåller, samt all data (props)*/ 
super(props); // Kör den constructorn som finns i components.
this.state = { // State är tillståndet för just den här komponenten eftersom man skriver this.state.
articles: []}; // I det här fallet är det Articles som är komponenten.
}

componentDidMount() { /* Den här funktionen innebär att när appen är färdig då ska den här funktionen köras och det är då man kan hämta data ifrån nätet. 
  Den här funktionen behöver ingen "return" för det man gör är att hämta data och sen uppdaterar man "State". */ 
fetch("https://newsapi.org/v2/top-headlines?country=se&category=entertainment&apiKey=b61b0d0a09194ae591b9f3253b0ac8e7")
/* Med fetch-api som man använder för att hämta data på nätet så får man ingen data från början, 
utan man får vänta och se ifall man får tillbaka någon data överhuvudtaget och då får man se om det man fick isåfall var 
det som vi faktiskt ville ha. Man kallar det för ett "promise", ett löfte om att man får någon data, 
men man kan inte garantera vad det blir. Man kan låtsas att det funkar och sedan ta hand om eventuella fel som uppstår ifall det inte funkar. */
.then(function (response) { /* När man har gjort en förfrågan från fetch-api och fått någon form av data tillbaka, då vill man göra någonting med den datan, 
  då skriver man in .then och sedan vill man ha en funktion som gör något med det första datat som kommer tillbaka, 
  så då skriver man in (function(response) */
if (response.status !==200) {
throw Error( `status:${response.status}`);
}

return response.json() // Man gör något med den datan som kommer tillbaka.
} ).then( jsondata => { // Gör något med json-objektet
this.setState({ articles: jsondata.articles }) /* Den här funktionen, setState, anropas med ett objekt, 
sen uppdaterar den det som ligger i State med det som ligger i det objektet som vi skickar in, 
i det här fallet jsondata.articles. */
}).catch(error =>{ 
this.setState({ 
articles: [{
urlToImage: "fejk.jpg",
description: "Något gick fel. $(error.message)",
}]
});
})
}

render() {
  const {
    user,
    signOut,
    signInWithGoogle,
  } = this.props;
return (
<div className="App">
<header className="App-header">
  <div>
  {
            user
              ? <p>Hello, {user.displayName}</p> // När du är inloggad visas ditt namn på skärmen
              : <p>Sign in here</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button> // En knapp som visar att man kan logga ut när man klickar på den
              : <button onClick={signInWithGoogle}>Sign in with Google</button> // En knapp som visar att du kan logga in med Google när du klickar på den
          }
  </div>
<h1>The latest News</h1>
<p className="underrubrik">Här kan du läsa dagsfärska nyheter dygnet runt</p>
</header>


<Nyhetslista /* minaArtiklar={this.state.articles} innebär att man skapar ett eget attribut som kallas för Nyhetslista, 
och så skickar man ner innehållet som ligger i state, dvs Articles.*/
minaArtiklar={this.state.articles} /><footer className="App-footer">
Designed by: Louise Hjelström - 2019
</footer>
</div>


);
}
}

const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);