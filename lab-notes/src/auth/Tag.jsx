export const Tag = ({note,handleTextTareaChange}) => {
    return (
        <section className="tagSection">

            <img className='tagLabel' src="https://user-images.githubusercontent.com/101679628/207916790-28de992c-b3f1-415f-b76d-7c054967dac7.png" alt="tagLabel" />
            <select name='label' value={note.label} onChange={handleTextTareaChange} className='labelCat'>
                <option ></option>
                <option >IMPORTANTE</option>
                <option >PENDIENTE</option>
                <option>URGENTE</option>
                <option >COMPRAS</option>
            </select>
        </section>
    )
}
