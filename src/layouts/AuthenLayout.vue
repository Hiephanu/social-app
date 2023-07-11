<template>
    <BaseAuthen/>
    <slot/>
</template>
<script lang="ts">
import BaseAuthen from '@/components/LayoutComponent/authLayout/BaseAuthen.vue'
export default{
    components:{
        BaseAuthen
    }
}
</script>