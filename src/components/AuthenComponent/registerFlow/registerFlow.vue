<template>
  <div class="w-full h-[200%] fixed top-0 bg-popup">
    <div class="w-full h-full">
      <div v-if="page == 1" class="flex justify-center items-center">
        <Page1 @changePage="nextPage2" />
      </div>
      <div v-if="page == 2" class="flex justify-center items-center">
        <Page2 @changePage="nextPage3" />
      </div>
      <div v-if="page == 3" class="flex justify-center items-center">
        <Page3 @submitRegister="register" />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Page1 from "@/components/AuthenComponent/registerFlow/Page1.vue";
import Page2 from "./Page2.vue";
import Page3 from "./Page3.vue";
import { postUser } from "@/types/user";
import { onMounted, onUnmounted, ref, Ref } from "vue";
import { useSignUp } from "@/composables/useSignUp";
import router from "@/router/router";


const page: Ref<number> = ref(1);

const userRegister: Ref<postUser> = ref({
  name: "",
  email: "",
  password: "",
  time: new Date(),
  role: "user",
  phoneNumber: "",
  avata: "",
});
const nextPage2 = (data: any) => {
  page.value = 2;
  userRegister.value.name = data.name;
  userRegister.value.phoneNumber = data.phoneNumber;
  userRegister.value.time = data.date;
};
const nextPage3 = (data: any) => {
  page.value = 3;
  userRegister.value.email = data.email;
  userRegister.value.password = data.password;
};

const { err, signUp, isPending } = useSignUp();

const register = async () => {
  await signUp(
    userRegister.value.email,
    userRegister.value.password,
    userRegister.value.name,
    userRegister.value.phoneNumber,
    userRegister.value.time
  );
  if (err.value) {
    alert(err.value.message);
  }
  else {
    router.push('/authen/login')
  }
  console.log(isPending);
  
};

onMounted(() => {
  document.body.style.overflow = "hidden";
});
onUnmounted(() => {
  document.body.style.overflowY = "scroll";
});
</script>
