<template>
  <div class="select">
    <p
      class="select__value"
      :class="{active: areOptionsVisible, 'not-selected': !selected}"
      @click="areOptionsVisible = !areOptionsVisible"
    >{{ isSelected }}</p>
    <div class="select__options" v-if="areOptionsVisible">
      <span
        class="select__option"
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
      >{{ option.name }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    default: {
      type: String,
      required: false,
      default: ''
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      areOptionsVisible: false
    }
  },
  computed: {
    isSelected () {
      return this.selected ? this.selected : this.default
    }
  },
  methods: {
    hideSelect (e) {
      if (!this.$el.contains(e.target)) {
        this.areOptionsVisible = false
      }
    },
    selectOption (option) {
      this.$emit('select', option)
      this.areOptionsVisible = false
    }
  },
  mounted () {
    document.addEventListener('click', this.hideSelect)
  },
  beforeUnmount () {
    document.removeEventListener('click', this.hideSelect)
  }
}
</script>

<style lang="scss" scoped>
.select {
  position: relative;
  width: 100%;
  height: 100%;
  font-family: inherit;
  font-size: 12px;
  font-weight: 400;
  border-radius: 4px;
  background-color: $color-background;
  -webkit-box-shadow: $shadow-input;
  box-shadow: $shadow-input;
  padding: 10px 16px;
}

.select__value {
  width: 100%;
  height: 100%;
  cursor: pointer;
  color:  $color-text-placeholder;
}

.select__value:after {
  position: absolute;
  content: "";
  top: 15px;
  right: 23px;
  width: 5px;
  height: 5px;
  border-right: 1px solid $color-text-placeholder;
  border-top: 1px solid $color-text-placeholder;
  transform: rotate(135deg);
}

.select__options {
  display: flex;
  flex-direction: column;
  background-color: $color-background;
  font-family: inherit;
  -webkit-box-shadow: $shadow-input;
  box-shadow: $shadow-input;
  border-radius: 4px;
  padding: 5px 0;
  position: absolute;
  top: calc(100% + 2px);
  right: 0;
  width: 100%;
  z-index: 5;
}

.select__option {
  font-size: 12px;
  font-weight: 400;
  color: $color-text-2;
  height: 36px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
}

.select__option:hover {
  background-color: $color-background-body;
}
</style>
