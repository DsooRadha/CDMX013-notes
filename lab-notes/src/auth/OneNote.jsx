import { useState } from 'react'
import './HomePage/oneNote.css'

export const OneNote = ({ user }) => {
    const [note, setNote] = useState({
        id: user.uid,
        date: '',
        label: '',
        description: '',
        image: '',
    });

    const handleTextTareaChange = (e) => {
        const { name, value } = e.target
        setNote((prevState) => ({ ...prevState, [name]: value }))
    };
    console.log(note)
    return (
        <section className="newNoteArea">
            <div className='allNotes'></div>
            <div className='contentNote'>
                <img className='tagLabel' src="https://user-images.githubusercontent.com/101679628/207916790-28de992c-b3f1-415f-b76d-7c054967dac7.png" alt="tagLabel" />
                <select name='label' value={note.label} onChange={handleTextTareaChange} className='labelCat'>
                    <option ></option>
                    <option >IMPORTANTE</option>
                    <option >NO TAN IMPORTANTE</option>
                    <option>ALGÚN DÍA LO OCUPO</option>
                    <option >COMPRAS</option>
                </select>
                <textarea name='description' value={note.description} onChange={handleTextTareaChange} className="newNote" placeholder="Escribe tu nota...                     (=^･ｪ･^=)"></textarea>
                <section className="menuButtonsNote">
                    <button>GUARDAR</button>
                    <button>ELIMINAR</button>
                    <button>IMAGEN</button>
                </section>
            </div>
        </section>
    )
}