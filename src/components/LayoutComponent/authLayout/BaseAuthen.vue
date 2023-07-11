<template>
  <div class="grid grid-cols-5 gap-12">
    <div class="col-span-2 h-[110%]">
      <img
        src="https://br.atsit.in/vi/wp-content/uploads/2021/09/twitter-dang-thu-nghiem-cac-tinh-nang-moi-de-xoa-nguoi-theo-doi-va-chia-se-phuong-tien-canh-tranh.jpg"
        alt=""
        class="h-full"
      />
    </div>
    <div class="col-span-3">
      <i class="fa-brands fa-twitter text-[60px] text-blue-400 mt-12"></i>
      <h1 class="text-[40px] font-bold mt-24 w-4/5 leading-normal">
        Cùng nhau kết nối 1 cộng đồng tuyệt vời
      </h1>
      <h1 class="text-[40px] font-bold w-4/5 mt-4">Tham gia ngay hôm nay.</h1>
      <div class="mt-8">
        <div
          class="flex p-4 border-[2px] border-gray-100 w-1/2 justify-center rounded-full cursor-pointer"
        >
          <img src="../../../assets//img/google.png" alt="" class="w-12" />
          <p class="ml-4">Đăng nhập bằng Google</p>
        </div>
        <div
          class="flex p-4 border-[2px] border-gray-100 w-1/2 justify-center rounded-full mt-8 cursor-pointer"
        >
          <img src="../../../assets//img/facebook.png" alt="" class="w-12" />
          <p class="ml-4">Đăng nhập với Facebook</p>
        </div>
      </div>
      <div class="w-1/2 text-center">
        <p class="mt-8">Hoặc</p>
      </div>
      <button
        class="mt-8 p-4 bg-blue-400 w-1/2 text-center text-white rounded-full hover:bg-blue-300"
      >
        Tạo tài khoản
      </button>
      <h2 class="mt-24">Bạn đã có tài khoản ?</h2>
      <RouterLink to="/authen/login">
        <div
          class="w-1/2 text-center text-blue-400 bg-white p-4 border-2 border-gray-200 rounded-full mt-12 cursor-pointer hover:bg-blue-100"
        >
          Đăng nhập
        </div>
      </RouterLink>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
