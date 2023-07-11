import { createStore } from "vuex"

interface State{
  count:number
}


const store = createStore<State>({
  state:{
    count:1
  },
})

export default store
