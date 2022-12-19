import { useState } from 'react';
import { Exit } from './Exit';
import { NoNotes } from './NoNotes';
import { OneNote } from './OneNote';
import './HomePage/home.css';
import { SearchIcon } from '@primer/octicons-react'

// AGREGAR Iconos de libreria imagenes, add, search
export const Home = ({ user, setLoading, allNotes, setAllNotes, setHideMichi, hideMichi }) => {

    const [showNewNote, setShowNewNote] = useState(true)
    const [noNotes, setNoNotes] = useState(false)
    const [stateError, setStateError] = useState(false)
    const [inputSearch, setInputSearch] = useState('')

    const [getFlag, setGetFlag] = useState(false);
    const [viewNote, setViewNote] = useState(true);
    const [searchAllNotes, setSearchAllNotes] = useState([]);


    const newNote = () => {
        setHideMichi(true)
        setViewNote(false)
        setNoNotes(true)
    };

    const handleInput = (e) => {
        setInputSearch(e.target.value)
        search(e.target.value)
    };


    const search = (textSearch) => {
        const resultSearch = searchAllNotes.filter((note) => {
            if ((note.description).toLowerCase().includes(textSearch.toLowerCase())) {
                return note
            }
        });

        setAllNotes(resultSearch);
    };


    return (
        <div className="home">
            <section className="searchAndCreateNote">
                <div className="buttonAndSearch">
                    <button className='createNote' onClick={() => { newNote() }}>CREAR NOTA   +</button>
                    <input value={inputSearch} onChange={handleInput} className='search' placeholder="Busqueda..." type="text" />
                    {/* <button onClick={() => { search() }} >SEARCH</button> */}
                    <SearchIcon className='iconSearch' size={33} />
                </div>
                <section className="notes">
                    {(allNotes.length !== 0 || hideMichi) && <OneNote setSearchAllNotes={setSearchAllNotes} getFlag={getFlag} setGetFlag={setGetFlag} setNoNotes={setNoNotes} viewNote={viewNote} setShowNewNote={setShowNewNote} setViewNote={setViewNote} user={user} setStateError={setStateError} setLoading={setLoading} setAllNotes={setAllNotes} allNotes={allNotes} />}
                </section>
            </section>
            {allNotes.length === 0 && !hideMichi ? <NoNotes /> : null}
            <Exit user={user} stateError={stateError} />
        </div>
    )
};
