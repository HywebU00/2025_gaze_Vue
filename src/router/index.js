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
      // {
      //   path: 'scan',
      //   component: () => import('@/views/landscape/scanComponent.vue'),
      // },
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
    ],
  },
  {
    path: '/portrait',
    component: () => import('@/views/layout/portraitLayout.vue'),
    children: [
      {
        path: '/',
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
  history: createWebHashHistory(import.meta.env.BASE_UR),
  routes,
});

export default router;
