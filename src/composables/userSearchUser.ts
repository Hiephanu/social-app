import { db } from "@/configs/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import {ref,Ref} from 'vue'

const userSearch:Ref<Array<Object>>=ref([]) 
async function getQuery(name:string) {
  const userRef = collection(db, "users");

  const q = query(userRef, where("name", "==", name));

  try {
    userSearch.value=[]
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      userSearch.value.push(doc.data())
      console.log( doc.data());
    });
    console.log(querySnapshot);
    
  } catch (error) {
    console.log("Lỗi khi thực hiện truy vấn: ", error);
  }
}

export function useSearchUser(){
  return {
    getQuery,
    userSearch
  }
}