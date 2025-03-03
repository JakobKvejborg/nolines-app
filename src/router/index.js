import { createRouter, createWebHistory } from "vue-router";
import MainMenu from "../components/MainMenu.vue";
import CartView from "../views/CartView.vue";

const routes = [
  { path: "/", component: MainMenu },  
  { path: "/cart", component: CartView } 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
