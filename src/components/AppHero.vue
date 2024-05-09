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
      let counter = 0;
      if (this.store.movieArr[0].backdrop_path !== null) {
        this.heroPath = 'https://image.tmdb.org/t/p/w342' + this.store.movieArr[counter].backdrop_path
        console.log(this.store.movieArr[0]);
      } else {
        counter++
        this.heroPath = 'https://image.tmdb.org/t/p/w342' + this.store.movieArr[counter].backdrop_path
      }
    },
  }
}
</script>

<template>
  <!-- <div class="hero">
    <img :src="heroPath" alt="">
    <button @click="getHeroPoster()"></button>
  </div> -->
</template>

<style lang="scss" scoped></style>