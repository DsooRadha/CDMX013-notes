import {
    getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,
    signOut, onAuthStateChanged
} from "firebase/auth";
import { app } from './firebase.js'

const providerGitHub = new GithubAuthProvider();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const registerWithGoogle = (allNotes, setHideMichi) => signInWithPopup(auth, provider)
.then((setLoading) => { 
    if(allNotes!== 0){
        setHideMichi(true)
    } });

export const registerGitHub = (setMessageErrorLogin) => signInWithPopup(auth, providerGitHub)
.then(()=>{
    setMessageErrorLogin(false)
})
.catch(() => {
    setMessageErrorLogin(true)
  });;

export const loginStateUser = (setUser, setLoading) => {
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