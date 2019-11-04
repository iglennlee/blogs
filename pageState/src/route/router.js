import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import { updatePageModuleFn } from '@/store/modules/page/util'

Vue.use(Router)
const router = new Router({
  mode: 'history',
  base: '/',
  routes
})

router.beforeResolve(async (to, from, next) => {
  await updatePageModuleFn(to, from)
  next()
})

export default router
