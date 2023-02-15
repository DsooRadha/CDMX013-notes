import { useState, useEffect } from 'react';
import { uploadFile, storageRef } from '../../lib/storage';
import { listAll, getDownloadURL } from "firebase/storage";
import './imageModal.css'

export const ImageModal = ({ setUrlFiles, urlFiles, hiddenModal }) => {
    const [file, setFile] = useState(null);
    // const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        hiddenModal()
        const result = await uploadFile(file);
        setUrlFiles([...urlFiles, result])
        // console.log(result,':::::::imageModal')
    };

    // useEffect(() => {
    //     listAll(storageRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImages((prevState) => [...prevState, url])
    //             })
    //         })
    //     })
    // }, [])

    return (
        <section className="modal">
            <div className="modalImage">
                <form onSubmit={handleSubmit}>
                    <input className='addFile' type='file' onChange={e => setFile(e.target.files[0])} />
                    <div className='btnsModal'>
                        <input type="submit" value="ACEPTAR" id='btnAcept' />
                        <button onClick={() => hiddenModal()} id='btnCancel'>CANCELAR</button>
                    </div>
                </form>
            </div>
        </section>
    )
}