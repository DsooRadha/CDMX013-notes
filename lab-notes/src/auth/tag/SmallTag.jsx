export const SmallTag = ({ item }) => {
    return (
        <div className='labelNotes'>
            <img className='petitTagLabel' src="https://user-images.githubusercontent.com/101679628/207916790-28de992c-b3f1-415f-b76d-7c054967dac7.png" alt="tagLabel" />
            <p>{item.label} </p>
        </div>
    )
};