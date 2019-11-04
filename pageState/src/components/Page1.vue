<template>
  <div class="page1-container">
    this is page 1
    <button @click="changePageNumFN">change pageNum</button>
  </div>
</template>
<script>
/**
  component path
  import Page1 from '@/components/Page1.vue'
*/

import { mapState } from 'vuex'
import pageTypes from '@/store/modules/page/page1/types'
import { generateVuexMapFn } from '@/store/modules/page/util'
import pathMap from '@/store/modules/page/pathMap'

const { mapPageState } = generateVuexMapFn(pathMap.get('page1'))

export default {
  name: 'Page1',
  computed: {
    ...mapState(['userInfo']),
    ...mapPageState(['path', 'pageNum'])
  },
  created () {
    console.log('TCL: created -> this.userInfo', JSON.stringify(this.userInfo))
    console.log('TCL: created -> this.path', this.path)
    console.log('TCL: created -> this.pageNum', this.pageNum)
  },
  methods: {
    changePageNumFN () {
      this.$store.commit(`${this.path}${pageTypes.TEST_PAGE1}`, Math.floor(Math.random() * 10))
      this.$nextTick(() => {
        console.log('TCL: changePageNumFN -> this.pageNum', this.pageNum)
      })
    }
  }
}
</script>
<style scoped>
</style>
