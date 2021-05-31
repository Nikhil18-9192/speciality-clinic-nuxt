<template>
  <div id="section-gallery">
    <GalleryModal
      v-if="modal"
      :image="images[selectedIndex]"
      @dismiss="modal = false"
      @next="
        selectedIndex < images.length - 1
          ? selectedIndex++
          : (selectedIndex = 0)
      "
      @prev="
        selectedIndex > 0
          ? selectedIndex--
          : (selectedIndex = images.length - 1)
      "
    />
    <div class="image-container">
      <div
        class="image"
        v-for="(img, i) in images"
        :key="img"
        @click="viewImage(i)"
      >
        <img :src="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionGallery',
  props: ['images'],
  data() {
    return {
      selectedIndex: 0,
      modal: false,
    }
  },
  methods: {
    viewImage(i) {
      this.modal = true
    },
  },
}
</script>

<style lang="scss" scoped>
#section-gallery {
  width: 100%;
  position: relative;
  padding: 32px 0;
  .image-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 60px;
    // margin-bottom: 70px;
    @include for-phone-only {
      grid-template-columns: auto;
      gap: 30px;
    }
    @include for-tablet-only {
      gap: 30px;
    }
    .image {
      width: 100%;
      max-width: 349px;
      height: 100%;
      transition: 0.3s ease all;
      margin-bottom: 24px;
      cursor: pointer;
      @include for-big-desktop-up {
        max-width: 449px;
        height: 225px;
      }
      img {
        width: 100%;
        height: 193px;
        object-fit: cover;
        border-radius: 4px;
        transition: 0.3s ease all;
        background: #f5f5f5;
        &:hover {
          transform: scale(1.08);
          filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.26));
        }
      }
    }
  }
}
</style>
