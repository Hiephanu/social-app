import { onSnapshot, collection, query, QuerySnapshot } from "firebase/firestore"; 
import { db } from "@/configs/firebase";
import {ref, Ref, onMounted} from 'vue';

const posts:Ref<any> = ref([])

const getRealTimePost = () => {
    onMounted(() => {
        onSnapshot(collection(db, "posts"), (querySnapshot)=> {
            querySnapshot.forEach((doc) => {
                const data = {
                    id: doc.id,
                    name: doc.data().name,
                    avatar: doc.data().avatar,
                    verified: doc.data().verified,
                    content: doc.data().content,
                    create_at: doc.data().create_at,
                    image: doc.data().image,
                    video: doc.data().video
                }

                posts.value.unshift(data)
            })
        })
    })

    return posts.value
}

export default getRealTimePost