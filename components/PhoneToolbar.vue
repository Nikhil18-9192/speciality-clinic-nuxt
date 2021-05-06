<template>
  <div id="phone-toolbar">
    <ul>
      <li v-for="(item, i) in menus" :key="i">
        <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { menus } from '@/utils'
export default {
  name: 'PhoneToolbar',
  computed: {
    menus() {
      return menus
    },
  },
}
</script>

<style lang="scss" scoped>
#phone-toolbar {
  width: 60%;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 1000;
  background: $primary;
  overflow: hidden;
  ul {
    list-style: none;
    padding: 0;
    margin-top: 90px;
    margin-left: 24px;
    li {
      margin-bottom: 15px;
      a {
        font-weight: 500;
        font-size: 28px;
        &.nuxt-link-exact-active {
          background: linear-gradient(to bottom, #000000 0%, #0079be 100%);
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
}
</style>