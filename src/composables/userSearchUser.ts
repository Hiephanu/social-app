import { db } from "@/configs/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export async function getQuery(name:string) {
  const userRef = collection(db, "users");

  const q = query(userRef, where("name", "==", name));

  try {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    console.log(querySnapshot);
    
  } catch (error) {
    console.log("Lỗi khi thực hiện truy vấn: ", error);
  }
}