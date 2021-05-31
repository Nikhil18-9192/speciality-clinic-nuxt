<template>
  <div id="gallery-v2">
    <div class="route-btn">
      <div class="back">
        <img src="/back.svg" alt="back icon" @click="$router.push('/')" />
        <span>Go Back</span>
      </div>
      <SelectBox
        :options="options"
        v-model="selection"
        @input="refreshGallery"
      />
    </div>
    <div class="wrapper">
      <SectionGallery :images="images" />
    </div>
  </div>
</template>

<script>
import { galleryCategories, getSrcForCategory } from '@/utils'
export default {
  name: 'GalleryV1',
  computed: {
    options: function () {
      return galleryCategories
    },
  },
  data() {
    return {
      images: [],
      selection: galleryCategories[0],
    }
  },
  mounted() {
    this.refreshGallery()
  },
  methods: {
    importAll(r) {
      return r.keys().map(r)
    },
    refreshGallery() {
      const src = getSrcForCategory(this.selection)
      this.images = this.importAll(src)
    },
  },
}
</script>

<style lang="scss" scoped>
#gallery-v2 {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 157px;
  @include for-phone-only {
    padding: 0 15px;
    padding-top: 80px;
  }
  padding-top: 120px;

  .route-btn {
    position: sticky;
    z-index: 111;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 24px;
      height: 24px;
      margin-bottom: -4px;
      object-fit: contain;
      margin-right: 1.2rem;
      cursor: pointer;
    }

    span {
      line-height: auto;
      @include for-phone-only {
        display: none;
      }
    }
  }

  .wrapper {
    position: relative;
    width: 100%;
  }
}
</style>
