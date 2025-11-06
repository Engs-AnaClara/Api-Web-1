import { createRouter, createWebHistory } from 'vue-router'
import CharactersListView from '../views/CharactersListView.vue'
import HomePageView from '../views/HomePageView.vue' 
import CharacterDetailView from '../views/CharacterDetailView.vue'
import FavoritesPageView from '../views/FavoritesPageView.vue' 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePageView,
    },
    {
      path: '/personagens',
      name: 'CharactersList',
      component: CharactersListView,
    },
    {
      path: '/favoritos',
      name: 'FavoritesPage',
      component: FavoritesPageView,
    },
    {
      path: '/personagem/:id',
      name: 'CharacterDetail',
      component: CharacterDetailView,
    },
  ],
})

export default router
