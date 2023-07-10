import { createApp } from 'vue'
import router from "./router/router.js"
import './style.css'
import App from './App.vue'

import HomeLayout from './layouts/HomeLayout.vue'
import AuthenLayout from './layouts/AuthenLayout.vue'

const app=createApp(App)


app.component("HomeLayout",HomeLayout) 
app.component("AuthenLayout",AuthenLayout)


app.use(router).mount('#app')

