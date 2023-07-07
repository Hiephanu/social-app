<template>
    <div>
        hello {{ hi }}
    </div>
</template>
<script setup lang="ts">
import user from '../../../models/user';
const hi:user={
    name:"Hiệp",
    id:1,
    age:12,
    time:new Date()
}

</script>