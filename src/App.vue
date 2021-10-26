<template>
  <div class="container">
    <main class="main">
      <div class="form-box">
        <h1 class="form-box__title">Добавление товара</h1>
        <add-form></add-form>
      </div>
      <div class="cards">
        <div class="cards__sort"></div>
        <div class="cards__inner"></div>
      </div>
    </main>
  </div>
</template>

<script>
import AddForm from './components/AddForm'
export default {
  name: 'App',
  components: {
    AddForm
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
  background-color: #FF8484;
  &__sort {}
  &__inner {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
    grid-auto-rows: 1fr;
  }
}

</style>
