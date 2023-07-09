import { createRouter, createWebHistory } from 'vue-router'
import {Home, Profile, Explore, Bookmark, Notification, Messages, Authen} from "@/views/user/pages/index.vue"
const routes = [
    {path: "/", component: Home, meta:{layout: 'HomeLayout'},},
    {path: "/home", component: Home, meta:{layout: 'HomeLayout'}},
    {path: "/profile", component: Profile, meta:{layout: 'HomeLayout'}},
    {path: "/explore", component: Explore, meta:{layout: 'HomeLayout'}},
    {path: "/bookmark", component: Bookmark, meta:{layout: 'HomeLayout'}},
    {path: "/notification", component: Notification, meta:{layout: 'HomeLayout'}},
    {path: "/messages", component: Messages, meta:{layout: 'HomeLayout'}},
    {path: "/authen", component: Authen, meta:{layout: 'AuthenLayout'}}
]

const router = createRouter({
        history: createWebHistory(),
        routes,
    }
)

export default router;