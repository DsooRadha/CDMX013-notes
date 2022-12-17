import { useState } from 'react'
import { useEffect } from 'react'
import './HomePage/getNotes.css'

const SmallTag = ({ item }) => {
    return (
        <div className='labelNotes'>
            <img className='petitTagLabel' src="https://user-images.githubusercontent.com/101679628/207916790-28de992c-b3f1-415f-b76d-7c054967dac7.png" alt="tagLabel" />
            <p>{item.label} </p>
        </div>
    )
};

export const GetNotes = ({ user, getFlag, setLoading, setInfoNote, setViewNote }) => {
    const [allNotes, setAllNotes] = useState([]);

    const getAllNotes = async () => {
        const config = {
            method: "GET",
            headers: { "Content-type": "application/json;charset=UTF-8" }
        };
        const response = await fetch(`https://639b6461d5141501975434d1.mockapi.io/notes?uid=${user.uid}`, config)
        const allNotes = await response.json();
        setAllNotes(allNotes)
        // setLoading(false)
    };

    const showNote = (item) => {
        setInfoNote(item);
        setViewNote(true);
       
    }

    useEffect(() => {
        // setLoading(true)
        getAllNotes()
    }, [getFlag]);

    return (
        <section className='allNotes'>
            {allNotes.length > 0 && allNotes.map((item) =>
                <button onClick={() => showNote(item)} className='petitNotes' key={item.id}>
                    <div className='textDescription'>{(item.description).slice(0, 14) + '...'}</div>
                    {item.label !== '' && <SmallTag item={item} />}
                </button>
            )}
        </section>
    )
};