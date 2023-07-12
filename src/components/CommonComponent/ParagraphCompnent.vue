<template>
    <div class="mb-4 leading-10">
    <div v-if=" content.length > 150">
        <p v-if="!readMoreActivated">
            {{content.slice(0, 150)}}...
            <span class="cursor-pointer hover:underline" v-if="!readMoreActivated" @click="activateReadMore">
            Read more
        </span>
        </p>
    </div>
    <span v-if="readMoreActivated || content.length <= 150" v-html="content"></span>
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
                content: props.content ? props.content : "",
                readMoreActivated: false,
            }
        },
        methods:{
            activateReadMore(){
                console.log(this.content)
                this.readMoreActivated = true
            }
        }
    })
</script>