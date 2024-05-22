<script>
import { store } from '../store'
import AppCard from '../components/AppCard.vue'
import AppHero from '../components/AppHero.vue'
import AppFlipType from "../components/AppFlipType.vue";

export default {
  components: {
    AppCard,
    AppHero,
    AppFlipType,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getImgPoster(str) {
      return 'https://image.tmdb.org/t/p/w342' + str
    },
    getArr(nation) {
      for (let i = 0; i < this.flagArr.length; i++) {
        const curFlagArr = this.flagArr[i]
        if (nation === curFlagArr.language) {
          return curFlagArr.path
        }
      }
    },
    converterAverage(average) {
      const scale = 5;
      const operazione = 5 * average / 10;
      const result = Math.round(operazione)
      return result
    },
  },

}
</script>

<template>
  <main>

    <AppHero />

    <AppFlipType />

    <div class="container">
      <!-- Movie  -->
      <h2 v-if="store.movieArr.length !== 0" class="my-3">Movie</h2>
      <div class="row row-cols-1 row-cols-sm-4 row-cols-md-6 row-cols-lg-9 g-1">

        <div v-for="film in store.movieArr" class="col">
          <AppCard :cardObj="film" />
        </div>
      </div>
      <!-- /Movie  -->

      <!-- Serie  -->
      <h2 v-if="store.seriesTvArr.length !== 0" class="my-3">Serie TV</h2>

      <div class="row row-cols-1 row-cols-sm-4 row-cols-md-6 row-cols-lg-9 g-1 mb-3">
        <div v-for="serie in store.seriesTvArr" class="col">
          <AppCard :cardObj="serie" />
        </div>
      </div>
      <!-- /Serie  -->
    </div>
  </main>
</template>

<style lang="scss" scoped>
h2 {
  color: white;
}

.wishlist-container {
  color: white;
}
</style>