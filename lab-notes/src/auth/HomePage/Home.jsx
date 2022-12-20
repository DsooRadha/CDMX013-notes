import { useState, useEffect } from 'react';
import { Exit } from '../exit/Exit';
import { OneNote } from '../OneNote/OneNote';
import './home.css';
import { SearchIcon } from '@primer/octicons-react'
import { SmallTag } from '../tag/SmallTag';

export const Home = ({ user, setLoading }) => {

    const [allNotes, setAllNotes] = useState([]);
    const [showNewNote, setShowNewNote] = useState(true)
    // const [noNotes, setNoNotes] = useState(false)
    const [stateError, setStateError] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    // const [getFlag, setGetFlag] = useState(false);
    // const [viewNote, setViewNote] = useState(true);
    const [searchAllNotes, setSearchAllNotes] = useState([]);
    const [note, setNote] = useState({});
    const [showOldNote, setShowOldNote] = useState(false);


    const updateNotes = (noteId) => {
        setAllNotes(allNotes.filter((item) => item.id !== noteId))
    }

    const changesTextArea=() => {
        showNewNote(true)
        showOldNote(true)
    }

    const getAllNotes = async () => {
        const config = {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        };
        const response = await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes?uid=${user.uid}`, config)
        const allNotes = await response.json();
        setAllNotes(allNotes)
        setSearchAllNotes(allNotes)
    };

    useEffect(() => {
        getAllNotes()
    }, []);

    const newNoteArea = () => {
        setShowNewNote(true)
        setShowOldNote(false)
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

    const showNote = (item) => {
        setNote(item);
        setShowNewNote(false)
        setShowOldNote(true)
        // setInfoNote(item);
        // setViewNote(true);
        // item.label === '' ? setTag(false) : setTag(true)
        // setStateError(false)
    }

    return (
        <div className="home">
            <section className="searchAndCreateNote">

                <div className="buttonAndSearch">
                    <button className='createNote' onClick={() => { newNoteArea() }}>CREAR NOTA   +</button>
                    <input value={inputSearch} onChange={handleInput} className='search' placeholder="Busqueda..." type="text" />
                    <SearchIcon className='iconSearch' size={33} />
                </div>

                <section className="notes">
                    <nav className='allNotesRender'>
                        {allNotes.length > 0 && allNotes.map((item) =>
                            <button onClick={() => showNote(item)} className='petitNotes' key={item.id}>
                                <div className='textDescription'>{(item.description).slice(0, 14) + '...'}</div>
                                {item.label !== '' && <SmallTag item={item} />}
                            </button>
                        )};
                    </nav>
                    <OneNote changesTextArea={changesTextArea} getAllNotes={getAllNotes} setNote={setNote} showNewNote={showNewNote} note={note} user={user} updateNotes={updateNotes} showOldNote={showOldNote} />

                </section>
            </section>

            <Exit user={user} stateError={stateError} />
        </div>
    )
};