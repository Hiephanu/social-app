<template>
    <div v-if="imgType === 'avatar'" class="rounded-full w-full overflow-hidden">
        <img  :src=link  :class="class" @error="imageLoadError" class="w-full rounded-full"/>
    </div>
    
    <div v-else class="w-3/4 m-auto" >
        <img  :src=link  :class="class" @error="imageLoadError" class="aspect-auto object-cover rounded-[2rem] w-full h-auto"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

    export default defineComponent({
        props:{
            link: String,
            class: String,
            imgType: String,
        },  
        data(props) {
            return {
                link: props.link,
            }
        },
        methods:{
            imageLoadError() {
                if(this.imgType === 'avatar') {
                    this.link = "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
                }
                this.link = "https://static.thenounproject.com/png/741653-200.png"
            }
        }
    })
</script>

<style scoped>
</style>