<template>
  <div
    id="toolbar"
    :class="showNavbar && scrollPosition !== 0 ? 'scroll-up' : ''"
  >
    <div class="container">
      <div :class="scrollPosition > 0 ? 'scroll-down' : 'logo'">
        <nuxt-link to="/">
          <img src="/logo.png" alt="logo image" />
        </nuxt-link>
      </div>
      <div class="nav-menu">
        <ul :class="!showNavbar ? 'hidden-navbar' : ''">
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
  top: 33px;
  left: 0;
  z-index: 2000;
  width: 100%;
  transition: 0.3s ease all;
  @include for-phone-only {
    display: none;
  }

  .container {
    display: flex;
    padding-left: 157px;
    align-items: flex-end;
    @include for-tablet-only {
      padding-left: 70px;
    }
    a {
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    .logo {
      width: 165px;
      height: 60px;
      transition: 0.3s ease all;
      // background: rgba(255, 255, 255, 0.2);
      // padding: 8px;
      // box-sizing: content-box;
    }
    .nav-menu {
      padding-left: 92px;
      @include for-tablet-only {
        padding-left: 30px;
      }
      ul {
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        transition: 0.6s ease all;
        li {
          margin-right: 45px;
          height: 100%;
          @include for-tablet-only {
            margin-right: 40px;
          }
          a {
            position: relative;
            font-weight: 500;
            font-size: 16px;
            transition: 0.3s ease all;
            font-family: 'Be Vietnam', sans-serif;
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
.scroll-down {
  width: 135px;
  height: 50px;
  transition: 0.3s ease all;
  // background: rgba(255, 255, 255, 0.2);
  // padding: 8px;
  // box-sizing: content-box;
}
.scroll-up {
  align-items: center;
  height: 103px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(22px);
  top: 0 !important;
  padding-top: 33px;
  transition: 0.3s ease all;
}
</style>
