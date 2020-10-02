import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Photo from '../views/Photo.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
      path: '/photo/:id',
      name: 'photo',
      component: Photo,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
