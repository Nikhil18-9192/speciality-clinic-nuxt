<template>
  <div id="home">
    <div class="overlay"></div>
    <div class="content">
      <h1>A better life starts with a beautiful smile.</h1>
      <a class="appointment-btn" href="tel:9673310995">
        <img src="/phone.svg" alt="phone icon" />
        <p>Get Appointment</p>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeComponent',
}
</script>

<style lang="scss" scoped>
#home {
  position: relative;
  width: 100%;
  height: 541px;
  background-image: url('/hero.jpg');
  background-position: center;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  @include for-phone-only {
    background-position: 75% 0%;
    background-size: 155% 225px;
    height: 398px;
  }
  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 58.19%,
      #ffffff 96.61%
    );
    @include for-phone-only {
      height: 226px;
    }
  }
  .content {
    max-width: 366px;
    position: absolute;
    left: 157px;
    top: 148px;
    @include for-phone-only {
      left: 23px;
      top: 143px;
      max-width: 285px;
    }
    @include for-tablet-only {
      left: 70px;
    }
    h1 {
      font-size: 48px;
      font-weight: 700;
      padding-bottom: 35px;
      line-height: 114.5%;
      background: linear-gradient(180deg, #000000 0%, #0087d2 100%);
      background-clip: text;
      -webkit-text-fill-color: transparent;
      @include for-phone-only {
        font-size: 32px;
      }
    }
    .appointment-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000000;
      width: 196px;
      height: 53px;
      border-radius: 53px;
      transition: 0.3s ease all;
      @include for-phone-only {
        width: 168px;
        height: 45px;
      }
      &:hover {
        background: $primary;
      }
      img {
        width: 17px;
        height: 17px;
        object-fit: contain;
        margin-right: 10px;
        @include for-phone-only {
          width: 14px;
          height: 14px;
          margin-right: 7px;
        }
      }
      P {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.035em;
        @include for-phone-only {
          font-size: 14px;
          line-height: 21px;
        }
      }
    }
  }
}
</style>
