import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/credits',
    name: 'Credits',
    component: () => import('@/views/Credits.vue')
  },
  {
    path: '/subscriptions',
    name: 'Subscriptions',
    component: () => import('@/views/Subscriptions.vue')
  },
  {
    path: '/receipts',
    name: 'Receipts',
    component: () => import('@/views/Receipts.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
