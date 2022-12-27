import { useState, useEffect } from 'react';
import { uploadFile, storageRef } from '../../lib/storage';
import { listAll, getDownloadURL } from "firebase/storage";
import './Images.css'


export const Images = ({ setUrlFiles, hiddenModal }) => {
    const [file, setFile] = useState(null);
    const [images, setImages] = useState([]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        hiddenModal()
        try {
            const result = await uploadFile(file, setUrlFiles);
            //  console.log(result)
        } catch (error) {
            ////  console.error(error)
        }
    
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

    //console.log(images)
    return (
        <section className="modal">
            <div className="modalImage">
                <form onSubmit={handleSubmit}>
                    <input className='addFile' type='file' onChange={e => setFile(e.target.files[0])} />
                    <div>
                    <button id='btnAcept'>AGREGAR</button>
                    <button onClick={()=>hiddenModal()} className='btnCancel'>CANCELAR</button>
                    </div>
                    {/* {images.map((url)=>{
               return <img src={url}/>
            })} */}
                </form>
            </div>
        </section>
    )
}