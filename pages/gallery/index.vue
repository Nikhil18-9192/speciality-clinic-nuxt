<template>
  <div id="gallery">
    <GalleryModal
      v-if="modal"
      :index="selectedIndex"
      :images="images"
      @dismiss="modal = false"
    />
    <div class="route-btn" @click="$router.push('/#services')">
      <img src="/back.svg" alt="back icon" />
    </div>
    <div class="section">
      <span class="anchor" id="implants"></span>
      <div class="title">
        <h1>Implants</h1>
      </div>
      <div class="image-container">
        <div
          class="image"
          v-for="(item, i) in implantsImages"
          :key="i"
          @click="viewImage(i, implantsImages)"
        >
          <img :src="item.image" alt="" />
          <h4 class="image-title">{{ item.title }}</h4>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="anchor" id="esthetic"></span>
      <div class="title">
        <h1>Esthetic Treatments</h1>
      </div>
      <div class="image-container">
        <div
          class="image"
          v-for="(item, i) in estheticImages"
          :key="i"
          @click="viewImage(i, estheticImages)"
        >
          <img :src="item.image" alt="" />
          <h4 class="image-title">{{ item.title }}</h4>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="anchor" id="rootCanal"></span>
      <div class="title">
        <h1>Root Canal Treatment</h1>
      </div>
      <div class="image-container">
        <div
          class="image"
          v-for="(item, i) in rootCanelImages"
          :key="i"
          @click="viewImage(i, rootCanelImages)"
        >
          <img :src="item.image" alt="" />
          <h4 class="image-title">{{ item.title }}</h4>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="anchor" id="orthodontics"></span>
      <div class="title">
        <h1>Orthodontics</h1>
      </div>
      <div class="image-container">
        <div
          class="image"
          v-for="(item, i) in orthodonticsImages"
          :key="i"
          @click="viewImage(i, orthodonticsImages)"
        >
          <img :src="item.image" alt="" />
          <h4 class="image-title">{{ item.title }}</h4>
        </div>
      </div>
    </div>
    <div class="section">
      <span class="anchor" id="gumTreatment"></span>
      <div class="title">
        <h1>Gum Treatments</h1>
      </div>
      <div class="image-container">
        <div
          class="image"
          v-for="(item, i) in gumTreatmentsImages"
          :key="i"
          @click="viewImage(i, gumTreatmentsImages)"
        >
          <img :src="item.image" alt="" />
          <h4 class="image-title">{{ item.title }}</h4>
        </div>
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
      images: [],
    }
  },
  computed: {
    implantsImages() {
      return implantsImages
    },
    estheticImages() {
      return estheticImages
    },
    rootCanelImages() {
      return rootCanelImages
    },
    orthodonticsImages() {
      return orthodonticsImages
    },
    gumTreatmentsImages() {
      return gumTreatmentsImages
    },
  },
  methods: {
    viewImage(i, images) {
      this.selectedIndex = i
      this.images = images
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
    top: 120px;
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

    img {
      width: 24px;
      height: 24px;
      object-fit: contain;
    }
  }
  .section {
    margin-bottom: 55px;
    .anchor {
      display: block;
      height: 92px;
      margin-top: -92px;
      visibility: hidden;
    }
  }
  #implants {
    margin-top: 25px;
  }
  .title {
    text-align: center;
    padding-bottom: 80px;
    @include for-phone-only {
      padding-top: 0;
      padding-bottom: 40px;
    }
    @include for-tablet-only {
      padding-top: 20px;
      padding-bottom: 40px;
    }
    h1 {
      font-weight: 500;
      font-size: 28px;
      letter-spacing: 0.035em;
    }
  }
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
