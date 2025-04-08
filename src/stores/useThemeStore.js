import { defineStore } from "pinia";

const savedTheme = localStorage.getItem("theme") || "dark";
localStorage.setItem("theme", savedTheme);

document.documentElement.classList.toggle("dark", savedTheme === "dark");

if (savedTheme === "dark") {
  document.body.classList.add("bg-black");
} else {
  document.body.classList.add("bg-white");
}

export const useThemeStore = defineStore("theme", {
  state: () => ({
    animationActive: false,
    isDarkMode: savedTheme === "dark",
    circlePositionX: 0,
    circlePositionY: 0,
  }),
  actions: {
    setAnimation({ circlePositionX, circlePositionY, isDarkMode }) {
      this.animationActive = true;
      this.circlePositionX = circlePositionX;
      this.circlePositionY = circlePositionY;
      this.isDarkMode = isDarkMode;

      if (isDarkMode) {
        document.body.classList.remove("bg-white");
        document.body.classList.add("bg-black");
      }

      if (!isDarkMode) {
        setTimeout(() => {
          document.body.classList.remove("bg-black");
          document.body.classList.add("bg-white");
        }, 1000);
      }

      setTimeout(() => {
        this.animationActive = false;
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", isDarkMode);
      }, 1000);
    },
  },
});
