import { useState } from 'react';
import { Exit } from './Exit';
import { NoNotes } from './NoNotes';
import { OneNote } from './OneNote';
import './HomePage/home.css';
import { SearchIcon } from '@primer/octicons-react'

// AGREGAR Iconos de libreria imagenes, add, search
export const Home = ({ user, setLoading }) => {
    const [showNewNote, setShowNewNote] = useState(false)
    const [noNotes, setNoNotes] = useState(true)
    const [stateError, setStateError] = useState(false)
    const [inputSearch, setInputSearch] = useState('')
    const [allNotes, setAllNotes] = useState([]);
    const [getFlag, setGetFlag] = useState(false);
    const newNote = () => {
        setNoNotes(false)
        setShowNewNote(true)
    };

    const handleInput = (e) => {
        setInputSearch(e.target.value)
    };
    
    let result = !inputSearch ? allNotes : allNotes.filter((note) => (note.description).toLowerCase().includes(inputSearch.toLowerCase()));
    console.log(result)

    return (
        <div className="home">
            <section className="searchAndCreateNote">
                <div className="buttonAndSearch">
                    <button className='createNote' onClick={() => { newNote() }}>CREAR NOTA   +</button>
                    <input value={inputSearch} onChange={handleInput} className='search' placeholder="Busqueda..." type="text" />
                    <SearchIcon className='iconSearch' size={33} />
                </div>
                <section className="notes">
                    {showNewNote && <OneNote
                        setGetFlag={setGetFlag} getFlag={getFlag}
                        user={user} setStateError={setStateError} setLoading={setLoading} setAllNotes={setAllNotes} allNotes={allNotes} />}
                </section>
            </section>
            {noNotes && <NoNotes />}
            <Exit user={user}
                stateError={stateError}
            />

        </div>
    )
}