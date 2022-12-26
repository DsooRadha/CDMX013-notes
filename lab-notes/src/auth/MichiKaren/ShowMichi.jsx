import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { Exit } from '../exit/Exit'
import './showMichi.css'

export const ShowMichi = ({ username }) => {
    const [viewNotes, setViewNotes] = useState(false)
    const navigate = useNavigate();

    function NavigateToNotes() {
        setViewNotes(true)
    }

    useEffect(() => {
        if (viewNotes) {
            navigate('/notes')
        }
    }, [viewNotes]);

    return (
        <div className='noNotes'>
            <div className='KarenMichi'>
                <button className='btnNAvigateNote' onClick={NavigateToNotes} >NOTAS</button>
                <img className="arrowNotes" src="https://user-images.githubusercontent.com/101679628/207672070-f83787c7-031f-488a-8c34-95f3318c4e91.png" alt="arrow" />
                <h2>¡Karen{username}, <br /> crea una nota!</h2>
                <img className="catPlants" src="https://user-images.githubusercontent.com/101679628/207672094-6cdd4d1f-b01f-4525-9bed-139fa719beaf.png" alt="CatPlant" />
            </div>
            <Exit />
        </div>
    )
}