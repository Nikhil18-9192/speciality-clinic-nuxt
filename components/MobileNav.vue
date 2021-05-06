<template>
  <div id="mobile-nav">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/logo.png" alt="logo" />
      </nuxt-link>
    </div>
    <!-- <MenuButton /> -->
    <svg
      width="10"
      height="11"
      viewBox="0 0 10 11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="toggleMenu"
    >
      <path
        class="hamIcon"
        d="M0 1.5H10M0 5.5H10M0 9.5H10"
        stroke-width="1.3"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MobileNav',
  data() {
    return {
      burger: 'M0 1.5H10M0 5.5H10M0 9.5H10',
      close: 'M1.00128 1.70771L8.55313 11.0335M1.1951 10.7188L8.74694 1.39307',
      toggle: false,
      menuState: false,
    }
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
  methods: {
    toggleMenu() {
      const anime = this.$anime
      const timeline = anime.timeline({
        duration: 750,
        easing: 'easeOutExpo',
      })
      timeline.add({
        targets: '.hamIcon',
        d: [{ value: this.toggle ? this.burger : this.close }],
      })
      if (!this.toggle) {
        this.toggle = true
        this.$store.commit('toggleMenuState')
      } else {
        this.toggle = false
        this.$store.commit('toggleMenuState')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
#mobile-nav {
  position: fixed;
  width: 100%;
  top: 12px;
  display: flex;
  justify-content: space-between;
  z-index: 2000;
  padding: 0 15px;
  @include for-tablet-landscape-up {
    display: none;
  }
  @include for-tablet-only {
    display: none;
  }

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
  svg {
    width: 35px;
    height: 35px;
    object-fit: contain;
    stroke: #000;
  }
}
</style>