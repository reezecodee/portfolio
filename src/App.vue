<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Resume from './components/Resume.vue'
import Projects from './components/Projects.vue'
import Certifications from './components/Certifications.vue'
import Blog from './components/Blog.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Navbar />
  <main>
    <Hero />
    <About />
    <Resume />
    <Projects />
    <Certifications />
    <Blog />
    <Contact />
  </main>
  <Footer />
</template>
