<template>
    <form class="wrapper w-full max-w-full border-2 border-dashed border-slate-100">
        <div class="flex items-center p-4 pt-12">
            <div class="flex flex-1 gap-4">
                <div class="avatar overflow-hidden rounded-full w-20 h-20">
                    <ImageComponent img-type="avatar" link="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/352223974_951677779312130_8593576021138458301_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j2rf-b4X3ioAX9SdBix&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBiQ7hqj7ZezMdmno9SoDBhCTq1Wmh7Z8OiNWElmD4Ciw&oe=64AF6E21"/>
                </div>

                <form class="form flex-1" @submit.prevent="postMethod">
                    <div class="flex-1">
                        <!-- <div v-if="!show" @click="showTextArea" class="block border-2 h-20 rounded-full border-slate p-8 w-full cursor-pointer"></div> -->
                       <textarea v-model="content" name="textarea" placeholder="What are you feeling?!" 
                                class="block border-2 h-44 rounded-xl border-slate w-full 
                                        overflow-hidden resize-none pl-8 pt-4 pb-2 pr-8 leading-3xl
                                        focus:border-20 focus:border-blue-400 focus:overflow-auto focus:overflow-x-hidden  
                                    " ></textarea>

                    </div> 
                    <div class="flex justify-between py-2 mx-6 my-2">
                        <div class="flex gap-4 items-center">
                            <i class="cursor-pointer fa-solid fa-paperclip"></i>
                            <i class="cursor-pointer fa-solid fa-image"></i>
                            <i class="cursor-pointer fa-solid fa-face-smile"></i>
                            <i class="cursor-pointer fa-solid fa-clipboard"></i>
                        </div>
                        
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-2xl ">Post</button>
                        
                    </div>
                </form>
            </div>
        </div>
    </form>
</template>

<script lang="ts" setup>
    import { ref, Ref } from 'vue';
    import ImageComponent from '@/components/CommonComponent/ImageComponent.vue';
    import post from "@/types/post"
    import uploadPost from "@/composables/upPosts";

    const postObj:Ref<post> = ref({
        name: "jthinh",
        avatar: "https://pbs.twimg.com/media/F1lnpU7WAAAighk?format=jpg&name=small",
        verified: true,
        content:"",
        create_at: new Date(),
        image:"https://pbs.twimg.com/media/F1lnpU7WAAAighk?format=jpg&name=small",
        video:"",
    })

    let content:Ref<string> = ref("");

    const postMethod =async () => {
        postObj.value.content = content
        uploadPost(postObj)
        content = ref("");
    } 
</script>

