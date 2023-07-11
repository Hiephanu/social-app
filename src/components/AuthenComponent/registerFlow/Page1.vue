<template>
  <div class="w-[48%] h-[90vh] bg-white mt-12 rounded-3xl">
    <div class="flex font-bold text-[20px] mt-8">
      <RouterLink to="/authen"><i class="fa-solid fa-x ml-4 mt-2"></i></RouterLink>
      <h1 class="ml-[7%]">Bước 1/3</h1>
    </div>
    <div class="w-full">
      <h1 class="mt-12 font-semibold text-6xl ml-[10%]">Thông tin cơ bản</h1>
      <input
        type="text"
        placeholder=" Name"
        class="w-4/5 h-24 border-2 border-gray-200 ml-[10%] mt-12 rounded-2xl"
        v-model="name"
      /><br />
      <input
        type="text"
        placeholder=" Phone number"
        class="w-4/5 h-24 border-2 border-gray-200 ml-[10%] mt-12 rounded-2xl"
        v-model="phoneNumber"
      />
      <div class="mt-12 ml-[10%]">
        <label for="time">Ngày sinh :</label><br />
        <p class="w-[90%] mt-8">
          Thông tin này sẽ đucợ bảo mật và tuân thủ theo quyền của người dùng.
        </p>
        <input
          type="date"
          name="time"
          id="time"
          class="mt-8 border-2 border-gray p-4"
          v-model="date"
        />
      </div>
    </div>
    <div class="w-full text-end mt-12">
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
    const name:Ref<string>=ref("")
    const phoneNumber:Ref<string>=ref("")
    const date:Ref<string>=ref("")
    const changePage=()=>{
      const page1Data={
        name:name,
        phoneNumber:phoneNumber,
        date:date
      }
      emit("changePage",page1Data)
    }
    return {
      changePage,
      name,
      phoneNumber,
      date
    }
  }
}
</script>
