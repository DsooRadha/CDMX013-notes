import {
    getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,
    signOut, onAuthStateChanged
} from "firebase/auth";
import { app } from './firebase.js'

const providerGitHub = new GithubAuthProvider();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const registerWithGoogle = () => {
    signInWithPopup(auth, provider)
    .then((result) => {
        console.log(result.user)
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        const user = result.user
        // const name= result.user.displayName
        // console.log(':::::::::::::::USER.UID:::::::', user)
        // console.log(':::::::::::::::TOKEN', token)
        // console.log(':::::::::::::::NAME', name)
        // sessionStorage.name = name
        sessionStorage.uid = user.uid
        // sessionStorage.token = token
        // window.localStorage.setItem('user', JSON.stringify(user))
        // window.localStorage.getItem('user')
        return user

    }).catch((error) => {
        console.log(error);
    });

}

export const registerGitHub = () => {
    signInWithPopup(auth, providerGitHub)
        .then((result) => {
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user.uid;
            console.log(token, user, 'ACA')
        }).catch((error) => {

            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GithubAuthProvider.credentialFromError(error);
            console.log(errorCode, errorMessage, email, credential, 'ERROR')

        })
};

export const loginStateUser = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            const uid = user.uid;
            console.log('uid', uid);
            const email = user.email;
            console.log('Existe un usuario activo', email);

        } else {
            console.log('no existe usuario activo');
        }
    });
};

export const singOutSession = () => signOut(auth);