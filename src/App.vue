<template>
  <div class="container">
    <main class="main">
      <div class="form-box">
        <h1 class="form-box__title">Добавление товара</h1>
        <add-form></add-form>
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
            ></app-select>
          </div>
        </div>
        <div class="cards__inner">
          <product-card
            v-for="card in cards"
            :key="card.name"
            :name="card.name"
            :img="card.img"
            :description="card.description"
            :price="card.price"
          ></product-card>
        </div>
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
      sortValue: '',
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
    }
  },
  methods: {
    updateSortValue (option) {
      this.sortValue = option
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
}

.form-box {
  grid-column: 1 / 2;
  &__title {
    font-family: inherit;
    font-size: 28px;
    font-weight: 600;
    margin-bottom: 16px;
  }
}

.cards {
  grid-column: 2 / -1;
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
  }
}

</style>
