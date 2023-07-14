<template>
    <div class="w-full h-[200%] fixed top-[0px] bg-popup">
      <div class="flex justify-center items-center">
        <div class="w-full h-full">
          <div
            class="w-1/2 h-[90vh] bg-white m-auto mt-16 rounded-3xl relative overflow-y-scroll realtive"
          >
            <div
              class="flex justify-between h-32 w-1/2 fixed top-4 bg-white z-10 rounded-t-3xl"
            >
              <RouterLink to="/authen">
                <i class="fa-solid fa-x ml-8 mt-8"></i
              ></RouterLink>
              <i
                class="fa-brands fa-twitter mr-8 mt-8 text-[40px] text-blue-400"
              ></i>
              <p></p>
            </div>
            <div class="text-center mt-36">
              <h1 class="font-bold text-[30px]">Đăng nhập vào Myapp</h1>
              <div class="mt-8">
                <div
                  class="flex p-2 border-[2px] border-gray-200 w-1/2 justify-center rounded-full cursor-pointer m-auto text-3xl"
                >
                  <img src="../../../assets/img/google.png" alt="" class="w-12" />
                  <p class="ml-4 mt-2">Đăng nhập bằng Google</p>
                </div>
                <div
                  class="flex p-2 border-[2px] border-gray-200 w-1/2 justify-center rounded-full mt-8 cursor-pointer m-auto text-3xl"
                >
                  <img
                    src="../../../assets/img/facebook.png"
                    alt=""
                    class="w-12"
                  />
                  <p class="ml-4 mt-2">Đăng nhập với Facebook</p>
                </div>
                <p class="text-center mt-12">Hoặc</p>
                <div>
                  <input
                    type="text"
                    placeholder=" email"
                    class="border-2 border-gray-300 w-1/2 h-24 mt-12 rounded-2xl"
                    v-model="email"
                  /><br />
                  <input
                    type="password"
                    placeholder=" password"
                    class="border-2 border-gray-300 w-1/2 h-24 mt-12 rounded-2xl"
                    v-model="password"
                  />
                </div>
                <button
                  class="w-1/2 mt-12 text-white border-2 border-black bg-black p-4 rounded-xl hover:bg-gray-600"
                  @click="login"
                >
                  Đăng nhập
                </button>
                <p class="mt-12">Bạn chưa có tài khoản?</p>
                <p class="mt-12 pb-12 text-blue-400 cursor-pointer">Đăng ký</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { Ref, ref, onMounted, onUnmounted } from "vue";
  import { useSignIn } from "@/composables/useSignIn";
  import router from "@/router/router";
  const { error, pending, signIn } = useSignIn();
  
  const email: Ref<string> = ref("");
  const password: Ref<string> = ref("");
  const login = async () => {
    await signIn(email.value, password.value);
    if (!error) {
      alert(error);
    } else {
      router.push("/");
    }
    console.log(pending);
  };
  onMounted(() => {
    document.body.style.overflow = "hidden";
  });
  onUnmounted(() => {
    document.body.style.overflowY = "scroll";
  });
  </script>
  <style>
  ::-webkit-scrollbar {
    width: 10px;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #a0a0a0;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: #f0f0f0;
  }
  </style>
  
