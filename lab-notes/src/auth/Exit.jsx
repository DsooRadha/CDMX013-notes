import { Logo } from '../elements/Logo';
import { singOutSession } from '../lib/provaiders.js';
import './HomePage/home.css'

export const Exit=()=>{
    return(
        <section className="exit">
        <Logo />
        <img className='rauuuul' src="https://user-images.githubusercontent.com/101679628/207461293-5a998ad6-88f5-49f7-a2e3-3f8bededc9a5.png" alt="rauuul" />
        <img className='exitCat' src="https://user-images.githubusercontent.com/101679628/207461215-199698cd-95e5-4a78-90a5-f2e592e64295.png" alt="exitCat" />
        <button onClick={() => singOutSession()}>SALIR</button>
    </section>
    )
}