<template>
  <div
    id="about"
    data-aos="fade-up"
    data-aos-duration="900"
    data-aos-offset="200"
  >
    <div class="title">
      <h2>Treatments we offer</h2>
    </div>
    <div class="treatments-wrapper">
      <hr />
      <div class="treatment" v-for="(item, i) in treatments" :key="i">
        <div class="icon">
          <img :src="item.icon" alt="" />
        </div>
        <div class="text">
          <p>{{ item.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { treatments } from '@/utils'
export default {
  name: 'AboutComponent',

  computed: {
    treatments() {
      return treatments
    },
  },
}
</script>

<style lang="scss" scoped>
#about {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 50px 157px 134px 157px;
  @include for-phone-only {
    padding: 50px 23px 90px 23px;
  }
  @include for-tablet-only {
    padding: 50px 70px 50px 70px;
  }
  .title {
    text-align: center;
    margin-bottom: 76px;
    @include for-phone-only {
      margin-bottom: 40px;
    }
    @include for-tablet-only {
      margin-bottom: 50px;
    }
    h2 {
      font-weight: 500;
      font-size: 28px;
      letter-spacing: 0.035em;
      @include for-phone-only {
        font-size: 18px;
      }
    }
  }
  .treatments-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 79px;
    max-width: 890px;
    margin: 0 auto;
    @include for-phone-only {
      grid-template-columns: repeat(1, 1fr);
      gap: 55px;
    }
    @include for-tablet-only {
      gap: 30px;
    }
    hr {
      height: 489px;
      width: 1px;
      background: #ababab;
      position: absolute;
      left: 50%;
      @include for-phone-only {
        display: none;
      }
      @include for-tablet-only {
        left: 51%;
      }
    }
    .treatment {
      display: flex;
      justify-content: center;
      .icon {
        padding-right: 52px;
        @include for-phone-only {
          padding-right: 29px;
        }
        @include for-tablet-only {
          padding-right: 20px;
        }
        img {
          width: 66px;
          height: 66px;
          object-fit: contain;
          @include for-phone-only {
            width: 40px;
            height: 40px;
          }
        }
      }
      .text {
        width: 243px;
        @include for-phone-only {
          width: 240px;
        }
        @include for-tablet-only {
          width: 225px;
        }
      }
      p {
        font-size: 16px;
        font-weight: 500;
        @include for-phone-only {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
