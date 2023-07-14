<template>
    
    <div v-if="imgType === 'avatar'" class="rounded-full w-20 h-20 overflow-hidden">
        <img  :src="_link"  :class="class" @error="imageLoadError" class="rounded-full object-cover"/>  
    </div>
    
    <div v-else class="w-3/4 m-auto" >
        <img  :src=_link  :class="class" @error="imageLoadError" class="aspect-auto object-cover rounded-[2rem] w-full h-auto"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

    export default defineComponent({
        props:{
            link: String,
            class: String,
            imgType: String,
            name: String,
        },  
        data(props) {
            return {
                _link: props.link,
            }
        },
        methods:{
            imageLoadError() {
                if(this.imgType === 'avatar') {
                    this._link = "https://t4.ftcdn.net/jpg/04/08/24/43/360_F_408244382_Ex6k7k8XYzTbiXLNJgIL8gssebpLLBZQ.jpg"
                }
                this._link = "https://static.thenounproject.com/png/741653-200.png"
            }
        }
    })
</script>

<style scoped>
</style>