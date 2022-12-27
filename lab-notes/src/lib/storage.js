import { getStorage } from "firebase/storage";
import { app } from "./firebase";
import { ref, uploadBytes, getDownloadURL, listAll, list, } from "firebase/storage";
import { v4 } from "uuid";

export const storage = getStorage(app);
export const storageRef = ref(storage, v4())
/**
 * Upload a file to firebase Storage
 * @param {File} file the file to upload
 * @returns {Promise<string>} url of the uploaded file
 */

export const uploadFile = async (file,setUrlFiles) => {
    //  const storageRef=ref(storage, `images/${v4()}`)
    await uploadBytes(storageRef, file)
    const url = await getDownloadURL(storageRef)
    setUrlFiles(url)


    // await listAll(storageRef)
    // .then((res) => {
    //   res.prefixes.forEach((folderRef) => {
    //    console.log(folderRef)
    //   });
    //   res.items.forEach((itemRef) => {
    //   console.log(itemRef,'itemsREf')
    //   });
    // }).catch((error) => {
    //   console.log('Uh-oh, an error occurred!')
    // });


    return url
};

