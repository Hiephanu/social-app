<template>
    <div>
        <UploadStatusForm></UploadStatusForm>
        <div class="" v-for = "post in posts">
            <div class="border-2 border-grey-200 mt-2">
                 <Post :name = 'post.name' :verified="post.verified" :avatar="post.avatar" :content="post.content" :img="post.image" :video="post.video"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import UploadStatusForm from '@/components/CommonComponent/UploadStatusForm.vue';
    import Post from '@/components/CommonComponent/Post.vue';
    import { db } from '@/configs/firebase';
    import { collection, onSnapshot } from 'firebase/firestore';
    import { onMounted } from 'vue';

    const posts:any = []

    function push(posts:Array<object>, data:object) {
        posts.push(data)
    }

    console.log(posts)
    
    onMounted(() => {
        onSnapshot(collection(db, 'posts'), (querySnapshot) => {
            querySnapshot.forEach((doc) => {
                const data = {
                    content: doc.data().content,
                    create_at: doc.data().create_at,
                    image: doc.data().image,
                    video: doc.data().video
                }
                push(posts, data)
            })
        })
    })

</script>