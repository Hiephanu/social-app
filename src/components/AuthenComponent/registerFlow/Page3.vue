<template>
  <div class="w-[48%] h-[90vh] bg-white mt-12 rounded-3xl">
    <div class="flex font-bold text-[20px] mt-8">
      <RouterLink to="/authen"
        ><i class="fa-solid fa-x ml-4 mt-2"></i
      ></RouterLink>
      <h1 class="ml-[7%]">Bước 3/3</h1>
    </div>
    <h1 class="mt-12 font-semibold text-6xl ml-[10%]">
      Thông tin về điều khoản
    </h1>
    <div class="ml-[10%] w-4/5">
      <p class="mt-8 font-bold ">Theo dõi nơi bạn thấy nội dung Twitter trên web</p>
      <p class="mt-8">
        Twitter sử dụng dữ liệu này để cá nhân hóa trải nghiệm của bạn. Lịch sử
        duyệt web này sẽ không được lưu với tên, email hay số điện thoại của
        bạn.
      </p>
      <p class="mt-8">
        Khi đăng ký nghĩa là bạn đồng ý với Điều khoản, Chính sách riêng tư và
        Sử dụng Cookie của chúng tôi. Twitter có thể sử dụng thông tin liên hệ,
        bao gồm địa chỉ email và số điện thoại của bạn cho các mục đích được nêu
        trong Chính sách riêng tư.
      </p>
      <input type="checkbox" name="" id="" class="mt-12">  Tôi hoàn toàn đồng ý
    </div>
    <div class="w-full mt-12 text-end">
        <button class="p-4 bg-black text-white hover:bg-gray-600 mr-12 rounded-xl" @click="submitRegister">
            Hoàn tất đăng ký
        </button>
    </div>
  </div>
</template>
<script lang="ts">
  export default {
    setup(props,{emit}){
      const submitRegister= ()=>{
        emit("submitRegister")
      }
      return{
        submitRegister,
        props
      }
    }
  }
</script>
