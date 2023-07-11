<template>
    <div class="w-[48%] h-[90vh] bg-white mt-12 rounded-3xl">
      <div class="flex font-bold text-[20px] mt-8">
        <RouterLink to="/authen"><i class="fa-solid fa-x ml-4 mt-2"></i></RouterLink>
        <h1 class="ml-[7%]">Bước 2/3</h1>
      </div>
      <div class="w-full">
        <h1 class="mt-12 font-semibold text-6xl ml-[10%]">Thông tin về tài khoản</h1>
        <input
          type="text"
          placeholder=" Email"
          class="w-4/5 h-24 border-2 border-gray-200 ml-[10%] mt-12 rounded-2xl"
          v-model="email"
        /><br />
        <input
          type="text"
          placeholder=" Password"
          class="w-4/5 h-24 border-2 border-gray-200 ml-[10%] mt-12 rounded-2xl"
          v-model="password"
        />
        <input
          type="text"
          placeholder=" Rewrite Password"
          class="w-4/5 h-24 border-2 border-gray-200 ml-[10%] mt-12 rounded-2xl"
          v-model="password"
        />
      </div>
      <div class="w-full text-end mt-24">
        <button class="p-4 bg-black text-white hover:bg-gray-600 mr-8 rounded-xl" @click="changePage">
          Tiếp tục
        </button>
      </div>
    </div>
  </template>
  <script lang="ts">
  import {ref,Ref} from 'vue'
  export default {
    setup(props,{emit}){
      console.log(props);
      const email:Ref<string>=ref("")
      const password:Ref<string>=ref("")
      const changePage=()=>{
        const page2Data={
          email:email.value,
          password:password.value
        }
        emit("changePage",page2Data)
      }
      return {
        changePage,
        email,
        password
    
      }
    }
  }
  </script>
  