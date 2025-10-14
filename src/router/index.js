import { createRouter, createWebHistory } from "vue-router";

// 1. Import komponen Layout utama Anda
import MainLayout from "@/layout/MainLayout.vue"; // Pastikan path ini benar

// 2. Import semua komponen View/Halaman Anda
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
      // 3. Definisikan Layout sebagai Rute Induk (Parent Route)
      path: "/",
      component: MainLayout,
      // 4. Semua halaman sekarang menjadi "anak" (children) dari MainLayout
      children: [
        {
          path: "", // Path kosong berarti ini adalah default untuk '/'
          name: "about",
          component: AboutView,
          // Mengirim props 'header' dan meta title ke layout
          meta: {
            title: "About Me - My Portfolio",
            header: "About" 
          },
        },
        {
          path: "experiences", // Path menjadi '/experiences'
          name: "experiences",
          component: ExperienceView,
          meta: {
            title: "Experiences - My Portfolio",
            header: "Experience"
          },
        },
        {
          path: "educations", // Path menjadi '/educations'
          name: "educations",
          component: EducationView,
          meta: {
            title: "Educations - My Portfolio",
            header: "Education"
          },
        },
        {
          path: "skills", // Path menjadi '/skills'
          name: "skills",
          component: SkillView,
          meta: {
            title: "Skills - My Portfolio",
            header: "Skills"
          },
        },
        {
          path: "projects", // Path menjadi '/projects'
          name: "projects",
          component: ProjectView,
          meta: {
            title: "Projects - My Portfolio",
            header: "Projects"
          },
        },
        {
          path: "blogs", // Path menjadi '/blogs'
          name: "blogs",
          component: BlogView,
          meta: {
            title: "Blogs - My Portfolio",
            header: "Blogs"
          },
        },
        {
          path: "guestbook", // Path menjadi '/guestbook'
          name: "guestbook",
          component: Guestbook,
          meta: {
            title: "Guestbook - My Portfolio",
            header: "Guestbook"
          },
        },
      ],
    },
  ],
});

// 5. Modifikasi beforeEach untuk mengirim props dari meta
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "My Portfolio";
  
  // Ini akan meneruskan semua isi meta sebagai props ke komponen rute
  to.matched.forEach(record => {
    record.props.default = { ...record.props.default, ...to.meta };
  });

  next();
});

export default router;