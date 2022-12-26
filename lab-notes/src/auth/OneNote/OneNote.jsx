import { useState } from 'react'
import './oneNote.css'
import { Tag } from '../tag/Tag';

export const OneNote = ({ showError, note, tag, deleteLabel, showLabel, user, showOldNote, showNewNote, setNote,  getAllNotes,  newNoteArea}) => {

    const dateNote = new Date();
    const [newNote, setNewNote] = useState({
        uid: user.uid,
        date: dateNote,
        label: '',
        description: '',
        image: '',
    });
    // const [infoNote, setInfoNote] = useState([]);
    
    const handleTextTareaChange = (e) => {
        const { name, value } = e.target
        setNewNote((prevState) => ({ ...prevState, [name]: value }))
    };

    const handleNote = (e) => {
        const { name, value } = e.target
        setNote((prevState) => ({ ...prevState, [name]: value }))
    };

    const addNotes = async () => {
        if (newNote.description === '') {
           showError()
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
          deleteLabel()
            getAllNotes()
            newNoteArea()
            cancelNote()
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
    }

    const editNote = async () => {
        const config = {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(note)
        };
        await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes/${note.id}`, config)
        getAllNotes()
        newNoteArea()
    };

    const deleteNote = async () => {
        const config = {
            method: "DELETE",
            headers: { "Content-type": "application/json;charset=UTF-8" },
        };
        await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes/${note.id}`, config)
        // updateNotes(note.id)
        getAllNotes()
        newNoteArea()
    }

    return (
        <>
            <div className='contentNote'>
                {showNewNote && <textarea name='description' value={newNote.description} onChange={handleTextTareaChange} className="newNote" placeholder="Escribe tu nota...                    (=^･ｪ･^=)"></textarea>}
                {showOldNote && <textarea name='description' value={note.description} onChange={handleNote} className="newNote" ></textarea>}
                {tag && showNewNote &&<Tag note={note} handleTextTareaChange={handleTextTareaChange} />}
                {showOldNote && tag &&<Tag note={note} handleTextTareaChange={handleNote} value={note.description} />}
                <section className="menuButtonsNote">
                    {showNewNote  && <button onClick={() => addNotes()}>GUARDAR</button>}
                    {showOldNote &&  <button onClick={() => editNote()}>GUARDARR</button>}
                    <button onClick={() => showLabel()}>ETIQUETA</button>
                    {showNewNote && <button onClick={() => cancelNote()}>BORRAR</button> }
                    {showOldNote && <button onClick={() => deleteNote()}>ELIMINAR</button>} 
                </section>
            </div>
        </>
    )
};