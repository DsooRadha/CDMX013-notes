import { useNavigate } from "react-router-dom";
import { Logo } from '../../elements/Logo'
import './welcome.css'
import { registerWithGoogle, registerGitHub } from '../../lib/provaiders.js'

export const Welcome = (props) => {
    const { setUser } = props;
    const navigate = useNavigate();

    const google = () => {
        registerWithGoogle()
        setUser(true)
        navigate('/home')
    }

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
                <button className='googleBtn' onClick={() => google()}>Continua con Google</button>
                <button className='gitHubBtn' onClick={() => gitHub()}>Continua con GitHub</button>
            </section>
        </div>
    )
}