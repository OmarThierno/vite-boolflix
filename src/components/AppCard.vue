<script>
import { store } from '../store'

export default {
  props: {
    curArr: Array,
    keyTitle: String,
    keyLanguage: String,
    keyPath: String,
    keyvVote: Number,
  },
  data() {
    return {
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
      ]
    }
  },
  methods: {
    getImgPoster(str) {
      return 'https://image.tmdb.org/t/p/w342' + str
    },
    getArr(nation) {
      for (let i = 0; i < this.flagArr.length; i++) {
        const curFlagArr = this.flagArr[i]
        if (nation === curFlagArr.language) {
          return curFlagArr.path
        }
      }
    },
    converterAverage(average) {
      const scale = 5;
      const operazione = 5 * average / 10;
      const result = Math.round(operazione)
      return result
    },
  }
}
</script>

<template>
  <div v-for="film in curArr" class="col">

    <div class="card card-front h-100">
      <img :src="getImgPoster(film.poster_path)" class="card-img" alt="...">
    </div>

    <div class="card card-back h-100">
      <div>{{ film.original_title }}</div>
      <div>{{ film.original_language }}</div>
      <div>
        <img class="ms_flag" :src="getArr(film.original_language)" alt="">
      </div>
      <div>{{ converterAverage(film.vote_average) }}</div>
      <div>
        <i v-for="icon in converterAverage(film.vote_average)" class="fa-solid fa-star"></i>
        <i class="fa-regular fa-star"></i>
      </div>
    </div>
  </div>

</template>

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

}

.ms_flag {
  width: 20px;
}
</style>