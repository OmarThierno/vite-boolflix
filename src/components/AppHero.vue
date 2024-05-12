<script>
import { store } from '../store'

export default {
  data() {
    return {
      store,
      heroPath: '',
      heroFilmInfo: {}
    }
  },
  created() {

  },
  methods: {
    getHeroPoster() {
      if (store.movieArr.length !== null) {
        let counter = 0;
        let heroPath = '';
        if (this.store.movieArr[counter].backdrop_path !== null) {
          this.heroFilmInfo = this.store.movieArr[counter];
          return heroPath = 'https://image.tmdb.org/t/p/w342' + this.store.movieArr[counter].backdrop_path
        } else {
          counter++
          this.heroFilmInfo = this.store.movieArr[counter];
          return heroPath = 'https://image.tmdb.org/t/p/w342' + this.store.movieArr[counter].backdrop_path
        }
      }
    }
  }
}
</script>

<template>
  <div v-show="store.searchQuery === ''">
    <div class="hero d-flex" v-if="store.movieArr.length !== 0">
      <img class="img-fluid" :src="getHeroPoster()" alt="">
      <div class="flex-grow-1 px-3 py-3" v-if="store.movieArr.length !== 0"
        :style="{ 'background-image': 'url(' + getHeroPoster() + ')' }">
        <h1>{{ heroFilmInfo.original_title }}</h1>
        <div>{{ heroFilmInfo.overview }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  color: rgb(164, 164, 164);

  div {
    background-size: cover;
    background-repeat: no-repeat;

  }
}
</style>