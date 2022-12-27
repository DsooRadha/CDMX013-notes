import { useState } from 'react';
import { SmallTag } from '../tag/SmallTag';
import { Tag } from '../tag/Tag';
import { Images } from '../Images/Images';

export const Notes = ({ allNotes, user, showNewNote, showOldNote, changesTextArea, viewOldNote, renderError, hiddenError }) => {
    const [tag, setTag] = useState(false);
    const [urlFiles, setUrlFiles] = useState('')
    const dateNote = new Date();
    const [newNote, setNewNote] = useState({
        uid: user.uid,
        date: dateNote,
        label: '',
        description: '',
        image: urlFiles,
    });
    const [modalAddImages, setModalAddImages] = useState(false)
    const [note, setNote] = useState({});

    const showNote = (item) => {
        setNote(item);
        viewOldNote()
        item.label === '' ? setTag(false) : setTag(true)
        hiddenError()
    };

    const deleteNote = async () => {
        const config = {
            method: "DELETE",
            headers: { "Content-type": "application/json;charset=UTF-8" },
        };
        await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes/${note.id}`, config)
        changesTextArea()
        setTag(false)
    }

    const editNote = async () => {
        const config = {
            method: "PUT",
            headers: { "Content-type": "application/json;charset=UTF-8" },
            body: JSON.stringify(note)
        };
        await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes/${note.id}`, config)
        changesTextArea()
        setTag(false)
    };

    const addNotes = async () => {
        if (newNote.description === '') {
           renderError()
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
            changesTextArea()
            cancelNote()
            hiddenError()
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
        setTag(false)
    };

    const showLabel = () => setTag(!tag);

    const handleTextTareaChange = (e) => {
        const { name, value } = e.target
        setNewNote((prevState) => ({ ...prevState, [name]: value }))
    };

    const handleNote = (e) => {
        const { name, value } = e.target
        setNote((prevState) => ({ ...prevState, [name]: value }))
    };

    const showModal = () => {
        setModalAddImages(true)
    };

    const hiddenModal = () => {
        setModalAddImages(false)
    };

    return (
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
                    <button onClick={() => showModal()} >IMAGENES</button>
                    <button onClick={() => showLabel()}>ETIQUETA</button>
                    {modalAddImages && <Images setUrlFiles={setUrlFiles} hiddenModal={hiddenModal} />}
                    {showNewNote && <button onClick={() => cancelNote()}>BORRAR</button>}
                    {showOldNote && <button onClick={() => deleteNote()}>ELIMINAR</button>}
                </section>
            </div>
        </section>
    )
}