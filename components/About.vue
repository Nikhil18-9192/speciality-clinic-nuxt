<template>
  <div id="about">
    <div class="title">
      <h4>Treatments we offer</h4>
    </div>
    <div class="treatments-wrapper">
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
export default {
  name: 'AboutComponent',
  data() {
    return {
      treatments: [
        {
          name:
            'Detailed Examination, discussion of various treatment modalities with diagnostic models, photographs',
          icon: '/examine.svg',
        },
        {
          name: 'Tooth Fillings- silver, tooth colored',
          icon: '/tooth-filling.svg',
        },
        {
          name: 'Teeth removal, impacted teeth removal',
          icon: '/removal-tongs.svg',
        },
        {
          name: 'Complete denture, removable partial dentures, implants',
          icon: '/teeth.svg',
        },
        {
          name: 'Surgical procedures like frenectomy,vestibuloplasty',
          icon: '/dental-drill.svg',
        },
        {
          name: 'Dental treatments for children and all.',
          icon: '/teeth1.svg',
        },
      ],
    }
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
    padding: 50px 15px;
  }
  .title {
    text-align: center;
    margin-bottom: 76px;
    h4 {
      font-weight: 500;
      font-size: 28px;
      line-height: 43px;
      letter-spacing: 0.035em;
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
    .treatment {
      display: flex;
      .icon {
        padding-right: 52px;
        img {
          width: 66px;
          height: 66px;
          object-fit: contain;
        }
      }
      .text {
        width: 243px;
        @include for-phone-only {
          width: 225px;
        }
      }
    }
  }
}
</style>