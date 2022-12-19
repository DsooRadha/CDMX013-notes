import {
    getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider,
    signOut, onAuthStateChanged
} from "firebase/auth";
import { app } from './firebase.js'

const providerGitHub = new GithubAuthProvider();
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export const registerWithGoogle = (allNotes, setHideMichi, setCatchProvaider) => signInWithPopup(auth, provider)
 .then(() => { 
    setCatchProvaider(false)
    // if(allNotes!== 0){
    //     setHideMichi(true)
    //  } 
    });

export const registerGitHub = (setCatchProvaider) => signInWithPopup(auth, providerGitHub)
.then(()=>{
    setCatchProvaider(false)
})
.catch(() => {
    setCatchProvaider(true)
  });;

export const loginStateUser = (setUser, setLoading) => {
    setLoading(true)
    onAuthStateChanged(auth, (user) => {
        if (user) {
            console.log('Existe un usuario activo');
            setUser(user)
            setLoading(false)
        } else {
            console.log('no existe usuario activo');
            setUser(null)
            setLoading(false)
        }
    })
};

export const singOutSession = () => signOut(auth);