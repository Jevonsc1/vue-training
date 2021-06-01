import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import * as netlifyIdentityWidget from "netlify-identity-widget";
import GoTrue from "gotrue-js";

// netlifyIdentityWidget.init();

export const auth = new GoTrue({
  APIUrl: "https://jevons-vue.netlify.app/.netlify/identity",
  setCookie: true,
});

createApp(App).use(store).use(router).mount("#app");
