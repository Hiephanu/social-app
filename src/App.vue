<script setup lang="ts">
import {ref} from 'vue'

const name =ref<string>('Hiêp')
</script>

<template>
  <div>
    {{ name }}
  </div>
</template>

