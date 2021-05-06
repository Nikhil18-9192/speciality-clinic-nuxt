<template>
  <div>
    <Toolbar v-if="$route.path !== '/gallery'" />
    <transition name="slide">
      <PhoneToolbar v-if="menuState" />
    </transition>

    <MobileNav v-if="$route.path !== '/gallery'" />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuState: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', (e) => {
      this.$store.commit('SET_SCROLL_POSITION', parseInt(window.scrollY))
    })
  },
  computed: {
    storeMenuState: function () {
      return this.$store.getters.getMenuState
    },
  },
  watch: {
    storeMenuState: function (newState) {
      this.menuState = newState
    },
  },
}
</script>
<style >
html {
  font-family: 'Satoshi', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
body {
  color: #000000;
}

a {
  text-decoration: none;
  color: #000;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.9s cubic-bezier(0.16, 1, 0.5, 1);
}
.slide-enter,
.slide-leave-active {
  transform: translateX(100%);
}
</style>
