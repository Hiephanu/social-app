import { projectAuth,db } from "@/configs/firebase";
import { getDocs,collection } from "firebase/firestore";


export async function useGetFriendWait() {
    if(projectAuth.currentUser){
         const userId:string =projectAuth.currentUser.uid
    try {
        const docRef = collection(db,"friend",userId,"friend")
        const onSnapShot = await getDocs(docRef)
        onSnapShot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
          });
        }
    catch(err){
        console.log(err);
        
    }
 }

}