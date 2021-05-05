<template>
  <div class="home-page">
    <Home />
    <Services />
    <Facilities />
    <About />
  </div>
</template>

<script>
import Services from '~/components/Services.vue'
import Facilities from '~/components/Facilities.vue'
export default {
  components: { Services, Facilities },
  name: 'HomePage',
}
</script>

<style lang="scss" scoped>
#home-page {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
