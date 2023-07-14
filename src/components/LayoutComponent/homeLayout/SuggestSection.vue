<template>
    <div class="w-full border-2 border-slate-200 rounded-lg h-full font-sans p-2 mt-2">
        <h3 class="font-bold pb-2">Suggested for you</h3>
        <div class="" v-for="friend in friends">
            <FriendTag :name="friend.name" :verified="friend.verified" :avatar="friend.avatar" :suggest_reason="friend.suggest_reason"/>
        </div>
    </div>
</template>

<script  lang="ts">
    import FriendTag from '@/components/CommonComponent/FriendTag.vue';
    import ImageComponent from '@/components/CommonComponent/ImageComponent.vue';
    import { defineComponent } from 'vue';

    export default defineComponent({
        data(){
            return {
                friends:[
                    {name: "jthinh", 
                    verified: true,
                    avatar: "https://pbs.twimg.com/media/F03tBzNXoAAJydR?format=jpg&name=small",
                    suggest_reason:"Qua dep trai"
                    },
                    {name: "jthinh1", 
                    verified: false,
                    avatar: "https://pbs.twimg.com/media/F0y47uyXwAAF1T0?format=jpg&name=small",
                    suggest_reason:"Qua dep trai"
                    },
                    {name: "jthinh2", 
                    verified: true,
                    avatar: "https://pbs.twimg.com/media/F01T91SWAAA5Cft?format=jpg&name=small",
                    suggest_reason:"Qua dep trai"
                    },
                    {name: "jthinh3", 
                    verified: true,
                    avatar: "https://pbs.twimg.com/media/F03qtkDXoAUishr?format=jpg&name=small",
                    suggest_reason:"Qua dep trai"
                    }
                ]
            }
        },
        components:{
            FriendTag,
            ImageComponent
        }
    })
</script>