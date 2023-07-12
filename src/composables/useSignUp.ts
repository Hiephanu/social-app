
import { Ref,ref } from "vue";
import { projectAuth,db } from "@/configs/firebase";
import { updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import {getUser} from "@/types/user";
const err:Ref<any>=ref("")
const isPending:Ref<boolean>=ref(false)

const signUp =async (email:string,password:string,name:string,phoneNumber:string,date:Date) => {
    try {
        isPending.value=true
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)

        if(!res){
            throw new Error("Cann't create new user")
        }
        if(res && res.user) {
            await updateProfile(res.user, {
                displayName: name,
                photoURL: "",
              })
            const newUser = doc(db, "users", res.user.uid);
            const user:getUser = {
                name: name,
                id: res.user.uid,
                email: email,
                password:"",
                time:date,
                phoneNumber:phoneNumber,
                role:"User",
                avata:"https://static.vecteezy.com/system/resources/previews/008/442/086/original/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
              };
            await setDoc(newUser,user)
        }
       
    } catch (error) {
        err.value=error
        console.log(error);
        
    }
    finally {
        isPending.value=false
    }
}

export function useSignUp(){
    return {
        signUp,
        err,
        isPending
    }
}