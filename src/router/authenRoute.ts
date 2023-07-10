import Authen from "@/views/user/Authen/Authen.vue"
import loginPage from "@/views/user/Authen/loginPage.vue"
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
        }
    ]
}