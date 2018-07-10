import vue from 'vue'
import Vuex from 'vuex'
import ads from './ads'
import user from './user'
import shared from './shared'
import orders from './orders'

vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    ads,
    user,
    shared,
    orders
  }
})
