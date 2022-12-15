import './oneNote.css'

export const OneNote = () => {
    return (
        <section className="newNoteArea">
            <div className='allNotes'></div>
            <div className='contentNote'>
                <textarea className="newNote" placeholder="Escribe tu nota...                     (=^･ｪ･^=)"></textarea>
                <section className="menuButtonsNote">
                    <button>GUARDAR</button>
                    <button>ELIMINAR</button>
                    <button>IMAGEN</button>
                </section>
            </div>
        </section>
    )
}