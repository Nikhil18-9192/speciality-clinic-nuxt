<template>
  <div id="toolbar">
    <div class="container">
      <div class="logo">
        <nuxt-link to="/">
          <img src="/logo.png" alt="logo image" />
        </nuxt-link>
      </div>
      <div class="nav-menu">
        <ul>
          <li v-for="(item, i) in menus" :key="i">
            <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  data() {
    return {
      menus: [
        { name: 'Services', path: '/' },
        { name: 'About', path: '/' },
        { name: 'Facilities', path: '/' },
        { name: 'Contact', path: '/' },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#toolbar {
  position: fixed;
  top: 40px;
  left: 135px;
  z-index: 999;
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
        li {
          margin-right: 56px;
          a {
            position: relative;
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            &.nuxt-link-exact-active {
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
}
</style>