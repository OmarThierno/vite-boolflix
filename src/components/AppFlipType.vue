<script>
import { store } from '../store.js'

export default {
  data() {
    return {
      genre: [''],
      store,
    }
  }
}
</script>

<template>
  <select v-if="!store.isWishlist" class="form-select text-center" aria-label="Select the genre">
    <option selected>Select the genre</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
  </select>

</template>

<style lang="scss" scoped></style>