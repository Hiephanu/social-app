<template>
    <div class="wrapper flex justify-between gap-x-6 w-3/4 mx-auto" >
        <div class="sidebar border-2 border-rose-600 w-1/5 h-screen" >
            <SideBar></SideBar>
        </div>

        <div class="main-content border-2 border-rose-600 flex-1 h-screen">
            <div class="header">
                <Header></Header>
            </div>
            
            <div class="content">
                <Home />
            </div>
        </div>

        <div class="search-section border-2 border-rose-600 w-1/3 h-screen">
            <SearchSection></SearchSection>
        </div>
    </div>
</template>

<script lang="ts">
    import Home from "@/pages/user/pages/Home/Home.vue"
    import { SideBar, SearchSection, Header } from "@/components/index.vue";

    export default{
        components: {
            Header,
            SearchSection,
            SideBar
        }
    }
</script>
