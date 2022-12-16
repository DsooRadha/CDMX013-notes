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
    const [getFlag, setGetFlag] = useState(false)
    const [showTag, setTag] = useState(false)

    const handleTextTareaChange = (e) => {
        const { name, value } = e.target
        setNote((prevState) => ({ ...prevState, [name]: value }))
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

    return (
        <section className="newNoteArea">
            <GetNotes user={user} getFlag={getFlag} setLoading={setLoading} />
            <div className='contentNote'>
                {showTag && <Tag note={note} handleTextTareaChange={handleTextTareaChange} />}
                <textarea name='description' value={note.description} onChange={handleTextTareaChange} className="newNote" placeholder="Escribe tu nota...                    (=^･ｪ･^=)"></textarea>
                <section className="menuButtonsNote">
                    <button onClick={() => addNotes()}>GUARDAR</button>
                    <button onClick={() => showLabel()}>ETIQUETA</button>
                    <button onClick={() => cancelNote()}>BORRAR</button>

                </section>
            </div>
        </section>
    )
}