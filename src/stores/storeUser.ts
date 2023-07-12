import { defineStore } from "pinia";
import user from "@/types/user";
export const storeUser= defineStore({
  id:'user',
  state:()=>({
    user:{} as user
  }),
  getters: {
    
  },
  actions:{
    
  }
})