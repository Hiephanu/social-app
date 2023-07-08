<template>
    <div class="wrapper flex justify-between gap-x-3 w-5/6 mx-auto" style="height: 2000px;" >
        <div class="sidebar border-2 border-rose-600 w-1/5 h-screen sticky top-0" >
            <SideBar></SideBar>
        </div>

        <div class="main-content border-2 border-rose-600 flex-1">
            <div class="header sticky top-0 border-2">
                <Header></Header>
            </div>

            <div class="content">
                <router-view></router-view>
            </div>
        </div>

        <div class="search-section border-2 border-rose-600 w-1/6 h-screen">
            <SearchSection></SearchSection>
        </div>
    </div>
</template>

<script lang="ts">
    import { SideBar, SearchSection, Header } from "@/components/index.vue";
    export default{
        components: {
            Header,
            SearchSection,
            SideBar
        }
    }
</script>