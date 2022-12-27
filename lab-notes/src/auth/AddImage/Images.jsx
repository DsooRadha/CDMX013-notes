import { useState, useEffect } from 'react';
import { uploadFile, storageRef } from '../../lib/storage';
import { listAll, list, getDownloadURL } from "firebase/storage";


export const Images = () => {
    const [file, setFile] = useState(null);
    const [images, setImages] = useState([]);
    const [urlFiles, setUrlFiles]=useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await uploadFile(file, setUrlFiles);
          //  console.log(result)
        } catch (error) {
          ////  console.error(error)
        }
    };
console.log(urlFiles, 'aca')
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
        <form onSubmit={handleSubmit} className='inputFile'>
            <input type='file' onChange={e => setFile(e.target.files[0])} />
            <button>AGREGAR</button>
            {/* {images.map((url)=>{
               return <img src={url}/>
            })} */}
        </form>
    )
}