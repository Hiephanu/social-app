<template>
    <div class="mb-4 leading-10">
    <div v-if=" _content.length > 150">
        <p v-if="!readMoreActivated">
            {{_content.slice(0, 150)}}...
            <span class="cursor-pointer hover:underline" v-if="!readMoreActivated" @click="activateReadMore">
            Read more
        </span>
        </p>
    </div>
    <span v-if="readMoreActivated || _content.length <= 150" v-html="content"></span>
</div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        props: {
            content: String,
        },
        data(props){
            return{
                _content: props.content ? props.content : "",
                readMoreActivated: false,
            }
        },
        methods:{
            activateReadMore(){
                this.readMoreActivated = true
            }
        }
    })
</script>