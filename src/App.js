import React, { Component } from 'react';
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import './App.css';
import Nyhetslista from './components/Nyhetslista'


const firebaseApp = firebase.initializeApp(firebaseConfig);


class App extends Component {
constructor(props) {
super(props);
this.state = {
articles: []};
}

componentDidMount() {
fetch("https://newsapi.org/v2/top-headlines?country=se&category=entertainment&apiKey=b61b0d0a09194ae591b9f3253b0ac8e7")
.then(function (response) {
if (response.status !==200) {
throw Error( `status:${response.status}`);
}
//gör något med det som kom tillbaka
return response.json()
} ).then( jsondata => {
//gör något med json-objektet
this.setState({ articles: jsondata.articles })
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
              ? <p>Hello, {user.displayName}</p>
              : <p>Sign in here</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button> // När man klickar på ett objekt
              : <button onClick={signInWithGoogle}>Sign in with Google</button> // När man klickar på ett objekt
          }
  </div>
<h1>The latest News</h1>
<p className="underrubrik">Här kan du läsa dagsfärska nyheter dygnet runt</p>
</header>


<Nyhetslista 
minaArtiklar={this.state.articles} /><footer className="App-footer">
Designed by: Louise Hjelström - 2019
</footer>
</div>


);
}
}
// Ett vanligt meddelande
const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(App);