<template>
  <div class="container">
    <main class="main">
      <div class="form-box">
        <h1 class="form-box__title">Добавление товара</h1>
        <add-form/>
      </div>
      <div class="cards">
        <div class="cards__sort">
          <div class="cards__sort-wrapper">
            <app-select
              id="select"
              :options="selectValues"
              @select="updateSortValue"
              :selected="sortValue.name"
              :default="'По умолчанию'"
            />
          </div>
        </div>
        <div class="cards__inner" v-if="cards.length > 0">
          <product-card
            v-for="(card, idx) in cards"
            :key="idx"
            :id="idx"
            :name="card.name"
            :img="card.img"
            :description="card.description"
            :price="card.price"
          ></product-card>
        </div>
        <p class="cards__empty" v-else>Список пуст</p>
      </div>
    </main>
  </div>
</template>

<script>
import AppSelect from './components/AppSelect'
import AddForm from './components/AddForm'
import ProductCard from './components/ProductCard'
export default {
  name: 'App',
  components: {
    AppSelect,
    AddForm,
    ProductCard
  },
  data () {
    return {
      selectValues: [
        {
          name: 'По цене min',
          value: 'min'
        },
        {
          name: 'По цене max',
          value: 'max'
        },
        {
          name: 'По наименованию',
          value: 'name'
        }
      ]
    }
  },
  computed: {
    cards () {
      return this.$store.getters.products
    },
    sortValue () {
      return this.$store.getters.sortSelect
    }
  },
  methods: {
    updateSortValue (option) {
      this.$store.commit('updateSortValue', option)
    }
  }
}
</script>

<style lang="scss">
.main {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 16px;
  padding: 32px 0;
  @media only screen and (max-width: $bp-large) {
    grid-template-columns: 1.5fr 2.5fr;
  }
  @media only screen and (max-width: $bp-medium) {
    grid-template-columns: 2fr 2fr;
  }
  @media only screen and (max-width: $bp-small) {
    grid-template-columns: 1fr;
  }
}

.form-box {
  grid-column: 1 / 2;
  @media only screen and (max-width: $bp-small) {
    grid-column: 1 / -1;
  }
  &__title {
    font-family: inherit;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
}

.cards {
  grid-column: 2 / -1;
  @media only screen and (max-width: $bp-small) {
    grid-column: 1 / -1;
  }
  &__sort {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 16px;
    &-wrapper {
      width: 150px;
      height: 36px;
    }
  }
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    grid-auto-rows: 1fr;
    @media only screen and (max-width: $bp-large) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: $bp-medium) {
      grid-template-columns: 1fr;
    }
    @media only screen and (max-width: $bp-small) {
      grid-template-columns: repeat(2, 1fr);
      gap: 8px;
    }
    @media only screen and (max-width: $bp-extra-small) {
      grid-template-columns: 1fr;
    }
  }
  &__empty {
    font-family: inherit;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
  }
}
</style>
