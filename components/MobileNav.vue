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
      @click="$store.commit('toggleMenuState')"
    >
      <path class="hamIcon" d="M0 0.5H8M0 3.5H8M0 6.5H8" stroke-width="1.3" />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'MobileNav',
  data() {
    return {
      burger: 'M0 0.5H8M0 3.5H8M0 6.5H8',
      close:
        'M1 1.19583L4.86842 4.07448M4.86842 4.07448L8.79982 7M4.86842 4.07448L1.20018 6.80417M4.86842 4.07448L9 1',
      toggle: false,
      menuState: false,
    }
  },
  mounted() {
    const anime = this.$anime
    const timeline = anime.timeline({
      duration: 750,
      easing: 'easeOutExpo',
    })
    timeline.add({
      targets: '.hamIcon',
      d: [
        {
          value: !this.menuState ? this.burger : this.close,
        },
      ],
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
      const anime = this.$anime
      const timeline = anime.timeline({
        duration: 750,
        easing: 'easeOutExpo',
      })
      timeline.add({
        targets: '.hamIcon',
        d: [
          {
            value: !this.menuState ? this.burger : this.close,
          },
        ],
      })
    },
  },
  methods: {},
}
</script>

<style lang="scss" scoped>
#mobile-nav {
  position: fixed;
  width: 100%;
  top: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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