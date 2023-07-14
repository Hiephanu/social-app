<template>
    <div class="wrapper flex justify-between gap-x-3 w-5/6 mx-auto" style="height: 2000px;" >
        <div class="sidebar border-2 border-slate-100 w-1/5 max-w-1/5 h-screen sticky top-0" >
                <sideBar/>
        </div>

        <div class="main-content flex-1">
            <div class="header sticky top-0 bg-slate-50">
                <navBarFriend/>
            </div>

            <div class="content">
                <slot />
            </div>
        </div>

        <div class="search-section w-1/4 h-screen">
           <searchFriend/>
        </div>
    </div>
</template>
<script setup lang="ts">
import sideBar from "@/components/LayoutComponent/homeLayout/SideBar.vue"
import navBarFriend from "@/components/LayoutComponent/friendLayout/navBarFriend.vue";
import searchFriend from "@/components/FriendComponent/searchFriend.vue";
</script>