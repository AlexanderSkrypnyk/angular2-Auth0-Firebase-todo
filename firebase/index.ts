import { AngularFireModule, AuthMethods } from 'angularfire2';


const firebaseConfig = {
    apiKey: "AIzaSyBZVIB2HebHMihkXkgSWoJcQhlzWsC9bkc",
    authDomain: "users-list-ab973.firebaseapp.com",
    databaseURL: "https://users-list-ab973.firebaseio.com",
    storageBucket: "users-list-ab973.appspot.com"
};

const firebaseAuthConfig = {
    method: AuthMethods.Popup,
    remember: 'default'
};


export const FirebaseModule = AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig);
