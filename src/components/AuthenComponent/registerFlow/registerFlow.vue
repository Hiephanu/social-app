<template>
  <div class="w-full h-[200%] fixed top-0 bg-popup">
    <div class="w-full h-full  ">
       <div v-if="page==1" class="flex justify-center items-center">
        <Page1 @changePage="nextPage2"/>
       </div>
       <div v-if="page==2" class="flex justify-center items-center">
        <Page2 @changePage="nextPage3"/>
       </div>
       <div v-if="page==3" class="flex justify-center items-center">
        <Page3/>
       </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Page1 from '@/components/AuthenComponent/registerFlow/Page1.vue'
import Page2 from './Page2.vue';
import Page3 from './Page3.vue';
import { onMounted, onUnmounted,ref,Ref } from "vue";

const page:Ref<number>=ref(1) 

const nextPage2=()=>{
  page.value=2
}
const nextPage3=()=>{
  page.value=3
}

onMounted(() => {
  document.body.style.overflow = "hidden";
});
onUnmounted(() => {
  document.body.style.overflowY = "scroll";
});
</script>
<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #a0a0a0;
  border-radius: 4px;
}

::-webkit-scrollbar-track {
  background-color: #f0f0f0;
}
</style>

