import { db } from '@/configs/firebase';
import { addDoc, collection, } from "firebase/firestore"; 

const uploadPost = async (post:any) => {
    await addDoc(collection(db, "posts"), post.value);
}

export default uploadPost