<script>
import { store } from '../store'
import AppCard from '../components/AppCard.vue'

export default {
  components: {
    AppCard,
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="container">
    <!-- Serie  -->
    <h2 v-if="store.seriesTvArr.length !== 0" class="my-3">Serie TV</h2>

    <div class="row row-cols-1 row-cols-sm-4 row-cols-md-6 row-cols-lg-9 g-1 mb-3">
      <div v-for="serie in store.seriesTvArr" class="col">
        <AppCard :cardObj="serie" />
      </div>
    </div>
    <!-- /Serie  -->
  </div>

</template>

<style lang="scss" scoped></style>