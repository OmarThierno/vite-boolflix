<script>
import { store } from '../store'

export default {
  props: {
    id: String,
  },
  data() {
    return {
      isShow: false,
      store,
    }
  },
  methods: {
    showPopup() {
      this.isShow = !this.isShow
    }
  }
}
</script>

<template>
  <div class="my-3">

    <div class="popup">
      <button @click="[showPopup(), $emit('giveMeId')]" class="btn btn-light">Cerca Cast</button>
      <div class="popuptext" id="myPopup" :class="{ 'show': isShow }">
        <h6>Cast:</h6>
        <div v-for="person in store.castArr.slice(0, 5)">
          {{ `"${person.name}"` }}
        </div>

        <h6 class="mt-3">Genere:</h6>
        <div v-for="gen in store.genrArr">
          {{ `"${gen.name}"` }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* Popup container - can be anything you want */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* The actual popup */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
  font-size: 0.6rem;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class - hide and show the popup */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s;
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>