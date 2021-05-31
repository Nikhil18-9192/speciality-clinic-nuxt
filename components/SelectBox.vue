<template>
  <div id="select-box" title="Click to change option">
    <div class="spinner">
      <span
        >Showing images for
        <b :class="spinner ? 'active' : ''" @click="toggle"
          >{{ value }}
          <img
            :style="spinner ? 'transform:rotate(-180deg)' : ''"
            src="/arrow-down.svg"
            alt="down arrow"
        /></b>
      </span>
      <ul class="list" :class="[{ expanded: spinner }]">
        <li v-for="option in options" :key="option" @click="onSelect(option)">
          {{ option }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectBox',
  props: ['options', 'value'],
  data() {
    return {
      spinner: false,
    }
  },
  methods: {
    toggle() {
      this.spinner = !this.spinner
    },
    onSelect(option) {
      this.$emit('input', option)

      this.spinner = false
    },
  },
}
</script>

<style lang="scss" scoped>
#select-box {
  position: relative;

  *:focus {
    outline: none;
  }

  b {
    font-size: 22px;
    cursor: pointer;
    color: $accent;
  }

  .active {
    text-decoration: underline;
  }

  .spinner {
    position: relative;
    box-sizing: border-box;
    z-index: 1000;
    background: #fff;

    span {
      img {
        width: 12px;
        margin-left: 4px;
        transition: 0.3s ease all;
        opacity: 0.7;
      }
    }

    .list {
      max-height: 0;
      overflow: hidden;
      position: absolute;
      list-style: none;
      font-size: 16px;
      right: 0;
      top: 150%;
      background: linear-gradient(180deg, #70d2ff 0%, rgb(228, 247, 255) 100%);
      box-sizing: border-box;
      max-width: 300px;
      min-width: 300px;
      transition: 0.2s ease-in-out all;
      @include for-phone-only {
        min-width: 250px;
        top: 110%;
      }
      li {
        padding: 16px;
        box-sizing: border-box;
        text-align: right;
        cursor: pointer;
        margin: 0;
        &:hover {
          background: $primary;
        }
      }
    }
    .expanded {
      max-height: 400px;
      overflow-y: scroll;
      padding: 0;
      border: 1px solid $accent;
      box-shadow: 0.1px 8px 16px rgba(0, 0, 0, 0.151);

      /* width */
      &::-webkit-scrollbar {
        width: 3px;
      }
      /* Track */
      &::-webkit-scrollbar-track {
        background: $accent;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        background: rgba(22, 22, 22, 0.774);
      }
    }
  }
}
</style>
