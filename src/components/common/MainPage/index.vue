<template>
  <div class="components MainPage flex-v">
    <div class="Top"></div>
    <div class="Content flex-item">
      <slot></slot>
    </div>
    <div class="Bottom" v-if="!HideMainTab">
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'MainPage',
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      MainTabDefaultColor: x => x.MainTabDefaultColor, // 页底tab默认色值
      MainTabActiveColor: x => x.MainTabActiveColor, // 页底tab选中色值
      HideMainTab: x => x.HideMainTab, // 隐藏页底tab
      MainTabActiveId: x => x.MainTabActiveId, // 页底tab选中id
      MainTabArr: x => x.MainTabArr // 页底tab数据
    })
  },
  created () {
  },
  mounted () {
    this.$nextTick(() => {
    })
  },
  methods: {
    ...mapMutations([
      'EditHideMainTab',
      'EditMainTabActiveId'
    ])
  }
}
</script>

<style lang="scss" scoped>
@import "page.scss";
</style>
