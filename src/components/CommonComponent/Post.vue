<template>
    <div class="border-2 border-rose-600 w-full pb-8">
        <div class="flex items-center p-4 pt-8">
            <div class="w-full flex flex-1 gap-6">
                <div class="avatar rounded-full w-24 h-24">
                    <ImageComponent :link=avatar class="rounded-full w-24"/>
                </div>


                <div class="text-2xl flex-1">
                    <div class="flex gap-4 items-center pb-4 pt-2">
                        <h2 class="font-bold">{{ name }}</h2>
                        <i class="fa-solid fa-check" style="color: #4287ff;"></i>
                    </div>
                    
                    <h3 class="mb-4 leading-10">{{ postContent }}</h3>
                    <img class="w-2/4 rounded-[2rem] m-auto" src="https://vn.blog.kkday.com/wp-content/uploads/chup-anh-dep-bang-dien-thoai-25.jpg"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import ImageComponent from './ImageComponent.vue';
    const avatar = "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-6/352223974_951677779312130_8593576021138458301_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=j2rf-b4X3ioAX9SdBix&_nc_ht=scontent.fhan2-5.fna&oh=00_AfBiQ7hqj7ZezMdmno9SoDBhCTq1Wmh7Z8OiNWElmD4Ciw&oe=64AF6E21"
    const name = "jthinh"
    const postContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
</script>