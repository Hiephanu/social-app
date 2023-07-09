<script setup lang="ts">
    import HomeLayout from './HomeLayout.vue';
    import { markRaw, ref, watch } from 'vue';
    import { useRoute } from 'vue-router';

    const layout = ref()
    const route = useRoute()
    console.log(layout)
    console.log(route)

    watch(
        () => route.meta?.layout as string | undefined,
        async (metaLayout) => {
            try {
                const component = metaLayout && await import(/* @vite-ignore */ `./${metaLayout}.vue`)
                layout.value = markRaw(component?.default || HomeLayout)
            } catch(e) {
                layout.value = markRaw(HomeLayout)
            }
        }, 
        {immediate: true}
    )
</script>

<template>
    <component :is="layout"> <router-view/> </component>
</template>