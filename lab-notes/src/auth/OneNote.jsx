import { useState } from 'react'
import { GetNotes } from './GetNotes';
import './HomePage/oneNote.css'
import { Tag } from './Tag';

export const OneNote = ({ user, setStateError, setLoading }) => {

    const dateNote = new Date();
    const [note, setNote] = useState({
        uid: user.uid,
        date: dateNote,
        label: '',
        description: '',
        image: '',
    });
    const [getFlag, setGetFlag] = useState(false);
    const [showTag, setTag] = useState(false);
    const [infoNote, setInfoNote] = useState([]);
    const [viewNote, setViewNote] = useState(false);

    const handleTextTareaChange = (e) => {
        const { name, value } = e.target
        setNote((prevState) => ({ ...prevState, [name]: value }))
    };

    const handleNote = (e) => {
        const { name, value } = e.target
        setInfoNote((prevState) => ({ ...prevState, [name]: value }))
    };

    const showLabel = () => {
        setTag(true)
    };

    const addNotes = async () => {
        if (note.description === '') {
            console.log('esta nota esta vacia')
            setStateError(true)
        } else {

            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(note)
            };
            await fetch('https://639b6461d5141501975434d1.mockapi.io/notes', config);
            setTag(false)
            setStateError(false)
            cancelNote()
            // getAllNotes()
            setGetFlag(!getFlag)
        }
    };

    const cancelNote = () => {
        setNote({
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
            body: JSON.stringify(infoNote)
        };
        const response = await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes/${infoNote.id}`, config)
        const note = await response.json();
        setGetFlag(!getFlag)
        setViewNote(false)

    };

    const deleteNote = async () => {
        const config = {
            method: "DELETE",
            headers: { "Content-type": "application/json;charset=UTF-8" },
        };
        const response = await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes/${infoNote.id}`, config)
        setGetFlag(!getFlag)
        setViewNote(false)
    }

    return (
        <section className="newNoteArea">
            <GetNotes user={user} getFlag={getFlag} setLoading={setLoading} setInfoNote={setInfoNote} setViewNote={setViewNote} />
            <div className='contentNote'>
                {showTag && <Tag note={note} handleTextTareaChange={handleTextTareaChange} />}
                {viewNote ? <Tag note={infoNote} handleTextTareaChange={handleNote} /> : null}
                {!viewNote ? <textarea name='description' value={note.description} onChange={handleTextTareaChange} className="newNote" placeholder="Escribe tu nota...                    (=^･ｪ･^=)"></textarea>
                    : <textarea name='description' value={infoNote.description} onChange={handleNote} className="newNote" ></textarea>}
                <section className="menuButtonsNote">
                    {!viewNote ? <button onClick={() => addNotes()}>GUARDAR</button> : <button onClick={() => editNote()}>GUARDAR</button>}
                    <button onClick={() => showLabel()}>ETIQUETA</button>
                    {!viewNote ? <button onClick={() => cancelNote()}>BORRAR</button> : <button onClick={() => deleteNote(infoNote)}>ELIMINAR</button>}
                </section>
            </div>
        </section>
    )
};