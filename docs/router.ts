import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/views/Main.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
