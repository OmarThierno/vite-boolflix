<script>
import { store } from '../store'

export default {
  data() {
    return {
      store,
      heroPath: ''
    }
  },
  created() {

  },
  methods: {
    getHeroPoster() {
      if (store.movieArr.length !== null) {
        let counter = 0;
        let heroPath = '';
        if (this.store.movieArr[0].backdrop_path !== null) {
          return heroPath = 'https://image.tmdb.org/t/p/w342' + this.store.movieArr[counter].backdrop_path
          console.log(this.store.movieArr[0]);
        } else {
          counter++
          return heroPath = 'https://image.tmdb.org/t/p/w342' + this.store.movieArr[counter].backdrop_path
        }
      }
    },
  }
}
</script>

<template>
  <div class="hero" v-if="store.movieArr.length !== 0" :style="{ 'background-image': 'url(' + getHeroPoster() + ')' }">
    <img class="img-fluid" :src="getHeroPoster()" alt="">
  </div>
</template>

<style lang="scss" scoped>
.hero {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>