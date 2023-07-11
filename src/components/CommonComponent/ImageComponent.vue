<template>
    <img  :src=ava  :class="class" @error="imageLoadError"/>
</template>

<script lang="ts">
    import { defineComponent } from 'vue'

    export default defineComponent({
        props:{
            link: String,
            class: String,
        },  
        data(props) {
            return {
                ava: props.link
            }
        },
        methods:{
            imageLoadError() {
                this.ava = "https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/266729211_328018512399343_9181005489835852035_n.jpg?stp=dst-jpg_s320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=CodWGnyvkqsAX9VbGfR&_nc_ht=scontent.fhan2-5.fna&oh=00_AfAuu2y8HMpi6nNn64lgnb-Q7f1JMugNzlbivJM46S_IJQ&oe=64B17F26"
            }
        }
    })
    

</script>