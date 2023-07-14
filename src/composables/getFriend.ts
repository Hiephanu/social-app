import { projectAuth,db } from "@/configs/firebase";
import { getDocs,collection } from "firebase/firestore";
import { Ref,ref } from "vue";

const array:Ref<Array<Object>> = ref([])
let err:string | unknown=""
async function getFriend(state:string) {
    if(projectAuth.currentUser){
        const userId:string =projectAuth.currentUser.uid
        try {
            const docRef = collection(db,"friends",userId,state)
            const onSnapShot = await getDocs(docRef)
            console.log(onSnapShot);
            
            onSnapShot.forEach((doc) => {
                array.value.push(doc.data())
                console.log(doc.id, " => ", doc.data());
              });
            }
        catch(error){
            err=error
        }
    }
    else {
        console.log("Can not get user");
        
    }
 }


export function useGetFriend(){
    return{
        getFriend,
        array
    }
}