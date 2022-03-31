export const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: () => import('./pages/index.vue'),
  }]