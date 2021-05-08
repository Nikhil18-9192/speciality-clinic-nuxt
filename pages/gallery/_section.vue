<template>
  <div id="gallery">
    <GalleryModal
      v-if="modal"
      :index="selectedIndex"
      :images="images"
      @dismiss="modal = false"
    />
    <div class="route-btn" @click="$router.push('/')">
      <p>Home</p>
    </div>
    <div class="title">
      <h1>
        Gallery<span>/{{ section.replace('-', ' ') }}</span>
      </h1>
    </div>
    <div class="image-container">
      <div
        class="image"
        v-for="(item, i) in images"
        :key="i"
        @click="viewImage(i)"
      >
        <img :src="item.image" alt="" />
        <h4 class="image-title">{{ item.title }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import {
  implantsImages,
  estheticImages,
  rootCanelImages,
  orthodonticsImages,
  gumTreatmentsImages,
} from '@/utils'
export default {
  name: 'GalleryPage',
  data() {
    return {
      selectedIndex: 0,
      modal: false,
      section: '',
    }
  },
  mounted() {
    console.log(this.$route.params.section)
    this.section = this.$route.params.section
  },
  computed: {
    images() {
      if (this.section == 'implants') {
        return implantsImages
      } else if (this.section == 'esthetic-treatments') {
        return estheticImages
      } else if (this.section == 'root-canal') {
        return rootCanelImages
      } else if (this.section == 'orthodontics') {
        return orthodonticsImages
      } else if (this.section == 'gum-treatments') {
        return gumTreatmentsImages
      }
    },
  },
  methods: {
    viewImage(i) {
      this.selectedIndex = i
      this.modal = true
    },
  },
}
</script>

<style lang="scss" scoped>
#gallery {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 157px;
  @include for-phone-only {
    padding: 0 15px;
  }
  @include for-tablet-only {
    padding: 0 70px;
  }
  .route-btn {
    display: flex;
    position: fixed;
    top: 110px;
    left: 100px;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    z-index: 111;
    @include for-phone-only {
      top: 25px;
      left: 10px;
    }
    @include for-tablet-only {
      top: 45px;
      left: 65px;
    }

    p {
      margin-left: 7px;
      font-weight: normal;
      font-size: 14px;
      line-height: 146.69%;
      text-align: center;
      letter-spacing: 0.12em;
    }
  }
  .title {
    text-align: center;
    padding-top: 68px;
    padding-bottom: 80px;
    @include for-phone-only {
      padding-top: 24px;
      padding-bottom: 40px;
    }
    @include for-tablet-only {
      padding-top: 20px;
      padding-bottom: 40px;
    }
    h1 {
      font-weight: 500;
      font-size: 28px;
      line-height: 43px;
      letter-spacing: 0.035em;
      span {
        font-size: 14px;
        color: #6d6d6d;
        font-weight: 400;
        text-transform: capitalize;
      }
    }
  }
  .image-container {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 60px;
    margin-bottom: 70px;
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
      cursor: pointer;
      @include for-big-desktop-up {
        max-width: 449px;
        height: 225px;
      }
      img {
        width: 100%;
        height: 193px;
        object-fit: cover;
        &:hover {
          transform: scale(1.08);
          filter: drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.26));
          transition: 0.3s ease all;
        }
      }
      .image-title {
        padding-top: 8px;
        text-align: center;
        text-transform: capitalize;
      }
    }
  }
}
</style>