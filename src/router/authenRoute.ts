import Authen from "@/views/user/Authen/Authen.vue"
import loginPage from "@/views/user/Authen/loginPage.vue"
import registerPage from '@/views/user/Authen/registerPage.vue'
export default {
    path: "/authen", 
    component: Authen, 
    meta:{layout: 'AuthenLayout'},
    children:[
        {
            path:'login',
            component:loginPage,
            meta:{
                layout:'AuthenLayout'
            }
        },
        {
            path:'register',
            component:registerPage,
            meta:{
                layout:'AuthenLayout'
            }
        }
    ]
}