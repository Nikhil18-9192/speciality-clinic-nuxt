<template>
  <div id="footer">
    <p class="address">
      609 / 2 / A, E - Ward, “Rishab Pride”,1st Floor, Opp. Metro Hospital,
      Shahupuri 2nd Lane, Kolhapur -410 001
    </p>
    <div class="contact">
      <span class="email"
        ><a href="mailto:drdppatil@gmail.com">drdppatil@gmail.com</a></span
      >
      <span class="phone"
        >For Appointment :
        <a class="number" href="tel:9673310995">967 331 0995</a></span
      >
    </div>
    <div class="copyright">
      <p>Copyright 2021 . All Rights Reserved</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style lang="scss" scoped>
#footer {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 59px 0 53px 0;
  background: #f9f9f9;
  text-align: center;
  @include for-phone-only {
    padding: 30px 15px;
  }
  .address {
    font-weight: 500;
    font-size: 16px;
    line-height: 40px;
    letter-spacing: 0.035em;
  }
  .contact {
    span {
      font-weight: 500;
      font-size: 16px;
      line-height: 40px;
      letter-spacing: 0.035em;
      margin-right: 55px;
      @include for-phone-only {
        margin-right: 0;
        width: 100%;
      }
      a {
        text-decoration: none;
      }
      .number {
        color: $primary;
      }
    }
  }
  .copyright {
    margin-top: 107px;
    @include for-phone-only {
      margin-top: 50px;
    }
    p {
      font-weight: 500;
      font-size: 10px;
      line-height: 15px;
      letter-spacing: 0.035em;
    }
  }
}
</style>