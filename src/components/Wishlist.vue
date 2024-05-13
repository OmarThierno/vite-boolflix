<script>
import { store } from '../store'

export default {
  props: {
    cardToSave: Object,
  },
  data() {
    return {
      store,
      isClick: false
    }
  },
  computed: {
    // toogleClick() {
    //   return this.isClick = !this.isClick
    // }
  },
  methods: {
    toogleClick() {
      return this.isClick = !this.isClick
    },
    saveWishlist() {
      if (this.isClick) {
        this.store.wishlist.push(this.cardToSave)
      } else {
        const wishlistRemove = this.cardToSave;

        this.store.wishlist = this.store.wishlist.filter(curObj => curObj !== wishlistRemove)
      }

      this.localStorageWishlistSave()
    },
    localStorageWishlistSave() {
      const jsonWishlist = JSON.stringify(this.store.wishlist)

      localStorage.setItem('wishlist', jsonWishlist)
    }
  }
}

</script>

<template>
  <div class="text-end mx-2">
    <i v-if="!isClick" @click="[toogleClick(), saveWishlist()]" title="add wishlist" class="fa-regular fa-star"></i>
    <i v-else @click="[toogleClick(), saveWishlist()]" class="click fa-solid fa-star" title="add wishlist"></i>
  </div>

</template>

<style scoped lang="scss">
.click {
  color: rgb(24, 138, 252);
}
</style>