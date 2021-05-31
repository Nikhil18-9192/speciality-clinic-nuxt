<template>
  <div id="gallery-modal" @click="$emit('dismiss')">
    <div class="close" @click.stop="$emit('dismiss')">Close</div>
    <div class="images-container" @click.stop="">
      <div class="image">
        <img :src="image" />
      </div>
      <div class="control-btn">
        <button class="btn" @click="$emit('prev')">prev</button>
        <button class="btn" @click="$emit('next')">next</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GalleryModal',
  props: ['image'],
  data() {
    return {}
  },
  mounted() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
#gallery-modal {
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 2000;
  background: rgba(0, 0, 0, 0.616);
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .close {
    position: absolute;
    top: 16px;
    right: 24px;
    cursor: pointer;
    z-index: 111;
  }
  .images-container {
    width: 80%;
    height: 80%;
    @include for-phone-only {
      height: 80vh;
    }
    .image {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
      }
    }
  }
  .control-btn {
    padding-top: 20px;
    text-align: center;
    .btn {
      background: $primary;
      border: none;
      height: 35px;
      width: 65px;
      border-radius: 4px;
      font-size: 14px;
      text-transform: uppercase;
      margin-right: 20px;
      cursor: pointer;
      outline: none;
    }
  }
}
</style>
