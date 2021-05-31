<template>
  <div id="facilities">
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
          <hr />
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
  overflow: hidden;
  clip-path: path(
    'M0 0C0 0 320.5 83.5005 765 83.5002C1209.5 83.5 1530 0 1530 0V1131H0V0Z'
  );
  @include for-phone-only {
    padding-bottom: 40px;
    clip-path: path(
      'M0 0C0 0 71.7634 28.0003 181 28C290.237 27.9997 425 0 425 0V1290H0V0Z'
    );
  }
  @include for-tablet-only {
    clip-path: path(
      'M0 0C0 0 163.473 54.0004 389.5 54C615.527 53.9996 778 0 778 0V1656H0V0Z'
    );
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
    padding-top: 148px;
    text-align: center;
    margin-bottom: 55px;
    @include for-phone-only {
      padding-top: 49px;
      margin-bottom: 31px;
    }
    @include for-tablet-only {
      padding-top: 85px;
    }
    h2 {
      font-weight: 500;
      font-size: 24px;
      letter-spacing: 0.035em;
      @include for-phone-only {
        font-size: 18px;
      }
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
      padding: 0 23px;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
      max-width: 360px;
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
        max-width: 148px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
      }
      .top {
        position: relative;
        background: #fbfbfb;
        height: 158px;
        display: flex;
        justify-content: center;
        align-items: center;
        @include for-phone-only {
          height: 93px;
        }
        hr {
          background: #e3e3e3;
          height: 1px;
          width: 80%;
          margin: 0 auto;
          position: absolute;
          bottom: 0;
          border: 0;
        }
        img {
          width: 50px;
          height: 50px;
          object-fit: contain;
          @include for-phone-only {
            width: 37px;
            height: 37px;
          }
        }
      }
      .bottom {
        background: #fff;
        height: 171px;
        padding: 25px 27px;
        @include for-phone-only {
          height: 100px;
          padding: 8px 14px;
        }
        p {
          font-weight: 500;
          font-size: 18px;
          line-height: 28px;
          letter-spacing: 0.035em;
          @include for-phone-only {
            font-size: 13px;
            line-height: 20px;
          }
        }
        ul {
          list-style: none;
          padding: 0;
          @include for-phone-only {
            display: none;
          }
          li {
            font-size: 12px;
          }
        }
      }
    }
  }
}
</style>
