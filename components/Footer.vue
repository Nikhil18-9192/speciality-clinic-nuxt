<template>
  <div id="footer">
    <p class="address">
      609 / 2 / A, E - Ward, Rishab Pride, 1st Floor, Opp. Metro Hospital,
      Shahupuri 2nd Lane, Kolhapur -410 001
    </p>
    <div class="contact">
      <div class="email">
        <a href="mailto:drdppatil@gmail.com">drdppatil@gmail.com</a>
      </div>
      <div class="phone">
        For Appointment :
        <a class="number" href="tel:9673310995">967 331 0995</a>
      </div>
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
    letter-spacing: 0.035em;
  }
  .contact {
    display: flex;
    justify-content: center;
    margin-top: 18px;
    @include for-phone-only {
      flex-direction: column;
    }
    div {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0.035em;
      margin-left: 55px;
      @include for-phone-only {
        width: 100%;
        margin-left: 0;
      }
      a {
        text-decoration: none;
      }
      .number {
        color: #2b5568;
      }
    }
  }
  .copyright {
    margin-top: 107px;
    @include for-phone-only {
      margin-top: 50px;
    }
    @include for-tablet-only {
      margin-top: 65px;
    }
    p {
      font-weight: 500;
      font-size: 10px;
      letter-spacing: 0.035em;
    }
  }
}
</style>
