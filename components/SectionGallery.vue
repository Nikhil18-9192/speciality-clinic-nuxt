<template>
  <div id="section-gallery">
    <div class="image-container">
      <div class="image" v-for="img in images" :key="img">
        <img :src="img" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionGallery',
  props: ['images'],
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
        &:hover {
          transform: scale(1.08);
          filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.26));
        }
      }
    }
  }
}
</style>
