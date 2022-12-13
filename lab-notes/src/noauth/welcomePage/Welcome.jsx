import { Logo } from '../../elements/Logo'
import './welcome.css'

export const Welcome = () => {
    return (
        <div className='welcome'>
        <section className='left'>
            <Logo />
            <img className='catDescription' src="https://user-images.githubusercontent.com/101679628/207448832-9fda47e3-caa4-4c85-a6f1-8844e9ce5e9c.png" alt="Descripcion de la app por un gatito" />
        </section>
        <section className='rigth'>
            <button>Continua con Google</button>
        </section>
        </div>
    )
}