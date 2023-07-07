<script setup lang="ts">
import {ref} from 'vue'
import homePageVue from './components/user/mainPage/homePage.vue';
const name =ref<string>('Hiêp')
</script>

<template>
  <div>
    {{ name }}
    <homePageVue/>
  </div>
</template>

