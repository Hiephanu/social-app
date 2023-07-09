<template>
    <div class="wrapper flex flex-col text-3xl overflow-hidden">
        <div class="logo h-40">
            <h3>Logo</h3>
        </div>

        <div class="pages flex flex-col gap-y-8  mx-2">
                <router-link to="/">
                    <div class="page h-20 rounded-full items-center flex gap-x-4">
                        <div class="icon ml-4">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <p>Home</p>
                    </div>
                </router-link>

            <router-link to="explore">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <p>Explore</p>
                </div>
            </router-link>

            <router-link to="/notification">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <p>Notification</p>
                </div>
            </router-link>

            <router-link to="/messages">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <p>Messages</p>
                </div>
            </router-link>

            <router-link to="/bookmark">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <p>Bookmark</p>
                </div>
            </router-link>

            <router-link to="/profile">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <p>Profile</p>
                </div>
            </router-link>

            <router-link to="/home">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-house"></i>
                    </div>
                    <p>More</p>
                </div>
            </router-link>
        </div>

    </div>
</template>
<script setup lang="ts">
    
</script>

<style scoped>
    .deactive {
        display: none;
    }
    .page:hover {
        background-color: aqua;
        cursor: pointer;
    }
</style>