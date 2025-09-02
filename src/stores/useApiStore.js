import { defineStore } from "pinia";
import axios from "axios";

const callAPIs = async (endpoint) => {
  const res = await axios.get(
    `https://reeze-portfolio-api.up.railway.app/${endpoint}`
  );
  return res.data;
};

export const useApiStore = defineStore("api", {
  state: () => ({
    skills: [],
    experiences: [],
    projects: [],
    blogs: [],
    loading: false,
  }),
  actions: {
    async fetchAll() {
      this.loading = true;
      try {
        this.skills = await callAPIs("skills");
        this.projects = await callAPIs("projects");
        this.blogs = await callAPIs("blogs");
      } catch (err) {
        this.error = err.message || "Gagal fetch data";
      } finally {
        this.loading = false;
      }
    },
  },
});
