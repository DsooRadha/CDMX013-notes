import { useState, useEffect } from 'react';
import { Exit } from '../exit/Exit';
import './home.css';
import { SearchIcon, PlusCircleIcon } from '@primer/octicons-react'
import { Notes } from '../Notes/Notes';
import { ShowMichi } from '../MichiKaren/ShowMichi';
import {AiOutlinePlus } from "react-icons/ai"


export const Home = ({ user }) => {

    const [allNotes, setAllNotes] = useState([]);
    const [showNewNote, setShowNewNote] = useState(true)
    const [stateError, setStateError] = useState(false);
    const [inputSearch, setInputSearch] = useState('');
    const [searchAllNotes, setSearchAllNotes] = useState([]);
    const [showOldNote, setShowOldNote] = useState(false);
    const [renderMichi, setRenderMichi]= useState(true)
   
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

    const newNoteArea = () => {
        setShowNewNote(true)
        setShowOldNote(false)
        setRenderMichi(false)
    };
    const changesTextArea = () => {
        getAllNotes()
        setShowNewNote(true)
        setShowOldNote(false)
    }
    const viewOldNote =()=>{
        setShowNewNote(false)
        setShowOldNote(true)
    }

   const hiddenError =()=>  setStateError(false) 

   const renderError =()=>  setStateError(true) 

    return (
        <div className="home">
            <section className="searchAndCreateNote">
                <div className="buttonAndSearch">
                    <button className='createNote' onClick={() => { newNoteArea() }}>CREAR NOTA <AiOutlinePlus size={18} /></button>
                    <input value={inputSearch} onChange={handleInput} className='search' placeholder="Busqueda..." type="text" />
                    <SearchIcon className='iconSearch' size={33} />
                </div>
                {allNotes.length === 0 && renderMichi ? <ShowMichi />:<Notes  hiddenError={hiddenError} renderError={renderError} 
                viewOldNote={viewOldNote} changesTextArea={changesTextArea} user={user} allNotes={allNotes} showNewNote={showNewNote} 
                showOldNote={showOldNote} />}
            </section>
          
            <Exit user={user} stateError={stateError} />
        </div>
    )
};