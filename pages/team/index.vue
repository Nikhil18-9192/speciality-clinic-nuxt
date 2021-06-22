<template>
  <div id="team">
    <div class="title"><h1>Our Team</h1></div>
    <div class="team-container">
      <div class="card" v-for="(item, i) in team" :key="i">
        <img :src="item.src" alt="team image" />
        <div class="desc">
          <h4>{{ item.name }}</h4>
          <p>{{ item.education }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { team } from '@/utils'
export default {
  name: 'TeamPage',
  computed: {
    team() {
      return team
    },
  },
}
</script>

<style lang="scss" scoped>
#team {
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 0 157px;
  overflow: hidden;
  margin-top: 165px;
  @include for-phone-only {
    padding: 0 15px;
    padding-top: 80px;
    margin-top: 0;
  }
  @include for-tablet-only {
    padding: 0 60px;
  }
  .title {
    h1 {
      text-align: center;
      font-weight: 500;
      font-size: 24px;
      line-height: 35px;
    }
  }
  .team-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 100px;
    max-width: 1100px;
    margin: 92px auto 0 auto;
    @include for-phone-only {
      grid-template-columns: repeat(1, 1fr);
      margin-top: 45px;
      row-gap: 30px;
    }
    @include for-tablet-only {
      grid-template-columns: repeat(2, 1fr);
      column-gap: 50px;
      row-gap: 50px;
      margin-top: 55px;
    }
    .card {
      position: relative;
      width: 300px;
      height: 360px;
      margin-bottom: 64px;
      @include for-phone-only {
        margin: 0 auto;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
      .desc {
        position: absolute;
        width: 98%;
        height: 105px;
        left: 3px;
        bottom: 3px;
        background: #fff;
        text-align: center;
        padding: 15px;
        h4 {
          font-weight: 500;
          font-size: 18px;
          line-height: 26px;
          margin-bottom: 12px;
        }
        p {
          font-weight: 300;
          font-size: 12px;
          line-height: 15px;
          color: #0079be;
        }
      }
    }
  }
}
</style>
