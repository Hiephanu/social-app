<template>
    <div class="border-2 border-rose-500 w-full" :class="class">
        <div class="flex items-center gap-4">
            <ImageComponent imgType="avatar" :link="avatar" />

            <div class="">
                <div class="flex gap-4 items-center pb-4 pt-2">
                    <p class="font-bold text-2xl">{{name}}</p>
                    <div v-if="verified">
                        <i  class="fa-solid fa-check" style="color: #4287ff;"></i>
                     </div>
                </div>
                
                <p class="text-2xl">{{suggest_reason}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import ImageComponent from './ImageComponent.vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        props:{
            name:String,
            verified:Boolean,
            avatar:String,
            suggest_reason:String,
        },
        mounted() {
            console.log(this.avatar)
        }
    })
</script>