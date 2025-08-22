import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");

// Check if user is not already on index.html
if (!window.location.pathname.endsWith("Content.vue")) {
  window.location.href = "Content.vue"; // redirect to homepage
}
