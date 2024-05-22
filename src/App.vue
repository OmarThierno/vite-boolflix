<script>
import axios from 'axios';
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'


export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      store,
    }
  }, created() {
    this.getRandMovTv()

    const localWishlist = localStorage.getItem('wishlist')

    if (localWishlist !== null) {
      this.store.wishlist = JSON.parse(localWishlist)
    } else {
      this.store.wishlist = []
    }
  },
  methods: {
    getRandMovTv() {
      this.store.isWishlist = false;

      const params = {
        api_key: this.store.api_key,
      };

      const movReq = axios.get('https://api.themoviedb.org/3/discover/movie', { params });

      const serReq = axios.get('https://api.themoviedb.org/3/discover/tv', { params });

      axios.all([movReq, serReq]).then((resp) => {
        this.store.movieArr = resp[0].data.results;
        this.store.seriesTvArr = resp[1].data.results;
      })
    },
    getData() {
      this.getMovies();
      this.getSerie()
      this.store.searchQuery = '';
    },
    getMovies() {
      const params = {
        api_key: this.store.api_key,
        query: this.store.searchQuery,
      };

      axios.get('https://api.themoviedb.org/3/search/movie', {
        params
      }).then((resp) => {
        this.store.movieArr = resp.data.results;
      })

    },
    getSerie() {
      const params = {
        api_key: this.store.api_key,
        query: this.store.searchQuery,
      };

      axios.get('https://api.themoviedb.org/3/search/tv', {
        params
      }).then((resp) => {
        this.store.seriesTvArr = resp.data.results;
      })
    },
  }
}
</script>

<template>
  <AppHeader @searchQuery="getData" />

  <router-view></router-view>

  <AppMain @returnHome="getRandMovTv" />
</template>

<style lang="scss"></style>
