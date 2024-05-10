<script>
import { store } from '../store'
import AppCard from './AppCard.vue'
import AppHero from './AppHero.vue'

export default {
  components: {
    AppCard,
    AppHero,
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

    <div class="container">
      <div>Movie</div>

      <div class="row row-cols-2 row-cols-sm-4 row-cols-md-6 row-cols-lg-9 g-1">

        <div v-for="film in store.movieArr" class="col">
          <AppCard :cardObj="film" />
        </div>
      </div>

      <div>Serie TV</div>

      <div class="row row-cols-2 row-cols-sm-4 row-cols-md-6 row-cols-lg-9 g-1">
        <div v-for="serie in store.seriesTvArr" class="col">
          <AppCard :cardObj="serie" />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>