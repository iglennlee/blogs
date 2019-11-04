<template>
  <div class="page2-container">this is page 2</div>
</template>
<script>
/**
  component path
  import Page2 from '@/components/Page2.vue'
*/

import { mapState } from 'vuex'
import pageTypes from '@/store/modules/page/page1/types'
import { generateVuexMapFn } from '@/store/modules/page/util'
import pathMap from '@/store/modules/page/pathMap'

const { mapPageState } = generateVuexMapFn(pathMap.get('page2'))

export default {
  name: 'Page2',
  computed: {
    ...mapState(['userInfo']),
    ...mapPageState(['path', 'pageNum'])
  },
  created () {
    console.log('TCL: created -> this.userInfo', JSON.stringify(this.userInfo))
    console.log('TCL: created -> this.path', this.path)
    console.log('TCL: created -> this.pageNum', this.pageNum)
  }
}
</script>
<style scoped>
</style>
