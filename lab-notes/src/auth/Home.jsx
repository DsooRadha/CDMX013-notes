import { Logo } from '../elements/Logo'
import './HomePage/home.css'
import {singOutSession} from '../lib/provaiders.js'

export const Home =()=>{
    return(
        <div className="home">
            <section className="notes">
                <button>CREAR NOTA +</button>
                <div className='allNotes'></div>
            </section>
            <section className="noteAndSearch">
                <input className='search' type="text" />
                <div className='showNote'></div>
                </section>
            <section  className="exit">
                <Logo />
                <img className='rauuuul' src="https://user-images.githubusercontent.com/101679628/207461293-5a998ad6-88f5-49f7-a2e3-3f8bededc9a5.png" alt="rauuul" />
                <img className='exitCat' src="https://user-images.githubusercontent.com/101679628/207461215-199698cd-95e5-4a78-90a5-f2e592e64295.png" alt="exitCat" />
                <button onClick={()=>singOutSession()}>SALIR</button>
                </section>
        </div>
    )
}