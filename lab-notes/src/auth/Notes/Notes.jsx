import { useState } from 'react';
import { SmallTag } from '../tag/SmallTag';
import { Tag } from '../tag/Tag';
import { ImageModal } from '../ImagesModal/ImageModal';
import './notes.css'
import { ImageIcon, TagIcon, TrashIcon, PaintbrushIcon } from '@primer/octicons-react'
import { AiOutlineFontSize, AiOutlineSave, AiTwotoneSave, AiOutlineClear } from "react-icons/ai"

export const Notes = ({ allNotes, user, showNewNote, showOldNote, changesTextArea, viewOldNote, renderError, hiddenError }) => {

    const [tag, setTag] = useState(false);
    const [modalAddImages, setModalAddImages] = useState(false)
    const [urlFiles, setUrlFiles] = useState([]);
    const dateNote = new Date();
    const [newNote, setNewNote] = useState({
        uid: user.uid,
        date: dateNote,
        label: '',
        description: '',
        images: urlFiles,
        typography: 'normal'
    });
    const [note, setNote] = useState({});
    const [active, setActive] = useState(false);
    const [typography, setTypography] = useState(false);

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
            console.log(urlFiles,'::::dentro de addNotes')
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({...newNote, images:urlFiles})
            };
            await fetch('https://639b6461d5141501975434d1.mockapi.io/notes', config);
            setTag(false)
            changesTextArea()
            cancelNote()
            hiddenError()
            setTypography(false)
        }
    };

    const cancelNote = () => {
        setNewNote({
            uid: user.uid,
            date: dateNote,
            label: '',
            description: '',
            image: [],
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

    const hiddenModal = () => setModalAddImages(false);
    const showModal = () => setModalAddImages(true);
    const changesColorTextArea = () => setActive(!active);

    const changesTypography = () => {
        setNewNote((prevState) => ({ ...prevState, typography: 'italic' }))
        setTypography(!typography)
    }

  
    
    return (
        <section className="notes">
            <aside className='allNotesRender'>
                {allNotes.length !== 0 && allNotes.map((item) =>
                    <button onClick={() => showNote(item)} className='petitNotes' key={item.id}>
                        <div className='textDescription' style={{ fontStyle: item.typography !== 'normal' ? 'italic' : null }}>{(item.description !== '') && (item.description).slice(0, 14) + '...'}</div>
                        {item.label !== '' && <SmallTag item={item} />}
                    </button>
                )};
            </aside>
            <div className='contentNote'>
                {showNewNote && <textarea name='description' value={newNote.description} onChange={handleTextTareaChange} className="newNote" placeholder="Escribe tu nota...                    (=^･ｪ･^=)"
                    style={{ backgroundColor: !active ? "#D9D9D9" : 'rgb(157, 157, 240)', fontStyle: typography ? 'italic' : null }} ></textarea>}
                {showOldNote && <textarea name='description' value={note.description} onChange={handleNote} className="newNote" ></textarea>}
                {tag && showNewNote && <Tag note={note} handleTextTareaChange={handleTextTareaChange} />}
                {showOldNote && tag && <Tag note={note} handleTextTareaChange={handleNote} value={note.description} />}
                <nav className="menuButtonsNote">
                    {showNewNote && <button title='SaveNotes' onClick={() => addNotes()}>GUARDAR <AiTwotoneSave size={20} /></button>}
                    {showOldNote && <button title='SaveNotes' onClick={() => editNote()}>GUARDAR<AiOutlineSave size={20} /></button>}
                    <button title='AddFiles' onClick={() => showModal()}> <ImageIcon size={20} /></button>
                    <button title='AddLabel' onClick={() => showLabel()}><TagIcon size={20} /></button>
                    <button title='Changes color note' onClick={() => changesColorTextArea()}><PaintbrushIcon size={20} /></button>
                    {showNewNote && <button title='Clean Note' onClick={() => cancelNote()}> <AiOutlineClear size={20} /></button>}
                    {showOldNote && <button title='DeleteNote' onClick={() => deleteNote()}>ELIMINAR<TrashIcon size={20} /></button>}
                    <button className='boldTypography' onClick={() => changesTypography()}> <AiOutlineFontSize size={20} /></button>
                </nav>
                {modalAddImages && <ImageModal urlFiles={urlFiles} setUrlFiles={setUrlFiles} hiddenModal={hiddenModal} />}
            </div>
        </section >
    )
}