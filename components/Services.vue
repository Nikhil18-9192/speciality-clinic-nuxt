<template>
  <div id="services">
    <div class="title">
      <h4>Our Services</h4>
    </div>
    <div class="section-one">
      <div class="container">
        <div class="left">
          <h4>Implants <span>-The new Era of Dentistry</span></h4>
          <ul>
            <li v-for="(item, i) in lists" :key="i">
              {{ item }}
            </li>
          </ul>
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
          <h4>Esthetic Treatments</h4>
          <ul>
            <li v-for="(item, i) in lists" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section-three">
      <div class="container">
        <div class="left">
          <h4>Root Canal Treatment <span>(RCT)</span></h4>
          <ul>
            <li v-for="(item, i) in lists" :key="i">
              {{ item }}
            </li>
          </ul>
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
          <h4>Orthodontics <span>(Braces)</span></h4>
          <div class="desc">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Lacus pretium diam molestie enim et augue potenti amet phasellus.
            </p>
            <p>
              Eu libero non non accumsan ultrices eu. Aliquet lacus tristique
              nulla sapien ante. Adipiscing faucibus ultricies risus, et, vel.
              Adipiscing faucibus ultricies risus, et, vel.
            </p>
          </div>
          <ul>
            <li v-for="(item, i) in lists" :key="i">
              {{ item }}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="section-five">
      <div class="container">
        <div class="left">
          <h4>Gum Treatments</h4>
          <ul>
            <li v-for="(item, i) in lists" :key="i">
              {{ item }}
            </li>
          </ul>
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
export default {
  name: 'ServicesComponent',
  data() {
    return {
      lists: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        ' Lacus pretium diam molestie enim et augue potenti amet phasellus',
        ' Eu libero non non accumsan ultrices eu. Aliquet lacus tristique nulla sapien ante.',
        'Adipiscing faucibus ultricies risus, et, vel.',
        'Adipiscing faucibus ultricies risus, et, vel.',
      ],
    }
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
    h4 {
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
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column;
      }
      .left {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        h4 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          @include for-phone-only {
            font-size: 28px;
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
      }
    }
  }
  .section-two {
    padding: 81px 157px;
    background: #f2fbff;
    @include for-phone-only {
      padding: 81px 15px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column-reverse;
      }
      .left {
        width: 65%;
        display: flex;
        justify-content: flex-end;
        margin-right: 75px;
        @include for-phone-only {
          width: 100%;
        }
      }
      .right {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        h4 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          text-align: right;
          @include for-phone-only {
            font-size: 28px;
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
      padding: 85px 15px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column;
      }
      .left {
        width: 40%;
        @include for-phone-only {
          width: 100%;
        }
        h4 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          @include for-phone-only {
            font-size: 28px;
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
        width: 60%;
        padding-left: 35px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        @include for-phone-only {
          width: 100%;
        }
        .image-container {
          display: flex;
          .image {
            border: 1px solid #c1c1c1;
            padding: 20px;
            margin-right: 24px;
            img {
              width: 676px;
              height: 234px;
              object-fit: cover;
              @include for-phone-only {
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
      padding: 81px 15px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column-reverse;
      }
      .left {
        width: 65%;
        display: flex;
        justify-content: flex-end;
        margin-right: 75px;
        margin-top: 50px;
        @include for-phone-only {
          width: 100%;
        }
      }
      .right {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        h4 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          @include for-phone-only {
            font-size: 28px;
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
      padding: 85px 15px;
    }
    .container {
      display: flex;
      width: 100%;
      @include for-phone-only {
        flex-direction: column;
      }
      .left {
        width: 35%;
        @include for-phone-only {
          width: 100%;
        }
        h4 {
          font-weight: bold;
          font-size: 36px;
          margin-bottom: 40px;
          @include for-phone-only {
            font-size: 28px;
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
      }
    }
  }
}
.image-container {
  display: flex;
  @include for-phone-only {
    flex-direction: column;
    row-gap: 15px;
  }
  .image {
    border: 1px solid #c1c1c1;
    padding: 20px;
    margin-right: 24px;
    max-height: 322px;
    @include for-phone-only {
      margin-right: 0;
    }
    img {
      width: 282px;
      height: 276px;
      object-fit: cover;
      @include for-phone-only {
        width: 100%;
      }
    }
  }
}
</style>