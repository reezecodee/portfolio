import { createRouter, createWebHistory } from "vue-router";
import AboutView from "@/views/AboutView.vue";
import ProjectView from "@/views/ProjectsView.vue";
import BlogsView from "@/views/BlogsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'),
  routes: [
    {
      path: "/",
      name: "about",
      component: AboutView,
      meta: {
        title: "About Me - My Portfolio",
      },
    },
    {
      path: "/my-projects",
      name: "projects",
      component: ProjectView,
      meta: {
        title: "Projects - My Portfolio",
      },
    },
    {
      path: "/blogs",
      name: "blogs",
      component: BlogsView,
      meta: {
        title: "Blogs - My Portfolio",
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Title";
  next();
});

export default router;
