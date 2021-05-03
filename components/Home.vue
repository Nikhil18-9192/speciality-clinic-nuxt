<template>
  <div id="home">
    <div class="overlay"></div>
    <div class="content">
      <h1>Be true to your teeth and they won't be false to you!</h1>
      <a class="appointment-btn" href="/">
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

  .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 58.19%,
      #ffffff 96.61%
    );
  }
  .content {
    width: 366px;
    position: absolute;
    left: 135px;
    top: 148px;
    h1 {
      font-size: 48px;
      line-height: 114.5%;
      font-weight: 700;
      padding-bottom: 35px;
      background: linear-gradient(180deg, #000000 0%, #0087d2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .appointment-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: 1px solid #000000;
      width: 196px;
      height: 53px;
      border-radius: 53px;
      img {
        width: 17px;
        height: 17px;
        object-fit: contain;
        margin-right: 10px;
      }
      P {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.035em;
      }
    }
  }
}
</style>