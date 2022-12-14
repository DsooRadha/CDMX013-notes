import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';
import { app } from './firebase.js'

const providerGitHub = new GithubAuthProvider();
const db = getFirestore(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export const registerWithGoogle = () => {
    signInWithPopup(auth, provider)
        // .then((result) => {
        //     const credential = GoogleAuthProvider.credentialFromResult(result);
        //     const token = credential.accessToken;
        //     // const user = result.user;
        //     // console.log(':::::::::::::::USER.UID:::::::', user.uid)
        //     console.log(':::::::::::::::TOKEN', token)

        // }).catch((error) => {
        //     //     const errorCode = error.code;
        //     //     const errorMessage = error.message;
        //     //     const email = error.customData.email;
        //     //     const credential = GoogleAuthProvider.credentialFromError(error);
        //     //     console.log(':::::::::::::::errorCode:::::::', errorCode)
        //     //     console.log(':::::::::::::::errorMessage', errorMessage)
        //     //     console.log(':::::email', email)
        //     //     console.log(':::::credential', credential)
        //     console.log(error);
        // });

}

const authGitHub = getAuth();

export const registerGitHub = () => {
    signInWithPopup(authGitHub, providerGitHub)
    .then((result) => {
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

    }).catch((error) => {
       
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GithubAuthProvider.credentialFromError(error);

})
};