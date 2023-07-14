<template>
    <div>
        <input type="text" placeholder="Search" class="w-full h-12 border-2 border-gray-200 rounded-xl" v-model="name">
        <button @click="getQuery(name)">
            Get
        </button>
    </div>
</template>
<script setup lang="ts">
import {getQuery} from '@/composables/userSearchUser'
import {ref,Ref} from 'vue'
const name:Ref<string>=ref("")
</script>