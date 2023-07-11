<template>
  <component :is="layout">
    <RouterView class="font-nunito" />
  </component>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed ,ComputedRef} from '@vue/reactivity';

const route=useRoute()
const layout: ComputedRef<Object>= computed(() => route.meta.layout || 'HomeLayout');

</script>



