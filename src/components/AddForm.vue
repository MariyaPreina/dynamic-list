<template>
  <form class="form" @submit.prevent="onSubmit" autocomplete="off">
    <div class="form__group">
      <label for="name" class="form__label form__label--required">Наименование товара</label>
      <input
        type="text"
        id="name"
        class="form__input"
        :class="{'form__input--error' : errors.name}"
        placeholder="Введите наименование товара"
        v-model.trim="requiredFields.name"
        @blur="checkName"
      >
      <span class="form__error" v-if="errors.name">{{ errors.name }}</span>
    </div>
    <div class="form__group">
      <label for="description" class="form__label">Описание товара</label>
      <textarea
        id="description"
        class="form__input
        form__input--textarea"
        placeholder="Введите описание товара"
        v-model.trim="description"
      />
    </div>
    <div class="form__group">
      <label for="img" class="form__label form__label--required">Ссылка на изображение товара</label>
      <input
        type="text"
        id="img"
        class="form__input"
        :class="{'form__input--error' : errors.img}"
        placeholder="Введите ссылку"
        v-model.trim="requiredFields.img"
        @blur="checkImg"
      >
      <span class="form__error" v-if="errors.img">{{ errors.img }}</span>
    </div>
    <div class="form__group">
      <label for="price" class="form__label form__label--required">Цена товара</label>
      <input
        type="number"
        id="price"
        class="form__input"
        :class="{'form__input--error' : errors.price}"
        placeholder="Введите цену"
        v-model.trim="requiredFields.price"
        @blur="checkPrice"
      >
      <span class="form__error" v-if="errors.price">{{ errors.price }}</span>
    </div>
    <button type="submit" class="form__btn" :disabled="!isFormEnable">Добавить товар</button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      requiredFields: {
        name: '',
        img: '',
        price: ''
      },
      description: '',
      errors: {
        name: '',
        img: '',
        price: ''
      }
    }
  },
  computed: {
    isFormEnable () {
      return Object.values(this.errors).every(x => !x) && Object.values(this.requiredFields).every(x => x)
    }
  },
  methods: {
    checkRequiredField (value, errorName) {
      this.errors[errorName] = ''
      if (!value) {
        this.errors[errorName] = 'Поле является обязательным'
      }
    },
    checkName () {
      this.checkRequiredField(this.requiredFields.name, 'name')
    },
    checkImg () {
      this.checkRequiredField(this.requiredFields.img, 'img')
    },
    checkPrice () {
      this.checkRequiredField(this.requiredFields.price, 'price')
    },
    onSubmit () {
      const values = this.requiredFields
      this.$store.commit('addProduct', {
        name: values.name,
        description: this.description,
        img: values.img,
        price: Number(values.price)
      })
      Object.keys(values).forEach(key => { values[key] = '' })
      this.description = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.form {
  width: 100%;
  background-color: $color-background;
  -webkit-box-shadow: $shadow-main;
  box-shadow: $shadow-main;
  border-radius: 4px;
  padding: 24px;
  &__group {
    margin-bottom: 24px;
    position: relative;
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }
  }
  &__label {
    position: relative;
    font-size: 12px;
    &--required:after {
      content: '';
      position: absolute;
      display: inline-block;
      border-radius: 50%;
      width: 4px;
      height: 4px;
      background-color: $color-error;
      top: 2px;
      right: -5px;
    }
  }
  &__input {
    width: 100%;
    height: 36px;
    background-color: $color-background;
    font-family: inherit;
    font-size: 12px;
    color: $color-text;
    -webkit-box-shadow: $shadow-input;
    box-shadow: $shadow-input;
    border: none;
    border-radius: 4px;
    padding: 10px 16px;
    margin-top: 4px;
    transition: all .2s linear;
    &--textarea {
      resize: none;
      height: 108px;
      &::-webkit-scrollbar {
        width: 6px;
      }
      &::-webkit-scrollbar-track {
        background: $color-scrollbar-track;
      }
      &::-webkit-scrollbar-thumb {
        background: $color-scrollbar-thumb;
        border-radius: 4px;
      }
      &::-webkit-scrollbar-thumb:hover {
        background: $color-scrollbar-thumb-hover;
      }
    }
    &::placeholder {
      font-family: inherit;
      color: $color-text-placeholder;
    }
    &--error {
      border: 1px solid $color-error;
    }
  }
  &__btn {
    width: 100%;
    height: 36px;
    font-family: $font-secondary;
    font-size: 12px;
    font-weight: 600;
    color: #fff;
    border: 2px solid transparent;
    border-radius: 10px;
    background-color: $color-btn;
    cursor: pointer;
    transition: all linear .2s;
    &:enabled {
      -webkit-box-shadow: $shadow-input;
      box-shadow: $shadow-input;
    }
    &:disabled {
      color: $color-text-placeholder;
      background-color: $color-btn-disable;
      cursor: not-allowed;
    }
    &:hover:enabled {
      background-color: transparent;
      color: $color-btn;
      border: 2px solid $color-btn;
    }
  }
  &__error {
    font-family: inherit;
    font-size: 8px;
    font-weight: 400;
    color: $color-error;
    position: absolute;
    top: calc(100% + 4px);
    left: 0;
  }
}
</style>
