
<template>
    <div>
        <Login/>
    </div>
</template>
<script setup lang="ts">
    import Login from '@/components/AuthenComponent/login/Login.vue';
    // import { projectAuth,db } from '@/configs/firebase';
    // import { doc, getDoc } from 'firebase/firestore';

    // if(projectAuth.currentUser){
    //     const userId:string =projectAuth.currentUser?.uid
    //     const refDoc = doc(db,"users",userId)

    //     const getData = async ()=>{
    //        const dataUser =  await getDoc(refDoc)
    //        console.log(dataUser);
           
    //     }
    //     getData()
    // }

</script>