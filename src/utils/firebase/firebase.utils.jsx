import { initializeApp  } from 'firebase/app'
import { getAuth,
        signInWithRedirect,
        signInWithPopup,
        GoogleAuthProvider,
        createUserWithEmailAndPassword } from 'firebase/auth'

import {
    getFirestore,
    doc,
    getDoc,
    setDoc
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBxAzs5ii9PoQ3PsRlwZa55Zt0Xx8gX5QM",
    authDomain: "crwn-clothing-c170f.firebaseapp.com",
    projectId: "crwn-clothing-c170f",
    storageBucket: "crwn-clothing-c170f.appspot.com",
    messagingSenderId: "454231061990",
    appId: "1:454231061990:web:52aae0f6425a0d474b5227"
  };

  // Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth =  async (
    userAuth, 
    additionalInformation = {}
    ) => {

    if(!userAuth) return ;

    const userDocRef = doc(db, 'users', userAuth.uid);

    // console.log(userDocRef)

    const userSanpshot = await getDoc(userDocRef);

    // console.log(userSanpshot.exists())

    if(!userSanpshot.exists()){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
      }catch(error){
        console.log('error creating the user ', error.message)
      }
    }

    return userDocRef
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}