/** Because file (@/store/module/page/pathMap.js) needs import routes while routes required component files
 * and pathMap.js is imported by some component file.So there are conflicts about importing.
 * That 's why need to extract the base route to this file */

const base = [
  {
    path: '/',
    name: 'index',
    redirect: '/page1'
  },
  {
    path: '/page1',
    name: 'page1',
    component: null
  },
  {
    path: '/page2',
    name: 'page2',
    component: null
  },
  {
    path: '/page3',
    name: 'page3',
    component: null
  }
]

export default base
