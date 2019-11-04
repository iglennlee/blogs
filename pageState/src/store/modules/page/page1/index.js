import pageTypes from './types'

const module = {
  namespaced: true,
  state: {
    path: 'page/page1/',
    pageNum: 1
  },
  getters: {},
  mutations: {
    [pageTypes.TEST_PAGE1] (state, payload) {
      state.pageNum = payload
    }
  },
  actions: {
  }
}

export default module
