<template>
    <div class="relative py-2 bg-white border-b border-r">
        <i class="fas fa-search absolute top-1/2 -translate-y-[7px] left-[15px]"></i>
        <input type="text" class="border-2 border-slate-200 bg-slate-100 max-w-full w-full p-4 rounded-full pl-20 
                                    focus:border-2 focus:border-blue-200 focus:bg-white" 
               :placeholder="placeholder">
    </div>
        
</template>
<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        props: {
            placeholder: {
                type: String,
                default: "Search"
            }
        },
    })
</script>