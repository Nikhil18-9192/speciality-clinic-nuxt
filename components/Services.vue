<template>
  <div id="services">
    <div class="title">
      <h2>Our Services</h2>
    </div>
    <div class="section-one">
      <div class="container">
        <div class="left">
          <h2>Implants <span>-The new Era of Dentistry</span></h2>
          <ul>
            <li v-for="(item, i) in implants" :key="i">
              {{ item }}
            </li>
          </ul>

          <nuxt-link class="gallery-btn" to="/gallery/implants"
            >Images</nuxt-link
          >
        </div>
        <div class="right">
          <div class="image-container">
            <div class="image">
              <img src="/artboard.jpg" alt="" />
            </div>
            <div class="image">
              <img src="/lants.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-two">
      <div class="container">
        <div class="left">
          <div class="image-container">
            <div class="image">
              <img src="/esthetic1.jpg" alt="" />
            </div>
            <div class="image">
              <img src="/esthetic2.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="right">
          <h2>Esthetic Treatments</h2>
          <ul>
            <li v-for="(item, i) in ethestic" :key="i">
              {{ item }}
            </li>
          </ul>
          <nuxt-link class="gallery-btn" to="/gallery/esthetic-treatments"
            >Images</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="section-three">
      <div class="container">
        <div class="left">
          <h2>Root Canal Treatment <span>(RCT)</span></h2>
          <ul>
            <li v-for="(item, i) in rootCanel" :key="i">
              {{ item }}
            </li>
          </ul>
          <nuxt-link class="gallery-btn" to="/gallery/root-canal"
            >Images</nuxt-link
          >
        </div>
        <div class="right">
          <div class="image-container">
            <div class="image">
              <img src="/root-canal.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section-four">
      <div class="container">
        <div class="left">
          <div class="image-container">
            <div class="image">
              <img src="/teeth.jpg" alt="" />
            </div>
            <div class="image">
              <img src="/beautiful-young-woman.jpg" alt="" />
            </div>
          </div>
        </div>
        <div class="right">
          <h2>Orthodontics <span>(Braces)</span></h2>
          <div class="desc">
            <p>
              Many of the dental problems like cavities, gum problems, bad
              breath, early wearing of teeth are due to wrong alignment of
              teeth.
            </p>
            <p>
              Orthodontics (Braces/Clip) treatment can correct overcrowded
              teeth, teeth with excessive spacing in b/w, protruded or retruded
              teeth
            </p>
          </div>
          <ul>
            <li v-for="(item, i) in orthodontics" :key="i">
              {{ item }}
            </li>
          </ul>
          <nuxt-link class="gallery-btn" to="/gallery/orthodontics"
            >Images</nuxt-link
          >
        </div>
      </div>
    </div>
    <div class="section-five">
      <div class="container">
        <div class="left">
          <h2>Gum Treatments</h2>
          <ul>
            <li v-for="(item, i) in gumTreatments" :key="i">
              {{ item }}
            </li>
          </ul>
          <nuxt-link class="gallery-btn" to="/gallery/gum-treatments"
            >Images</nuxt-link
          >
        </div>
        <div class="right">
          <div class="image-container">
            <div class="image">
              <img src="/woman-looking-mirror.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  gumTreatments,
  implants,
  orthodontics,
  ethestic,
  rootCanel,
} from '@/utils'
export default {
  name: 'ServicesComponent',

  computed: {
    lists() {
      return servicesList
    },
    implants() {
      return implants
    },
    ethestic() {
      return ethestic
    },
    rootCanel() {
      return rootCanel
    },
    orthodontics() {
      return orthodontics
    },
    gumTreatments() {
      return gumTreatments
    },
  },
}
</script>

