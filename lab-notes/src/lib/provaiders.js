import {
    getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,
    signOut, onAuthStateChanged
} from "firebase/auth";
import { app } from './firebase.js'

const providerGitHub = new GithubAuthProvider();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const registerWithGoogle = () => signInWithPopup(auth, provider)
// .then((setLoading) => { setLoading(true) });

export const registerGitHub = () => signInWithPopup(auth, providerGitHub);

export const loginStateUser = (setUser) => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('Existe un usuario activo');
            setUser(user)
            // setLoading(true)
        } else {
            console.log('no existe usuario activo');
            setUser(null)
            // setLoading(true)
        }
    })
};

export const singOutSession = () => signOut(auth);