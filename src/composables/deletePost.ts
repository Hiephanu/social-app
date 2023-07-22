import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/configs/firebase";

const deleteDocument = async (id:string) => {
    await deleteDoc(doc(db, "posts", id));
}