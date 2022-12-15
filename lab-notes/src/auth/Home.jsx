import { useState } from 'react';
import { Exit } from './Exit';
import { NoNotes } from './NoNotes';
import { OneNote } from './OneNote';
import './HomePage/home.css';

export const Home = ({ user }) => {
    const [showNewNote, setShowNewNote] = useState(false)
    const[noNotes, SetNoNotes]=useState(true)
    //dos funciones crear nota y otra de usuario
    console.log(user);

const newNote =()=>{

}

    return (
        <div className="home">
            <section className="searchAndCreateNote">
                <div className="buttonAndSearch">
                    <button>CREAR NOTA +</button>
                    <input className='search' type="text" />
                </div>
                <section className="notes">
                    <OneNote />
                    {/* <div className='showNote'></div> */}
                </section>
            </section>

            <Exit />
            <NoNotes />
        </div>
    )
}