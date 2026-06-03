import { createRouter, createWebHistory } from 'vue-router';
const Home = () => import('../views/HomeView.vue');
const About = () => import('../views/AboutView.vue');
const Contact = () => import('../views/ContactView.vue');
const RecentWork = () => import('../views/RecentWork.vue');
const NotFound = () => import('../views/NotFound.vue');

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
  {
    path: '/recent',
    name: 'Recent Work',
    component: RecentWork,
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;