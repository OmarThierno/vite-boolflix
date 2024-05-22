import {createRouter, createWebHistory} from 'vue-router';

import HomePage from './pages/HomePage.vue';
import WishlistPage from './pages/WishlistPage.vue';
import FilmPage from './pages/FilmPage.vue';
import SerieTvPage from './pages/SerieTvPage.vue';

export const router = createRouter ({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/wishlist',
      name: 'wishlist',
      component: WishlistPage
    },
    {
      path: '/film',
      name: 'film',
      component: FilmPage
    },
    {
      path: '/serieTv',
      name: 'serieTv',
      component: SerieTvPage
    }
  ],
})