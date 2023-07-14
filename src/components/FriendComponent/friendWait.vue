<template>
    <div>
        {{ array }}
    </div>
</template>
<script setup lang="ts">
import {useGetFriend} from "@/composables/getFriend.ts"
const { array,getFriend } = useGetFriend()
if(array.value.length==0){    
    getFriend('await')
}

</script>