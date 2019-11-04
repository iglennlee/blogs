/* use function to create module's state, getters etc is to avoid data contamination */
const module = {
  namespaced: true,
  state () {
    return {}
  },
  getters () {
    return {}
  },
  mutations () {
    return {}
  },
  actions () {
    return {}
  }
}

export default module
