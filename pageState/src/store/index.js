import Vue from 'vue'
import Vuex from 'vuex'
import state from '@/store/state'
import mutations from '@/store/mutations'
import actions from '@/store/actions'
import getters from '@/store/getters'
import page from '@/store/modules/page/default'
Vue.use(Vuex)

const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    page: page
  }
})

export default store
