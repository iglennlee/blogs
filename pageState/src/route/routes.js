/* eslint-disable no-prototype-builtins */
/* eslint-disable no-param-reassign */

import base from './base'
import Page1 from '@/components/Page1.vue'
import Page2 from '@/components/Page2.vue'
import Page3 from '@/components/Page3.vue'

/* [<route name>, <component>] */
const components = [
  ['page1', Page1],
  ['page2', Page2],
  ['page3', Page3]
]
const componentsMap = new Map(components)
const routes = base.map((item) => {
  if (item.hasOwnProperty('component')) {
    item.component = componentsMap.get(item.name)
  }
  return item
})

export default routes
