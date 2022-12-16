import { useState } from 'react';
import { Exit } from './Exit';
import { NoNotes } from './NoNotes';
import { OneNote } from './OneNote';
import './HomePage/home.css';

    // AGREGAR Iconos de libreria imagenes, add, search
export const Home = ({ user, setLoading }) => {
    const [showNewNote, setShowNewNote] = useState(false)
    const [noNotes, setNoNotes] = useState(true)
    const [stateError, setStateError] = useState(false)

    const newNote = () => {
        setNoNotes(false)
        setShowNewNote(true)
    };

    return (
        <div className="home">
            <section className="searchAndCreateNote">
                <div className="buttonAndSearch">
                    <button onClick={() => { newNote() }}>CREAR NOTA   +</button>
                    <input className='search' type="text" />
                </div>
                <section className="notes">
                    {showNewNote && <OneNote user={user} setStateError={setStateError} setLoading={setLoading} />}
                </section>
            </section>
            {noNotes && <NoNotes />}
            <Exit user={user}
                stateError={stateError}
            />

        </div>
    )
}