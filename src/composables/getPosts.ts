import { onSnapshot, collection } from "firebase/firestore"; 
import { db } from "@/configs/firebase";

const getRealTimePost = () => {
    const dataList:any = []
    onSnapshot(collection(db, 'posts'), (querySnapshot) => {
        querySnapshot.forEach((doc) => {
            const data = {
                content: doc.data().content,
                create_at: doc.data().create_at,
                image: doc.data().image,
                video: doc.data().video
            }
            dataList.push(data)
        })
    })
    return dataList
}

export default getRealTimePost