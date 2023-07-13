<template>
    <div>
        <UploadStatusForm></UploadStatusForm>
        <div class="" v-for = "post in posts">
            <div class="border-2 border-grey-200 mt-2">
                 <Post :name = 'post.name' :verified="post.verified" :avatar="post.avatar" :content="post.content" :img="post.img" :video="post.video"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import UploadStatusForm from '@/components/CommonComponent/UploadStatusForm.vue';
    import Post from '@/components/CommonComponent/Post.vue';
    import { defineComponent } from 'vue';
    export default defineComponent({
        data(){
            return {
                posts:[
                        {name:"Đoàn Văn Hiệp", verified: true, avatar: "https://shorturl.at/pCPQ4", 
                        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        img: "https://source.unsplash.com/random"},
                        {name:"jthinh", verified: true, avatar: "https://shorturl.at/jpKSZ", 
                        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book111.",
                        video: "https://www.youtube.com/embed/92cBLM6Hawc"
                        },
                    ]
            }
        }, 
        components:{
            UploadStatusForm, 
            Post
        }
    })
</script>