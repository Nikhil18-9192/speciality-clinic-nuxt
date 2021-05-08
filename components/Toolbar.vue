<template>
  <div id="toolbar">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/">
          <img src="/logo.png" alt="logo image" />
        </nuxt-link>
      </div>
      <div class="nav-menu">
        <ul :class="{ 'hidden-navbar': !showNavbar }">
          <li v-for="(item, i) in menus" :key="i">
            <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { menus } from '@/utils'
export default {
  name: 'Toolbar',
  data() {
    return {
      lastScrollPosition: 0,
      showNavbar: true,
    }
  },
  computed: {
    menus() {
      return menus
    },
    scrollPosition: function () {
      return this.$store.getters.getScrollPosition
    },
  },
  watch: {
    scrollPosition: function () {
      if (this.scrollPosition < 0) {
        return
      }
      this.showNavbar = this.scrollPosition < this.lastScrollPosition
      this.lastScrollPosition = this.scrollPosition
    },
  },
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: fixed;
  top: 40px;
  left: 157px;
  z-index: 999;
  @include for-phone-only {
    display: none;
  }
  @include for-tablet-only {
    left: 70px;
  }
  .container {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    .logo {
      width: 148px;
      a {
        img {
          width: 100%;
          height: 54px;
          object-fit: contain;
        }
      }
    }
    .nav-menu {
      padding-left: 92px;
      ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        transition: 0.6s ease all;
        li {
          margin-right: 56px;
          height: 100%;
          a {
            position: relative;
            font-weight: 500;
            font-size: 16px;
            transition: 0.3s ease all;
            &:hover {
              background: linear-gradient(to bottom, #000000 0%, #0079be 100%);
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            &.nuxt-link-exact-active {
              background: linear-gradient(to bottom, #000000 0%, #0079be 100%);
              background-clip: text;
              -webkit-text-fill-color: transparent;
              &::after {
                content: '';
                width: 8px;
                height: 1px;
                background: $primary;
                position: absolute;
                top: 27px;
                left: 25px;
              }
            }
          }
        }
      }
    }
  }
  .hidden-navbar {
    opacity: 0;
  }
}
</style>
