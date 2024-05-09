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
    this.getCallAPI();

  },
  methods: {
    getCallAPI() {
      const params = {
        api_key: this.store.api_key,
        query: this.store.searchQuery,
      };

      axios.get('https://api.themoviedb.org/3/search/movie', {
        params
      }).then((resp) => {
        // console.log(resp.data.results);
        this.store.movieArr = resp.data.results;
      })

      axios.get('https://api.themoviedb.org/3/search/tv', {
        params
      }).then((resp) => {
        // console.log(resp.data.results);
        this.store.seriesTvArr = resp.data.results;
      })
    },
  }
}
</script>

<template>
  <AppHeader @searchQuery="getCallAPI" />

  <AppMain />
</template>

<style lang="scss"></style>
