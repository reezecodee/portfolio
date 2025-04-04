import { defineStore } from "pinia";

export const useThemeStore = defineStore("theme", {
  state: () => ({
    animationActive: false,
    isDarkMode: localStorage.getItem("theme") === "dark",
    circlePositionX: 0,
    circlePositionY: 0,
  }),
  actions: {
    setAnimation({ circlePositionX, circlePositionY, isDarkMode }) {
      this.animationActive = true;
      this.circlePositionX = circlePositionX;
      this.circlePositionY = circlePositionY;
      this.isDarkMode = isDarkMode;

      setTimeout(() => {
        this.animationActive = false;
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
      }, 1000);
    },
  },
});
