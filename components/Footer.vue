<template>
  <div id="footer">
    <p class="address">
      609 / 2 / A, E - Ward, Rishab Pride, 1st Floor, Opp. Metro Hospital,
      Shahupuri 2nd Lane, Kolhapur - 410 001
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
    <div class="social">
      <a href="/" rel="noreferrer"
        ><img src="/instagram.svg" alt="instagram icon" />
      </a>
      <a href="/" rel="noreferrer"
        ><img src="/fb.svg" alt="instagram icon"
      /></a>
    </div>
    <div class="copyright">
      <p>Copyright 2021 . All Rights Reserved</p>
      <p class="formec">
        Designed with 💙 by
        <a href="https://formecmedia.com/" target="_blank" rel="noopener">
          Formec Media.</a
        >
      </p>
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
    padding: 41px 23px 50px 23px;
  }
  .address {
    font-weight: 500;
    font-size: 16px;
    letter-spacing: 0.035em;
    line-height: 24px;
    @include for-phone-only {
      font-size: 14px;
      line-height: 204.5%;
      text-align: center;
      padding: 0 24px;
    }
  }
  .contact {
    display: flex;
    justify-content: center;
    margin-top: 19px;
    @include for-phone-only {
      flex-direction: column;
      margin-top: 0;
    }
    .email {
      @include for-phone-only {
        margin: 42px 0;
      }
    }
    div {
      font-weight: 500;
      font-size: 16px;
      letter-spacing: 0.035em;
      margin-left: 55px;
      @include for-phone-only {
        width: 100%;
        margin-left: 0;
        font-size: 14px;
      }
      a {
        text-decoration: none;
      }
      .number {
        color: #2b5568;
      }
    }
  }

  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;

    img {
      margin: 0 4px;
      width: 48px;
      height: 48px;
      padding: 6px;
    }
  }
  .copyright {
    margin-top: 107px;
    @include for-phone-only {
      margin-top: 24px;
    }
    @include for-tablet-only {
      margin-top: 65px;
    }
    p {
      font-weight: 500;
      font-size: 10px;
      letter-spacing: 0.035em;
    }
    .formec {
      margin-top: 12px;
    }
  }
}
</style>
