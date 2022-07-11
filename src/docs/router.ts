import { createWebHistory, createRouter } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/main.vue')
  },
  {
    path: '/base',
    component: () => import('@/views/base/typography.vue')
  },
  {
    path: '/base/typography',
    component: () => import('@/views/base/typography.vue')
  },
  {
    path: '/component',
    component: () => import('@/views/component/button.vue')
  },
  {
    path: '/component/button',
    component: () => import('@/views/component/button.vue')
  },
  {
    path: '/component/label',
    component: () => import('@/views/component/label.vue')
  },
  {
    path: '/component/table',
    component: () => import('@/views/component/table.vue')
  },
  {
    path: '/component/alert',
    component: () => import('@/views/component/alert.vue')
  },
  {
    path: '/component/form',
    component: () => import('@/views/component/form.vue')
  },
  {
    path: '/component/list',
    component: () => import('@/views/component/list.vue')
  },
  {
    path: '/component/navbar',
    component: () => import('@/views/component/navbar.vue')
  },
  {
    path: '/component/card',
    component: () => import('@/views/component/card.vue')
  },
  {
    path: '/component/icon',
    component: () => import('@/views/component/icon.vue')
  },
  {
    path: '/component/tab',
    component: () => import('@/views/component/tab.vue')
  },
  {
    path: '/component/pagination',
    component: () => import('@/views/component/pagination.vue')
  },
  {
    path: '/examples',
    component: () => import('@/views/examples/list.vue')
  },
  {
    path: '/examples/list',
    component: () => import('@/views/examples/list.vue')
  },
  {
    path: '/examples/join',
    component: () => import('@/views/examples/join.vue')
  },
  {
    path: '/examples/login',
    component: () => import('@/views/examples/login.vue')
  },
  {
    path: '/examples/login-simple',
    component: () => import('@/views/examples/login-simple.vue')
  },
  {
    path: '/examples/settings',
    component: () => import('@/views/examples/settings.vue')
  },
  {
    path: '/examples/project',
    component: () => import('@/views/examples/project.vue')
  },
  {
    path: '/examples/detail',
    component: () => import('@/views/examples/detail.vue')
  },
  {
    path: '/examples/billing',
    component: () => import('@/views/examples/billing.vue')
  },
  {
    path: '/examples/command-palette',
    component: () => import('@/views/examples/command-palette.vue')
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes
});
