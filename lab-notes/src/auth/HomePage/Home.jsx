import { useState, useEffect } from 'react';
import { Exit } from '../exit/Exit';
import { SmallTag } from '../tag/SmallTag';
import { Tag } from '../tag/Tag';
import './home.css';
import { SearchIcon } from '@primer/octicons-react'

export const Home = ({ user }) => {

    const [allNotes, setAllNotes] = useState([]);
    const [showNewNote, setShowNewNote] = useState(true)
    const [stateError, setStateError] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [searchAllNotes, setSearchAllNotes] = useState([]);
    const [note, setNote] = useState({});
    const [showOldNote, setShowOldNote] = useState(false);
    const [tag, setTag] = useState(false);
    const dateNote = new Date();
    const [newNote, setNewNote] = useState({
        uid: user.uid,
        date: dateNote,
        label: '',
        description: '',
        image: '',
    });

    const newNoteArea = () => {
        setShowNewNote(true)
        setShowOldNote(false)
    };

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
        item.label === '' ? setTag(false) : setTag(true)
        setStateError(false)
    }
    const showLabel = () => {
        setTag(true)
    };

    const deleteNote = async () => {
        const config = {
            method: "DELETE",
            headers: { "Content-type": "application/json;charset=UTF-8" },
        };
        await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes/${note.id}`, config)
        getAllNotes()
        setShowNewNote(true)
        setShowOldNote(false)
    }

    const editNote = async () => {
        const config = {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(note)
        };
        await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes/${note.id}`, config)
        getAllNotes()
        setShowNewNote(true)
        setShowOldNote(false)
    };

    const addNotes = async () => {
        if (newNote.description === '') {
            setStateError(true)
        } else {
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newNote)
            };
            await fetch('https://639b6461d5141501975434d1.mockapi.io/notes', config);
            setTag(false)
            getAllNotes()
            setShowNewNote(true)
            setShowOldNote(false)
            cancelNote()
            setStateError(false)
        }
    };

    const cancelNote = () => {
        setNewNote({
            uid: user.uid,
            date: dateNote,
            label: '',
            description: '',
            image: '',
        });
    };

    const handleTextTareaChange = (e) => {
        const { name, value } = e.target
        setNewNote((prevState) => ({ ...prevState, [name]: value }))
    };

    const handleNote = (e) => {
        const { name, value } = e.target
        setNote((prevState) => ({ ...prevState, [name]: value }))
    };

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
                    <div className='contentNote'>
                        {showNewNote && <textarea name='description' value={newNote.description} onChange={handleTextTareaChange} className="newNote" placeholder="Escribe tu nota...                    (=^･ｪ･^=)"></textarea>}
                        {showOldNote && <textarea name='description' value={note.description} onChange={handleNote} className="newNote" ></textarea>}
                        {tag && showNewNote && <Tag note={note} handleTextTareaChange={handleTextTareaChange} />}
                        {showOldNote && tag && <Tag note={note} handleTextTareaChange={handleNote} value={note.description} />}
                        <section className="menuButtonsNote">
                            {showNewNote && <button onClick={() => addNotes()}>GUARDAR</button>}
                            {showOldNote && <button onClick={() => editNote()}>GUARDARR</button>}
                            <button onClick={() => showLabel()}>ETIQUETA</button>
                            {showNewNote && <button onClick={() => cancelNote()}>BORRAR</button>}
                            {showOldNote && <button onClick={() => deleteNote()}>ELIMINAR</button>}
                        </section>
                    </div>
                </section>
            </section>
            <Exit user={user} stateError={stateError} />
        </div>
    )
};