<template>
    <div class="wrapper flex justify-between gap-x-3 w-5/6 mx-auto" style="height: 2000px;" >
        <div class="sidebar border-2 border-slate-100 w-1/5 max-w-1/5 h-screen sticky top-0" >
            <SideBar></SideBar>
        </div>

        <div class="main-content flex-1">
            <div class="header sticky top-0 border-2 bg-slate-50">
                <Header></Header>
            </div>

            <div class="content">
                <slot />
            </div>
        </div>

        <div class="search-section w-1/4 h-screen">
            <div class="sticky top-0 w-full">
                <SearchBar/>
            </div>
            <SuggestSection></SuggestSection>
        </div>
    </div>
</template>

<script lang="ts">
    import { SideBar, SuggestSection, Header, SearchBar } from "@/components/LayoutComponent/homeLayout/index.vue";
    export default{
        components: {
            Header,
            SearchBar,
            SuggestSection,
            SideBar
        }
    }
</script>