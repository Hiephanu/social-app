import { defineStore } from "pinia";
import type {getUser, postUser} from "@/types/user";

export const storeUser= defineStore({
  id:'user',
  state:()=>({
    user:{} as getUser
  }),
  getters: {
    
  },
  actions:{
    
  }
})