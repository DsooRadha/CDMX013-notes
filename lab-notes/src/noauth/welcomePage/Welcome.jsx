import { useNavigate } from "react-router-dom";
import { Logo } from '../../elements/Logo'
import './welcome.css'
import { registerWithGoogle, registerGitHub} from '../../lib/provaiders.js'
import {user, setUser} from '../../App'

export const Welcome = () => {
    const navigate = useNavigate();

    const gitHub = () => {
        registerGitHub()
        navigate('/home')
    }

    return (
        <div className='welcome'>
            <section className='left'>
                <Logo />
                <img className='catDescription' src="https://user-images.githubusercontent.com/101679628/207448832-9fda47e3-caa4-4c85-a6f1-8844e9ce5e9c.png" alt="Descripcion de la app por un gatito" />
            </section>
            <section className='rigth'>
                <button className='googleBtn' onClick={() =>  registerWithGoogle()}>Continua con Google</button>
                <button className='gitHubBtn' onClick={() => gitHub()}>Continua con GitHub</button>
            </section>
        </div>
    )
}