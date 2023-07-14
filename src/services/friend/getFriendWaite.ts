import { projectAuth,db } from "@/configs/firebase";
import { getDocs,collection } from "firebase/firestore";

async function getFriendWait() {
    if(projectAuth.currentUser){
         const userId:string =projectAuth.currentUser.uid
         const array:Array<Object> = []
    try {
        const docRef = collection(db,"friend",userId,"await")
        const onSnapShot = await getDocs(docRef)
        onSnapShot.forEach((doc) => {
            array.push(doc.data())
            console.log(doc.id, " => ", doc.data());
          });
    }
    catch(err){
        console.log(err);
        
    }
 }

}