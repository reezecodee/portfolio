import { createRouter, createWebHistory } from "vue-router";

import MainLayout from "@/layout/MainLayout.vue"; 

import AboutView from "@/views/AboutView.vue";
import ExperienceView from "@/views/ExperienceView.vue";
import EducationView from "@/views/EducationView.vue";
import SkillView from "@/views/SkillView.vue";
import ProjectView from "@/views/ProjectView.vue";
import BlogView from "@/views/BlogView.vue";
import Guestbook from "@/views/Guestbook.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || "/"),
  routes: [
    {
      path: "/",
      component: MainLayout,
      children: [
        {
          path: "",
          name: "about",
          component: AboutView,
          meta: {
            title: "About Me",
            header: "About" 
          },
        },
        {
          path: "experiences",
          name: "experiences",
          component: ExperienceView,
          meta: {
            title: "Experiences",
            header: "Experiences"
          },
        },
        {
          path: "educations",
          name: "educations",
          component: EducationView,
          meta: {
            title: "Educations",
            header: "Educations"
          },
        },
        {
          path: "skills", 
          name: "skills",
          component: SkillView,
          meta: {
            title: "Skills",
            header: "Skills"
          },
        },
        {
          path: "projects", 
          name: "projects",
          component: ProjectView,
          meta: {
            title: "Projects",
            header: "Projects"
          },
        },
        {
          path: "blogs", 
          name: "blogs",
          component: BlogView,
          meta: {
            title: "Blogs",
            header: "Blogs"
          },
        },
        {
          path: "guestbook", 
          name: "guestbook",
          component: Guestbook,
          meta: {
            title: "Guestbook",
            header: "Guestbook"
          },
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - My Portfolio' || "My Portfolio";
  
  next();
});

export default router;