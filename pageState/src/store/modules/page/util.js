import { createNamespacedHelpers } from 'vuex'
import store from '@/store'
import dftModule from './default'
import modulesList from './index'

export async function getModuleFn (name) {
  if (!name) return null
  if (!modulesList.find(m => m === name)) return dftModule
  let res = dftModule
  await import(`./${name}/`).then((module) => {
    res = module.default
  })
  return res
}

export async function updatePageModuleFn (to) {
  const module = await getModuleFn(to.name)
  if (!module) return
  if (!store.state.page[to.name]) {
    store.registerModule(['page', to.name], module)
  }
}

export function generateVuexMapFn (path) {
  const {
    mapState,
    mapActions,
    mapMutations,
    mapGetters
  } = createNamespacedHelpers(path)
  return {
    mapPageState: mapState,
    mapPageGetters: mapGetters,
    mapPageMutations: mapMutations,
    mapPageActions: mapActions
  }
}
