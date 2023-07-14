<template>
    <div class="flex w-full" >
        <sideBar class="w-1/4 text-center ml-24"/>
        <div class="w-2/4 mr-24">
            <navBarFriend/>
            <slot/>
        </div>
        <div>
            <searchFriend/>
        </div>
    </div>
</template>
<script setup lang="ts">
import sideBar from "@/components/LayoutComponent/homeLayout/SideBar.vue"
import navBarFriend from "@/components/LayoutComponent/friendLayout/navBarFriend.vue";
import searchFriend from "@/components/FriendComponent/searchFriend.vue";
</script>