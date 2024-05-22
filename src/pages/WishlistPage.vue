<script>
import { store } from '../store'
import AppCard from '../components/AppCard.vue'

export default {
  components: {
    AppCard
  },
  data() {
    return {
      store,
    }
  }
}
</script>

<template>
  <div class="container wishlist-container">
    <h2 class="my-3">Wishlist</h2>

    <div v-if="store.wishlist.length !== 0" class="row row-cols-1 row-cols-sm-4 row-cols-md-6 row-cols-lg-9 g-1">
      <div v-for="filmSerie in store.wishlist" class="col">
        <AppCard :cardObj="filmSerie" />
      </div>
    </div>
    <div v-else>
      <h4>Sorry bro, there are no movies/series in the wish list...</h4>
      <span>press here to add something</span>
      <span @click="$emit('returnHome')" class="btn btn-outline-light mx-3">HOME</span>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>