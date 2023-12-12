import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import FilterView from "@/views/FilterView.vue";
import EditorView from "@/views/EditorView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/products",
    name: "products",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ProductListView.vue"),
    children: [
      {
        path: "selector",
        components: {
          default: FilterView,
        },
      },
      {
        path: "editor",
        components: {
          default: EditorView,
          filters: EditorView,
        },
      },
    ],
  },
  {
    path: "/suppliers",
    name: "suppliers",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SuppliersView.vue"),
  },
  {
    path: "/contacts",
    name: "contacts",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ContactsView.vue"),
  },
  {
    path: "/shopping-rules",
    name: "shopping-rules",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ShoppingRulesView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
