/** a map for yard path, should not end with '/', eg:page/home/ => [wrong] */

import base from '@/route/base'

const res = base
  .filter(route => route.name && route.name.length)
  .map(route => [route.name, `page/${route.name}`])
const map = new Map(res)

export default map
