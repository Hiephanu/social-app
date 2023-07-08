import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import {Home, Profile, Explore, Bookmark, Notification, Messages} from "./pages/user/index.vue"
import './style.css'
import App from './App.vue'

const routes = [
    {path: "/", component: Home},
    {path: "/home", component: Home},
    {path: "/profile", component: Profile},
    {path: "/explore", component: Explore},
    {path: "/bookmark", component: Bookmark},
    {path: "/notification", component: Notification},
    {path: "/messages", component: Messages}
]

const router = createRouter({
        history: createWebHistory(),
        routes,
    }
)
createApp(App).use(router).mount('#app')
