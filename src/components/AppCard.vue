<script>
import axios from 'axios';
import AppSearchCast from "./AppSearchCast.vue";
import { store } from '../store'

export default {
  components: {
    AppSearchCast,
  },
  props: {
    cardObj: Object,
  },
  data() {
    return {
      flagAlternative: 'https://i.pinimg.com/474x/7f/bc/2d/7fbc2d8a6a1283a2ef8bae0586310fc2.jpg',
      posterAlternative: 'https://i.pinimg.com/474x/5f/ff/a4/5fffa412ec664d316f59e314910a71d5.jpg',
      store,
      flagArr: [
        {
          language: 'en',
          path: 'https://i.pinimg.com/564x/4f/f7/36/4ff736715682f408b3683cbc89c8e166.jpg',
        },
        {
          language: 'es',
          path: 'https://i.pinimg.com/474x/e7/51/d8/e751d8abe11ee2860fbfb7a8e7ba0db2.jpg',
        },
        {
          language: 'fr',
          path: 'https://i.pinimg.com/736x/b8/7e/ee/b87eeee30014d72be618b915ddae00eb.jpg',
        },
        {
          language: 'it',
          path: 'https://i.pinimg.com/564x/c2/eb/bf/c2ebbfc932092e6f336616e260630ee2.jpg',
        },
        {
          language: 'sk',
          path: 'https://i.pinimg.com/474x/4f/fc/52/4ffc52a04d14a8a227ce9190ead26d1e.jpg',
        },
        {
          language: 'ru',
          path: 'https://i.pinimg.com/474x/f3/5b/b2/f35bb2b3337198032c18a8a05ad7069e.jpg',
        },
        {
          language: 'de',
          path: 'https://i.pinimg.com/474x/18/fd/89/18fd89f9ec613b067cc42e532c39628f.jpg',
        },
        {
          language: 'sv',
          path: 'https://i.pinimg.com/474x/8e/6f/c4/8e6fc4a43ba3130765ebaa14155750b5.jpg',
        },
        {
          language: 'tl',
          path: 'https://i.pinimg.com/474x/b5/0f/19/b50f19cf055487fb6a810f67fe838dbd.jpg',
        },
        {
          language: 'pt',
          path: 'https://i.pinimg.com/474x/89/43/6b/89436b3dd05f49b4bc8c1027d63f928e.jpg',
        },
        {
          language: 'ko',
          path: 'https://i.pinimg.com/474x/9b/80/84/9b808414027063105aa51df343212836.jpg',
        },
        {
          language: 'cn',
          path: 'https://i.pinimg.com/474x/0f/1e/11/0f1e11cf77dffab75f9d6e4a3a961dc0.jpg',
        },
        {
          language: 'sh',
          path: 'https://i.pinimg.com/474x/52/c7/ba/52c7ba8bd8c0438da300bfddb81a65ce.jpg',
        },
        {
          language: 'zh',
          path: 'https://i.pinimg.com/474x/14/6b/27/146b2751df083cf25c646935361e8fb2.jpg',
        },
        {
          language: 'ja',
          path: 'https://i.pinimg.com/474x/4f/e8/c0/4fe8c0e811313675cc8c5c7def589be3.jpg',
        },
        {
          language: 'fi',
          path: 'https://i.pinimg.com/474x/7e/3e/e1/7e3ee1555970d4225db99730d26f997d.jpg',
        },
        {
          language: 'hi',
          path: 'https://i.pinimg.com/474x/6b/b0/ce/6bb0ce5f2a54b6de0d6330e3e918c702.jpg',
        },
        {
          language: 'sr',
          path: 'https://i.pinimg.com/474x/0f/f5/b8/0ff5b8c4b7af5444df2924196ef9035b.jpg',
        },
        {
          language: 'ar',
          path: 'https://i.pinimg.com/474x/ed/53/0c/ed530c3a478f5389b009e91446f89dca.jpg',
        },
      ],
    }
  },
  computed: {
    cardTitle() {
      return !!this.cardObj.title ? this.cardObj.title : this.cardObj.name;
    }
  },
  methods: {
    getImgPoster(str) {
      return 'https://image.tmdb.org/t/p/w342' + str
    },
    getFlagPath(nation) {
      let flag = true;
      for (let i = 0; i < this.flagArr.length; i++) {
        const curFlagArr = this.flagArr[i]
        if (nation === curFlagArr.language && flag) {
          flag = false
          return curFlagArr.path
        }
      }

      if (flag) {
        return this.flagAlternative
      }
    },
    converterAverage(average) {
      const scale = 5;
      const operazione = 5 * average / 10;
      const result = Math.round(operazione)
      return result
    },
    starNonColor(vote) {
      const results = 5 - this.converterAverage(vote)
      return results
    },
    getCastGen(idToSearch, movieOrSerie) {
      const params = {
        api_key: this.store.api_key,
      };

      if (movieOrSerie === this.cardObj.title) {
        const castReq = axios.get(`https://api.themoviedb.org/3/movie/${idToSearch}/credits`, {
          params
        });

        const genrReq = axios.get(`https://api.themoviedb.org/3/movie/${idToSearch}`, {
          params
        });

        axios.all([castReq, genrReq]).then((resp) => {
          this.store.castArr = resp[0].data.cast;
          this.store.genrArr = resp[1].data.genres;
        })
      } else {
        const castReq = axios.get(`https://api.themoviedb.org/3/tv/${idToSearch}/credits`, {
          params
        });

        const genrReq = axios.get(`https://api.themoviedb.org/3/tv/${idToSearch}`, {
          params
        });

        axios.all([castReq, genrReq]).then((resp) => {
          this.store.castArr = resp[0].data.cast;
          this.store.genrArr = resp[1].data.genres;
        })
      }



    }
  }
}
</script>
<!-- TEMPLATE  -->
<template>

  <div class="card card-front h-100">
    <img v-if="cardObj.poster_path !== null" :src="getImgPoster(cardObj.poster_path)" class="card-img" alt="...">
    <img v-else :src="posterAlternative" alt="">
  </div>

  <div class="card card-back text-center h-100">
    <div class="ms_title">{{ cardTitle }}</div>
    <div class="ms_flag-container d-flex justify-content-center gap-2 my-3">
      <div>{{ cardObj.original_language }}</div>
      <div>
        <img class="ms_flag" :src="getFlagPath(cardObj.original_language)" alt="">
      </div>
    </div>
    <!-- <div>{{ converterAverage(cardObj.vote_average) }}</div> -->
    <div>
      <i v-for="icon in converterAverage(cardObj.vote_average)" class="fa-solid fa-star"></i>
      <i v-for="iconNotCol in starNonColor(cardObj.vote_average)" class="fa-regular fa-star"></i>
    </div>

    <AppSearchCast @giveMeId="getCastGen(cardObj.id, cardTitle)" />

  </div>

</template>
<!-- /TEMPLATE  -->


<style lang="scss" scoped>
.col {

  .card-front,
  .card-back {
    background-color: black;
    color: white;
    position: relative;
  }

  .card-back {
    display: none;
  }

  &:hover .card-front {
    display: none;
  }

  &:hover .card-back {
    display: block;
  }

  .ms_title {
    font-size: 0.8rem;
  }

}

.ms_flag {
  width: 20px;
}
</style>