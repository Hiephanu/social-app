<template>
  <component :is="layout">
    <RouterView class="font-nunito" :class="{'overflow-hidden': checkRoute}"/>
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed ,ComputedRef} from '@vue/reactivity';
import { ref,Ref } from 'vue';

const route=useRoute()
const layout: ComputedRef<Object>= computed(() => route.meta.layout || 'HomeLayout');

const checkRoute:Ref<Boolean>=ref(false) 

const routePath:string=route.path
if(routePath.includes('login') || routePath.includes('register')){
  checkRoute.value=true
}
</script>



