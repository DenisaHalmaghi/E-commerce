import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { collection, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

import { initializeApp } from "firebase/app"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOKuqOiYvc7WYa50v_o-h0Q-80lhspTa4",
  authDomain: "crwn-db-c1182.firebaseapp.com",
  projectId: "crwn-db-c1182",
  storageBucket: "crwn-db-c1182.appspot.com",
  messagingSenderId: "91736291175",
  appId: "1:91736291175:web:1e818807bfe6ec8856e1c2"
};

// Initialize Firebase
initializeApp( firebaseConfig );

export const auth = getAuth()
export const db = getFirestore();
// export const firestore = firebase.auth()

const provider = new GoogleAuthProvider();

provider.setCustomParameters( { prompt: 'select_account' } )

export const signInWithGoogle = () => signInWithPopup( auth, provider )
  .then( ( result ) =>
  {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult( result );
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // ...
  } ).catch( ( error ) =>
  {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError( error );
    // ...
  } );

export const storeUserIfNotAlreadyStored = async ( user, extraInformation ) =>
{
  if ( !user ) return

  const userRef = doc( db, "users", user.uid );
  const docSnap = await getDoc( userRef );

  if ( !docSnap.exists() )
  {
    await setDoc( userRef, {
      name: user.displayName,
      email: user.email,
      createdAt: new Date(),
      ...extraInformation
    } );
  }

  return userRef
}
