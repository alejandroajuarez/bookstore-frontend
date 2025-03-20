import { createWebHistory, createRouter } from "vue-router";

import Signup from "./components/Signup.vue";
import Login from "./components/Login.vue";
import LogoutLink from "./components/LogoutLink.vue";
import BooksIndex from "./components/BooksIndex.vue";
import BooksNew from "./components/BooksNew.vue";

const routes = [
  { path: "/signup", component: Signup },
  { path: "/login", component: Login },
  { path: "/logout", component: LogoutLink },
  { path: "/books", component: BooksIndex },
  { path: "/books/new", component: BooksNew },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;