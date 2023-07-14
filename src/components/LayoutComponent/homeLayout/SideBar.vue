<template>
    <div class="wrapper flex flex-col text-3xl overflow-hidden max-w-full">
        <div class="logo h-40">
            <h3>Logo</h3>
        </div>

        <div class="pages flex flex-col gap-y-8  mx-2">
                <router-link to="/" class="border-none" >
                    <div class="page h-20 rounded-full items-center flex gap-x-4">
                        <div class="icon ml-4">
                            <i class="fa-solid fa-house"></i>
                        </div>
                        <p class="name">Home</p>
                    </div>
                </router-link>

            <router-link to="/friend">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </div>
                    <p>Friend</p>
                </div>
            </router-link>

            <router-link to="/notification">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-bell"></i>
                    </div>
                    <p class="name">Notification</p>
                </div>
            </router-link>

            <router-link to="/messages">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-envelope"></i>
                    </div>
                    <p class="name">Messages</p>
                </div>
            </router-link>

            <router-link to="/bookmark">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-bookmark"></i>
                    </div>
                    <p class="name">Bookmark</p>
                </div>
            </router-link>

            <router-link to="/profile">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-user"></i>
                    </div>
                    <p class="name">Profile</p>
                </div>
            </router-link>

            <router-link to="/home">
                <div class="page h-20 rounded-full items-center flex gap-x-4">
                    <div class="icon ml-4">
                        <i class="fa-solid fa-circle-info"></i>
                    </div>
                    <p class="name">More</p>
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
        background-color: rgb(225, 225, 225);
        cursor: pointer;
    }
    .icon > i, .name{
        color:rgb(153, 151, 151);
    }

    .router-active{
        font-weight: bold;
    }
    .router-active .icon>i,
    .router-active .name{
        color: #4d4d4d;
    }
</style>