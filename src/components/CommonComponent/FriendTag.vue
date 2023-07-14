<template>
    <div class="border-2 border-slate-100 w-full py-2 mt-2" :class="class">
        <div class="flex items-center gap-4">
            <ImageComponent imgType="avatar" :link=avatar />

            <div class="">
                <div class="flex gap-4 items-center">
                    <p class="font-bold text-2xl">{{name}}</p>
                    <i v-if="verified" class="fa-solid fa-check"  style="color: #4287ff;"></i>
                </div>
                
                <p class="text-2xl">{{suggest_reason}}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import ImageComponent from './ImageComponent.vue';
    defineProps({
        avatar: String,
        name: String,
        verified: Boolean,
        suggest_reason: String,
        class: String,
    })
    
</script>