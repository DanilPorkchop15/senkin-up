import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Auth from '../views/Auth.vue';
import User from '../views/User.vue';
import Register from '../views/Register.vue';
import News from '../views/News.vue';
import Announcements from '../views/Announcements.vue';
import NotFound from '../views/NotFound.vue';
import NewsDetail from "@/views/NewsDetail.vue";
import AnnouncementDetail from "@/views/AnnouncementDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/auth",
      name: "auth",
      component: Auth
    },
    {
      path: "/profile",
      name: "profile",
      component: User
    },
    {
      path: "/register",
      name: "register",
      component: Register
    },
    {
      path: "/news",
      name: "news",
      component: News
    },
    {
      path: "/news/:id",
      name: "news-detail",
      component: NewsDetail
    },
    {
      path: "/announcements",
      name: "announcements",
      component: Announcements
    },
    {
      path: "/announcements/:id",
      name: "announcements-detail",
      component: AnnouncementDetail
    },
    {
      path: "/user",
      name: "user",
      component: User
    },
    {
      path: "/:catchAll(.*)",
      name: "404",
      component: NotFound
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
});



export default router;