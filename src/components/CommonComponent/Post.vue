<template>
    <div class="w-full pb-8">
        <div class="flex items-center p-4 pt-8">
            <div class="w-full flex flex-1 gap-8 pr-24">
                <div class="w-16 h-16">
                    <ImageComponent imgType="avatar" :link=avatar class=""/>
                </div>


                <div class="text-2xl flex-1">
                    <div class="flex gap-4 items-center pb-4 pt-2">
                        <h2 class="font-bold">{{ name }}</h2>
                        <div v-if="verified">
                            <i  class="fa-solid fa-check" style="color: #4287ff;"></i>
                        </div>

                        <div class="cursor-pointer" @click="deletePost">
                            x
                        </div>
                    </div>
                    
                    <ParagraphCompnent :content="content" />

                    <div class="width-full" v-if="img != undefined && video == undefined">
                        <ImageComponent :link="img"/>
                    </div>
                    
                    <div class="" v-if="img == undefined && video != undefined">
                        <VideoComponent :link = "video"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import ImageComponent from './ImageComponent.vue';
    import VideoComponent from './VideoComponent.vue';
    import ParagraphCompnent from './ParagraphCompnent.vue';
    import { defineComponent } from 'vue';
    import { doc, deleteDoc, collection } from "firebase/firestore";
    import { db } from '@/configs/firebase';
    export default defineComponent({
        props: {
            id: String,
            name: String,
            verified: Boolean,
            avatar: String,
            content: String,
            img: String,
            video: String,
        }, components:{
            ImageComponent, VideoComponent, ParagraphCompnent
        }, 
        methods: {
            deletePost() {
                deleteDoc(doc(collection(db, "posts"), this.id));
            }
        }
    })
    
</script>