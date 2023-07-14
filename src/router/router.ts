import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/user/Home/Home.vue'
import Profile from "@/views/user/Profile/Profile.vue"
import Messages from "@/views/user/Messages/Messages.vue"
import Explore from "@/views/user/Explore/Explore.vue"
import Notification from "@/views/user/Notification/Notification.vue"
import Bookmark from "@/views/user/Bookmark/Bookmark.vue"
import authenRoute from './authenRoute'

const routes = [
    {path: "/", component: Home, meta:{layout: 'HomeLayout'},},
    {path: "/home", component: Home, meta:{layout: 'HomeLayout'}},
    {path: "/profile", component: Profile, meta:{layout: 'HomeLayout'}},
    {path: "/explore", component: Explore, meta:{layout: 'HomeLayout'}},
    {path: "/bookmark", component: Bookmark, meta:{layout: 'HomeLayout'}},
    {path: "/notification", component: Notification, meta:{layout: 'HomeLayout'}},
    {path: "/messages", component: Messages, meta:{layout: 'HomeLayout'}},
    authenRoute
]

const router = createRouter({
        history: createWebHistory(),
        routes,
        linkActiveClass: 'router-active'
    }
)

export default router;