import Work from '../src/pages/Work.vue'
import Blog from '../src/pages/Blog.vue'
import Contact from '../src/pages/Contact.vue'


export const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: () => import('./pages/index.vue'),
  },
  {
    path: '/Work',
    name: 'work',
    component: Work
  },
  {
    path: '/Blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/Contact',
    name: 'contact',
    component: Contact
  },

]