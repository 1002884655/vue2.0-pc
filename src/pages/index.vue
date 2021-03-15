<template>
  <div class="Page">
    <MainPage :HideMainTab="false">
      <span>123</span>
    </MainPage>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState: mapUserState, mapActions: mapUserActions } = createNamespacedHelpers('user')
const MainPage = () => import('@/components/common/MainPage')
export default {
  name: 'index',
  components: {
    MainPage
  },
  data: () => {
    return {
    }
  },
  computed: {
    ...mapUserState({
      UserInfo: x => x.UserInfo
    })
  },
  created () {
    this.Init()
  },
  methods: {
    ...mapUserActions([
      'GetUserInfoByToken'
    ]),
    Init () {
      this.GetUserInfoByToken({ params: { token: `6040529af14c2e325cd57cfd` } }).then(() => { })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "page.scss";
</style>
