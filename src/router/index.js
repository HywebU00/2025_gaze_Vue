import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/landscapeLayout.vue'),
    children: [
      {
        path: '/',
        component: () => import('@/views/landscape/welcomeComponent.vue'),
      },
      {
        path: 'select',
        component: () => import('@/views/landscape/selectComponent.vue'),
      },
      {
        path: 'scan',
        component: () => import('@/views/landscape/scanComponent.vue'),
      },
      {
        path: 'terms',
        component: () => import('@/views/landscape/termsComponent.vue'),
      },
      {
        path: 'loan',
        component: () => import('@/views/landscape/loanComponent.vue'),
      },
      {
        path: 'password',
        component: () => import('@/views/landscape/Admin_password.vue'),
      },
      {
        path: 'home',
        component: () => import('@/views/landscape/Admin_home.vue'),
      },
      {
        path: 'launched1',
        component: () => import('@/views/landscape/Admin_launched1.vue'),
      },
      {
        path: 'launched2',
        component: () => import('@/views/landscape/Admin_launched2.vue'),
      },
      {
        path: 'launched3',
        component: () => import('@/views/landscape/Admin_launched3.vue'),
      },
      {
        path: 'detail',
        component: () => import('@/views/landscape/Admin_launched_detail.vue'),
      },
      {
        path: 'simulation',
        component: () => import('@/views/landscape/Admin_simulation.vue'),
      },
      {
        path: 'allopen',
        component: () => import('@/views/landscape/Admin_allopen.vue'),
      },
      {
        path: 'open1',
        component: () => import('@/views/landscape/Admin_open1.vue'),
      },
      {
        path: 'open2',
        component: () => import('@/views/landscape/Admin_open2.vue'),
      },
      {
        path: 'setting',
        component: () => import('@/views/landscape/Admin_setting.vue'),
      },
      {
        path: 'card',
        component: () => import('@/views/landscape/Admin_card.vue'),
      },
      {
        path: 'reader',
        component: () => import('@/views/landscape/Admin_card_reader.vue'),
      },
      {
        path: 'librarian',
        component: () => import('@/views/landscape/Admin_card_librarian.vue'),
      },
      {
        path: 'add',
        component: () => import('@/views/landscape/Admin_card_add.vue'),
      },
      {
        path: 'dialog',
        component: () => import('@/views/landscape/dialogComponent.vue'),
      },
    ],
  },
  {
    path: '/portrait',
    component: () => import('@/views/layout/portraitLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('@/views/portrait/defaultComponent.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/views/layout/loginPage.vue'),
  },
  {
    path: '/index',
    component: () => import('@/views/layout/indexPage.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  // history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
