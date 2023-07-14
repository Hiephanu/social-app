<template>
  <div class="relative py-2 bg-white group">
    <i
      class="fas fa-search absolute top-1/2 -translate-y-[7px] left-[15px] cursor-pointer"
      @click="getQuery(name)"
    ></i>
    <input
      type="text"
      class="border-2 border-slate-200 bg-slate-100 max-w-full w-full p-4 rounded-full pl-20 focus:border-2 focus:border-blue-200 focus:bg-white"
      placeholder="Search"
      v-model="name"
    />
    <div class="absolute top-20 shadow w-full hidden group-hover:block">
      <div
        v-for="(user, index) in userSearch"
        :key="index"
        class="mt-8 flex"
      >
        <i class="fa-solid fa-magnifying-glass ml-6 mt-1"></i>
        <p class="ml-8">{{ user.name }}</p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, Ref } from "vue";
import { useSearchUser } from "@/composables/userSearchUser";

const { getQuery, userSearch } = useSearchUser();

const name: Ref<string> = ref("");
</script>
