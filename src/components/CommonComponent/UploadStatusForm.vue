<template>
    <div class="wrapper w-full border-2 border-dashed border-slate-100">
        <div class="flex items-center p-4 pt-12">
            <div class="w-full flex flex-1 gap-4">
                <div class="avatar overflow-hidden rounded-full w-20 h-20">
                    <img class = "w-20" src="https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/352223974_951677779312130_8593576021138458301_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j2rf-b4X3ioAX9SdBix&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBiQ7hqj7ZezMdmno9SoDBhCTq1Wmh7Z8OiNWElmD4Ciw&oe=64AF6E21" alt="">
                </div>

                <div class="form flex-1">
                    <div class="flex-1">
                        <input type="text" name="" id="" placeholder="What is happening?!" class="block border-2 h-20 rounded-full border-slate p-4 w-full ">
                    </div>
                    <div class="flex justify-between py-2 mx-6 my-2">
                        <div class="flex gap-4 items-center">
                            <i class="cursor-pointer fa-solid fa-paperclip"></i>
                            <i class="cursor-pointer fa-solid fa-image"></i>
                            <i class="cursor-pointer fa-solid fa-face-smile"></i>
                            <i class="cursor-pointer fa-solid fa-clipboard"></i>
                        </div>
                        
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full text-2xl ">Button</button>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        
    }
</script>