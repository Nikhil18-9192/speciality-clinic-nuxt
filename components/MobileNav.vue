<template>
  <div id="mobile-nav">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/logo.png" alt="logo" />
      </nuxt-link>
    </div>

    <div class="menu-icon" @click="$store.commit('toggleMenuState')">
      <transition name="ham">
        <img v-if="!menuState" src="/ham-menu.svg" alt="ham icon" />
      </transition>
      <transition name="close">
        <img v-if="menuState" src="/cancel.svg" alt="close icon" />
      </transition>
    </div>

    <!-- <svg
      width="1000"
      height="1000"
      viewBox="0 0 1000 1000"
      xmlns="http://www.w3.org/2000/svg"
      @click="$store.commit('toggleMenuState')"
    >
      <path
        class="hamIcon"
        d="M958,403H42C19,403,0,384,0,361C0,338,19,319,42,319H958C981,319,1000,338,1000,361C1000,384,981,403,958,403zM958,83H42C19,83,0,65,0,42C0,19,19,0,42,0H958C981,0,1000,19,1000,42C1000,65,981,83,958,83zM958,722H42C19,722,0,704,0,681C0,658,19,639,42,639H958C981,639,1000,658,1000,681C1000,704,981,722,958,722z"
      />
    </svg> -->
  </div>
</template>

<script>
export default {
  name: 'MobileNav',
  data() {
    return {
      burger:
        'M958,403H42C19,403,0,384,0,361C0,338,19,319,42,319H958C981,319,1000,338,1000,361C1000,384,981,403,958,403zM958,83H42C19,83,0,65,0,42C0,19,19,0,42,0H958C981,0,1000,19,1000,42C1000,65,981,83,958,83zM958,722H42C19,722,0,704,0,681C0,658,19,639,42,639H958C981,639,1000,658,1000,681C1000,704,981,722,958,722z',
      close:
        'M555,500L989,67C1004,51,1004,27,989,11C973-4,949-4,933,11L500,445L67,11C51-4,27-4,11,11C-4,27-4,51,11,67L445,500L11,933C-4,949-4,973,11,989C19,996,29,1000,39,1000C49,1000,59,996,67,989L500,555L933,989C941,996,951,1000,961,1000C971,1000,981,996,989,989C1004,973,1004,949,989,933L555,500z',
      toggle: false,
      menuState: false,
    }
  },
  mounted() {
    const anime = this.$anime
    const timeline = anime.timeline({
      duration: 750,
      easing: 'easeInOutSine',
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
  .menu-icon {
    position: relative;
    width: 32px;
    height: 32px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      left: 0;
      top: 0;
      transition: 0.3s ease all;
    }
  }
}
.ham-enter-to,
.ham-leave-active {
  transform: translateX(-100px);
}
.ham-enter,
.ham-leave-to {
  opacity: 0;
}

.close-enter-to,
.close-leave-active {
  transform: translateY(-100px);
}
.close-enter,
.close-leave-to {
  opacity: 0;
}
</style>