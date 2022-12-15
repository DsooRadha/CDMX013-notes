import { useState } from 'react';
import { Exit } from './Exit';
import { NoNotes } from './NoNotes';
import { OneNote } from './OneNote';
import './HomePage/home.css';

export const Home = ({ user }) => {
    const [showNewNote, setShowNewNote] = useState(false)
    const [noNotes, setNoNotes] = useState(true)
    // AGREGAR Iconos de libreria imagenes, add, search
    //dos funciones crear nota y otra de usuario

    console.log(user);

    const newNote = () => {
        setNoNotes(false)
        setShowNewNote(true)
    }

    return (
        <div className="home">
            <section className="searchAndCreateNote">
                <div className="buttonAndSearch">
                    <button onClick={() => { newNote() }}>CREAR NOTA   +</button>
                    <input className='search' type="text" />
                </div>
                <section className="notes">
                    {showNewNote && <OneNote />}
                </section>
            </section>

            {noNotes && <NoNotes />}
            <Exit />

        </div>
    )
}