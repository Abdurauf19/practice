import About from '../src/pages/About'


export const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/about',
    name: About
  }
]