import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import RecipeCatalogPage from '@/features/recipes/pages/RecipeCatalogPage.vue'
import RecipeDetail from '@/features/recipes/pages/RecipeDetail.vue'
import StockView from '@/features/stock/pages/StockView.vue'
import AlimentView from '@/features/aliments/pages/AlimentView.vue'
import AlimentDetailView from '@/features/aliments/pages/AlimentDetailView.vue'
import MenuView from '@/features/menus/pages/MenuView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/stock',
      component: StockView,
    },
    {
      path: '/recipes',
      component: RecipeCatalogPage,
    },
    {
        path: '/aliments',
        component: AlimentView,
    },
    {
        path: '/aliment/:id',
        component: AlimentDetailView
    },
    {
        path: '/recipe/:id',
        name: 'recipe',
        component: RecipeDetail
    },
    {
      path: '/menus',
      name: 'menus',
      component: MenuView
    }
  ],
})

export default router