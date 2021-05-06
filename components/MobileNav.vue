<template>
  <div id="mobile-nav">
    <div class="logo">
      <nuxt-link to="/">
        <img src="/logo.png" alt="logo" />
      </nuxt-link>
    </div>
    <MenuButton />
  </div>
</template>

<script>
export default {
  name: 'MobileNav',
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
}
</style>