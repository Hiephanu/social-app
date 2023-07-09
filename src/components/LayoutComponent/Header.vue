<template>
    <div class="wrapper flex flex-col h-32 text-3xl">
        <div class="title w-1/2 flex-1">
            <h1 class="font-black flex items-center h-full ml-8">Home</h1>
        </div>
        <div class="options flex flex-1 font-medium">
            <span class="block w-1/2 text-center h-full flex justify-center items-center option active">For you</span>
            <span class="block w-1/2 text-center h-full flex justify-center items-center option ">Following</span>
        </div>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
    .option:hover{
        background-color: rgb(182, 182, 182);
        cursor: pointer;
    }

    .option.active {
        font-weight: 700;
    }

</style>