import { useNavigate } from 'react-router'
import { Logo } from '../../elements/Logo';
import { MessageError } from '../../elements/MessageError';
import { singOutSession } from '../../lib/provaiders.js';
import './exit.css'

export const Exit = ({ stateError, user, imageNote}) => {

    const navigate = useNavigate();

    const closeSesion = () => {
        navigate('/')
        singOutSession()
    }

    return (
        <section className="exit">
            <Logo />
            <img className='rauuuul' src="https://user-images.githubusercontent.com/101679628/207461293-5a998ad6-88f5-49f7-a2e3-3f8bededc9a5.png" alt="rauuul" />
            {stateError && <MessageError userName={user.displayName} message=' la nota esta vacía' />}
           {/* <aside className='imageNotes'> */}
            {/* {imageNote.length>0 && imageNote.map((image)=>{
                <img src={image} alt="ImageNotes" />
            })} */}
           {/* </aside> */}
            <img className='exitCat' src="https://user-images.githubusercontent.com/101679628/207461215-199698cd-95e5-4a78-90a5-f2e592e64295.png" alt="exitCat" />
            <button onClick={() => closeSesion()}>SALIR</button>
        </section>
    )
}