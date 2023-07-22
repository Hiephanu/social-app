<template>
    <div>
        <UploadStatusForm></UploadStatusForm>
        <div class="" v-for = "post in posts">
            <div class="border-2 border-grey-200 mt-2">
                <Post :id="post.id" :name = 'post.name' :verified="post.verified" :avatar="post.avatar" :content="post.content" :img="post.image" :video="post.video"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import UploadStatusForm from '@/components/CommonComponent/UploadStatusForm.vue';
    import Post from '@/components/CommonComponent/Post.vue';
    import getRealTimePosts from "@/composables/getPosts"
    import { Ref, ref } from 'vue';

    const posts:Ref<any> = ref(getRealTimePosts())

    console.log(posts.value)

</script>