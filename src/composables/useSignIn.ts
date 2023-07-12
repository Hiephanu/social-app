import {ref,Ref} from 'vue'
import { projectAuth } from '@/configs/firebase'
const error:Ref<any>=ref('')
const pending:Ref<boolean>=ref(false)

async function signIn(email:string,password:string){
    error.value=null
    try{
        pending.value=true
        const res =await projectAuth.signInWithEmailAndPassword(email,password)
        console.log(res);
        
    }
    catch(err){
        error.value=err
    }
    finally{
        pending.value=false
    }
}
export function useSignIn(){
    return {error,pending,signIn}
}