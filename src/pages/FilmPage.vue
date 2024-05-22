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
    <!-- Movie  -->
    <h2 v-if="store.movieArr.length !== 0" class="my-3">Movie</h2>
    <div class="row row-cols-1 row-cols-sm-4 row-cols-md-6 row-cols-lg-9 g-1">

      <div v-for="film in store.movieArr" class="col">
        <AppCard :cardObj="film" />
      </div>
    </div>
    <!-- /Movie  -->
  </div>

</template>

<style lang="scss" scoped></style>