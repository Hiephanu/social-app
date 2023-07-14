import { createApp } from 'vue'
import router from "./router/router.js"
import './style.css'
import App from './App.vue'
import {createPinia} from 'pinia'

import HomeLayout from './layouts/HomeLayout.vue'
import AuthenLayout from './layouts/AuthenLayout.vue'
import FriendLayout from './layouts/FriendLayout.vue'

const app=createApp(App)

app.component("HomeLayout",HomeLayout) 
app.component("AuthenLayout",AuthenLayout)
app.component("FriendLayout",FriendLayout)

app.use(createPinia())
app.use(router).mount('#app')

