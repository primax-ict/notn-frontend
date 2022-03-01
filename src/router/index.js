import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import DashboardOverview from "../views/dashboard/Main.vue";
import StaffIndex from "../views/staff/Index.vue";
import DepartmentIndex from "../views/department/Index.vue";
import Settings from "../views/setting/Index.vue";

import Login from "../views/login/Main.vue";
import ErrorPage from "../views/error-page/Main.vue";

const routes = [
  {
    path: "/",
    component: SideMenu,
    children: [
      {
        path: "/",
        name: "dashboard",
        component: DashboardOverview,
      },

      /**
       * Staff Routes
       */
      {
        path: "/staff/list",
        name: "staff-list",
        component: StaffIndex,
      },
      {
        path: "/staff/departments",
        name: "staff-departments",
        component: DepartmentIndex,
      },

      /**
       * Budget Routes
       */
      {
        path: "/budgets/list",
        name: "budget-list",
        component: DashboardOverview,
      },
      {
        path: "/budgets/approvals",
        name: "budget-approval-requests",
        component: DashboardOverview,
      },
      {
        path: "/budgets/categories",
        name: "budget-categories",
        component: DashboardOverview,
      },

      /**
       * Expense Routes
       */
      {
        path: "/expense/list",
        name: "expense-list",
        component: DashboardOverview,
      },
      {
        path: "/expense/approvals",
        name: "expense-approval-requests",
        component: DashboardOverview,
      },

      /**
       * Settings Routes
       */
      {
        path: "/settings",
        name: "setting-index",
        component: Settings,
      },

      /**
       * Report Routes
       */
      {
        path: "/reports/response-time",
        name: "response-time",
        component: DashboardOverview,
      },
      {
        path: "/reports/activity-log",
        name: "activity-log",
        component: DashboardOverview,
      },
    ],
  },

  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/error-page",
    name: "error-page",
    component: ErrorPage,
  },
  {
    path: "/:pathMatch(.*)*",
    component: ErrorPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

export default router;
