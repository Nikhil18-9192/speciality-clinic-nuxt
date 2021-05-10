<template>
  <div id="facilities">
    <div class="custom-shape-divider-top-1620213850">
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z"
          class="shape-fill"
        ></path>
      </svg>
    </div>
    <div class="overlay"></div>
    <div class="title">
      <h2>Facilities At Our Clinic</h2>
    </div>
    <div class="card-container">
      <div
        class="card"
        v-for="(item, i) in facelities"
        :key="i"
        data-aos="fade-up"
        data-aos-duration="900"
        data-aos-offset="200"
        :data-aos-delay="i * 200"
      >
        <div class="top">
          <img :src="item.icon" :alt="item.name" />
        </div>
        <div class="bottom">
          <p>{{ item.name }}</p>
          <ul>
            <li v-for="(item, i) in item.subpoint" :key="i">- {{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { facelities } from '@/utils'
export default {
  name: 'FacilitiesComponent',

  computed: {
    facelities() {
      return facelities
    },
  },
}
</script>

<style lang="scss" scoped>
#facilities {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url('/facility-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: -2;
  padding-bottom: 65px;
  @include for-phone-only {
    padding-bottom: 40px;
  }
  .custom-shape-divider-top-1620213850 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }

  .custom-shape-divider-top-1620213850 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 75px;
  }

  .custom-shape-divider-top-1620213850 .shape-fill {
    fill: #ffffff;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #70d2ff 0%, #ffffff 100%);
    opacity: 0.7;
    z-index: -1;
  }
  .title {
    padding-top: 154px;
    text-align: center;
    margin-bottom: 66px;
    @include for-phone-only {
      padding-top: 110px;
      margin-bottom: 24px;
    }
    h2 {
      font-weight: 500;
      font-size: 24px;
      letter-spacing: 0.035em;
    }
  }
  .card-container {
    padding: 0 157px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
    max-width: 1130px;
    margin: 0 auto;
    @include for-phone-only {
      padding: 0 15px;
      grid-template-columns: repeat(1, 1fr);
      gap: 15px;
    }
    @include for-tablet-only {
      padding: 0 70px;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }
    .card {
      width: 100%;
      max-width: 254px;
      height: 100%;
      @include for-phone-only {
        max-width: 100%;
      }
      .top {
        background: #fbfbfb;
        height: 158px;
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 50px;
          height: 50px;
          object-fit: contain;
        }
      }
      .bottom {
        background: #fff;
        height: 171px;
        padding: 25px 27px;
        p {
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 0.035em;
        }
        ul {
          list-style: none;
          padding: 0;
          li {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