<style lang="scss" scoped>
#services {
  position: relative;
  width: 100%;
  height: 100%;

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
    h2 {
      font-weight: 500;
      font-size: 28px;
      line-height: 43px;
      letter-spacing: 0.035em;
    }
  }
  .section-one {
    padding-bottom: 69px;
    padding-left: 157px;
    padding-right: 157px;
    @include for-phone-only {
      padding-left: 15px;
      padding-right: 15px;
      padding-bottom: 40px;
    }
    @include for-tablet-only {
      padding-left: 70px;
      padding-right: 70px;
      padding-bottom: 40px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column;
      }
      @include for-tablet-only {
        flex-direction: column;
      }
      .left {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        h2 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          @include for-phone-only {
            font-size: 28px;
            margin-bottom: 24px;
          }
          span {
            font-size: 14px;
            color: #6d6d6d;
            font-weight: 400;
          }
        }
        ul {
          list-style: none;
          padding-left: 20px;
          :nth-child(odd) {
            list-style-image: url('/list-black.svg');
          }
          :nth-child(even) {
            list-style-image: url('/list-blue.svg');
          }
          li {
            font-weight: 400;
            font-size: 16px;
            line-height: 122%;
            letter-spacing: 0.08em;
            padding-left: 15px;
            padding-bottom: 15px;
          }
        }
      }
      .right {
        width: 65%;
        margin-left: 75px;
        @include for-phone-only {
          width: 100%;
          margin-left: 0;
        }
        @include for-tablet-only {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }
  .section-two {
    padding: 81px 157px;
    background: #f2fbff;
    @include for-phone-only {
      padding: 20px 15px;
    }
    @include for-tablet-only {
      padding: 40px 70px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column-reverse;
      }
      @include for-tablet-only {
        flex-direction: column-reverse;
      }
      .left {
        width: 65%;
        display: flex;
        justify-content: flex-end;
        padding-right: 45px;
        @include for-phone-only {
          width: 100%;
          padding-right: 0;
        }
        @include for-tablet-only {
          width: 100%;
          margin-right: 0;
        }
        .image-container {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          @include for-phone-only {
            flex-direction: column;
            row-gap: 15px;
          }
          @include for-tablet-only {
            column-gap: 24px;
          }

          .image {
            border: 1px solid #c1c1c1;
            padding: 20px;
            margin-right: 24px;
            max-height: 322px;
            @include for-phone-only {
              margin-right: 0;
            }
            @include for-tablet-only {
              margin-right: 0;
            }
            img {
              width: 282px;
              height: 276px;
              object-fit: cover;
              @include for-phone-only {
                width: 100%;
              }
              @include for-tablet-only {
                width: 260px;
              }
            }
          }
        }
      }
      .right {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        h2 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          text-align: right;
          @include for-phone-only {
            font-size: 28px;
            text-align: left;
            margin-bottom: 24px;
          }
          @include for-tablet-only {
            text-align: left;
          }
        }
        ul {
          list-style: none;
          padding-left: 20px;
          :nth-child(odd) {
            list-style-image: url('/list-black.svg');
          }
          :nth-child(even) {
            list-style-image: url('/list-blue.svg');
          }
          li {
            font-weight: 400;
            font-size: 16px;
            line-height: 122%;
            letter-spacing: 0.08em;
            padding-left: 15px;
            padding-bottom: 15px;
          }
        }
      }
    }
  }
  .section-three {
    padding: 85px 157px;
    @include for-phone-only {
      padding: 24px 15px;
    }
    @include for-tablet-only {
      padding: 40px 70px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column;
      }
      @include for-tablet-only {
        flex-direction: column;
      }
      .left {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        h2 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          @include for-phone-only {
            font-size: 28px;
            margin-bottom: 24px;
          }
          span {
            font-size: 14px;
            color: #6d6d6d;
            font-weight: 400;
          }
        }
        ul {
          list-style: none;
          padding-left: 20px;
          :nth-child(odd) {
            list-style-image: url('/list-black.svg');
          }
          :nth-child(even) {
            list-style-image: url('/list-blue.svg');
          }
          li {
            font-weight: 400;
            font-size: 16px;
            line-height: 122%;
            letter-spacing: 0.08em;
            padding-left: 15px;
            padding-bottom: 15px;
            max-width: 360px;
          }
        }
      }
      .right {
        width: 65%;
        padding-left: 35px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        @include for-phone-only {
          width: 100%;
          padding-left: 0;
        }
        @include for-tablet-only {
          width: 100%;
          padding-left: 0;
        }
        .image-container {
          display: flex;
          .image {
            border: 1px solid #c1c1c1;
            padding: 20px;
            margin-right: 24px;
            @include for-phone-only {
              margin-right: 0;
            }
            @include for-tablet-only {
              margin-right: 0;
            }
            img {
              width: 676px;
              height: 234px;
              object-fit: cover;
              @include for-phone-only {
                width: 100%;
              }
              @include for-tablet-only {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
  .section-four {
    padding: 81px 157px;
    background: #f2fbff;
    @include for-phone-only {
      padding: 24px 15px;
    }
    @include for-tablet-only {
      padding: 40px 70px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column-reverse;
      }
      @include for-tablet-only {
        flex-direction: column-reverse;
      }
      .left {
        width: 65%;
        display: flex;
        justify-content: flex-end;
        padding-right: 45px;
        margin-top: 50px;
        @include for-phone-only {
          width: 100%;
          padding-right: 0;
          margin-top: 24px;
          margin-top: 0;
        }
        @include for-tablet-only {
          width: 100%;
          margin-right: 0;
          margin-top: 0;
        }
        .image-container {
          display: flex;
          width: 100%;
          justify-content: flex-end;
          @include for-phone-only {
            flex-direction: column;
            row-gap: 15px;
          }
          @include for-tablet-only {
            column-gap: 24px;
          }

          .image {
            border: 1px solid #c1c1c1;
            padding: 20px;
            margin-right: 24px;
            max-height: 322px;
            @include for-phone-only {
              margin-right: 0;
            }
            @include for-tablet-only {
              margin-right: 0;
            }
            img {
              width: 282px;
              height: 276px;
              object-fit: cover;
              @include for-phone-only {
                width: 100%;
              }
              @include for-tablet-only {
                width: 260px;
              }
            }
          }
        }
      }
      .right {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        h2 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          text-align: right;
          @include for-phone-only {
            font-size: 28px;
            margin-bottom: 24px;
          }
          span {
            font-size: 14px;
            color: #6d6d6d;
            font-weight: 400;
          }
        }
        .desc {
          margin-bottom: 40px;
          p {
            font-weight: 400;
            font-size: 16px;
            line-height: 122%;
            letter-spacing: 0.08em;
            margin-bottom: 15px;
          }
        }
        ul {
          list-style: none;
          padding-left: 20px;
          :nth-child(odd) {
            list-style-image: url('/list-black.svg');
          }
          :nth-child(even) {
            list-style-image: url('/list-blue.svg');
          }
          li {
            font-weight: 400;
            font-size: 16px;
            line-height: 122%;
            letter-spacing: 0.08em;
            padding-left: 15px;
            padding-bottom: 15px;
          }
        }
      }
    }
  }
  .section-five {
    padding: 85px 157px;
    @include for-phone-only {
      padding: 24px 15px;
    }
    @include for-tablet-only {
      padding: 40px 70px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column;
      }
      @include for-tablet-only {
        flex-direction: column;
      }
      .left {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        @include for-tablet-only {
          width: 100%;
        }
        h2 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          @include for-phone-only {
            font-size: 28px;
            margin-bottom: 24px;
          }
        }
        ul {
          list-style: none;
          padding-left: 20px;
          :nth-child(odd) {
            list-style-image: url('/list-black.svg');
          }
          :nth-child(even) {
            list-style-image: url('/list-blue.svg');
          }
          li {
            font-weight: 400;
            font-size: 16px;
            line-height: 122%;
            letter-spacing: 0.08em;
            padding-left: 15px;
            padding-bottom: 15px;
          }
          :nth-child(4),
          :nth-child(5) {
            display: none;
          }
        }
      }
      .right {
        width: 65%;
        margin-left: 75px;
        display: flex;
        align-items: flex-end;
        @include for-phone-only {
          width: 100%;
          margin-left: 0;
        }
        @include for-tablet-only {
          width: 100%;
          margin-left: 0;
        }
      }
    }
  }
}
.gallery-btn {
  width: 137px;
  height: 37px;
  border-radius: 53px;
  border: 1px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
  float: right;
  margin-top: 12px;
  font-weight: 500;
  transition: 0.3s ease all;
  text-transform: uppercase;
  @include for-phone-only {
    margin-bottom: 15px;
  }
  @include for-tablet-only {
    margin-bottom: 25px;
  }
  &:hover {
    background: $primary;
  }
}
.image-container {
  display: flex;
  width: 100%;

  @include for-phone-only {
    flex-direction: column;
    row-gap: 15px;
  }
  @include for-tablet-only {
    column-gap: 24px;
  }

  .image {
    border: 1px solid #c1c1c1;
    padding: 20px;
    margin-right: 24px;
    max-height: 322px;
    @include for-phone-only {
      margin-right: 0;
    }
    @include for-tablet-only {
      margin-right: 0;
    }
    img {
      width: 282px;
      height: 276px;
      object-fit: cover;
      @include for-phone-only {
        width: 100%;
      }
      @include for-tablet-only {
        width: 260px;
      }
    }
  }
}
</style>