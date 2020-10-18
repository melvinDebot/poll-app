import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyA_6JHGwr-fqVGDYEj8NsZKx_nr-m9E64U",
  authDomain: "poll-app-1e7e4.firebaseapp.com",
  databaseURL: "https://poll-app-1e7e4.firebaseio.com",
  storageBucket: "poll-app-1e7e4.appspot.com",
};

export const firebaseApp = firebase.initializeApp(config);