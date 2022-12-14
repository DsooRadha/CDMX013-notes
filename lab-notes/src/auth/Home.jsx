import { Exit } from './Exit'
import './HomePage/home.css'
import { NoNotes } from './NoNotes';


export const Home = ({user}) => {
//dos funciones crear nota y otra de usuario
console.log(user);
    return (
        <div className="home">
            <section className="searchAndCreateNote">
                <div className="buttonAndSearch">
                <button>CREAR NOTA +</button>
                <input className='search' type="text" />
                </div>
                <section className="notes">
               {/* <div className='allNotes'></div> */}
                {/* <div className='showNote'></div> */}
            </section>
            </section>
            
           <Exit />
           <NoNotes />
        </div>
    )
}