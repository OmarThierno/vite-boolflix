<script>
import { store } from '../store.js'
export default {
  data() {
    return {
      store,
    }
  },
}
</script>

<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div class="container">
        <a class="navbar-brand" href="#">BoolFlix</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li @click="$emit('backHome')" class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li @click="$emit('wishlist')" class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Wishlist</a>
            </li>
          </ul>
          <form class="d-flex" role="search" @submit.prevent>
            <input v-model="store.searchQuery" class="form-control me-2" type="search" placeholder="cerca film"
              aria-label="Search">
            <button @click="$emit('searchQuery')" class="btn btn-outline-light" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>