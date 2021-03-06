import Vue from "vue";
import App from "@/App.vue";
import VueRouter from "vue-router";
import "bootstrap-css-only";
import {
  BootstrapVue
} from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import HomePage from "@/components/pages/HomePage.vue";
import GoalPage from "@/components/pages/GoalPage.vue";
import GoalsPage from "@/components/pages/GoalsPage.vue";
import GoalCreatePage from "@/components/pages/GoalCreatePage.vue";
import TopGoalsPage from "@/components/pages/TopGoalsPage.vue";

Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

const routes = [{
    path: "/",
    component: HomePage,
    name: "Home",
  },
  {
    path: "/goal/:slug",
    component: GoalPage,
    name: "Goal",
    props: true,
  },
  {
    path: "/goals",
    component: GoalsPage,
    name: "Goals",
  },
  {
    path: "/top",
    component: TopGoalsPage,
    name: "Top",
  },
  {
    path: "/goals/create",
    component: GoalCreatePage,
    name: "Add a goal",
  },
];

const router = new VueRouter({
  routes: routes,
  mode: "history",
});

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");