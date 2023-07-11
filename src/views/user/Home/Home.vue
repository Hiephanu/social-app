<template>
    <div>
        <UploadStatusForm></UploadStatusForm>
        <div class="">
            <Post/>
            <Post/>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import UploadStatusForm from '@/components/CommonComponent/UploadStatusForm.vue';
    import Post from '@/components/CommonComponent/Post.vue';
</script>