import { createRouter, createWebHistory } from "vue-router";
import SideMenu from "../layouts/side-menu/Main.vue";
import DashboardOverview from "../views/dashboard/Main.vue";

import Budget from "../views/budget/Main.vue";
import BudgetHead from "../views/budget/budget-head.vue";
import BudgetApprovalRequest from "../views/budget/approval-request.vue";

import Auth from "../views/login/Main.vue";
import Login from "../views/login/login.vue";
import twoFAPassword from "../views/login/2fa-password.vue";
import forgotPassword from "../views/forgot-password/Main.vue";
import resetPassword from "../views/forgot-password/reset-password.vue";

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
        component: DashboardOverview,
      },
      {
        path: "/staff/departments",
        name: "staff-departments",
        component: DashboardOverview,
      },


      /**
       * Budget Routes
       */
      {
        path: "/budgets/list",
        name: "budget-list",
        component: Budget,
      },
      {
        path: "/budgets/approvals",
        name: "budget-approval-requests",
        component: BudgetApprovalRequest,
      },
      {
        path: "/budgets/categories",
        name: "budget-categories",
        component: BudgetHead,
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
        path: "/settings/profile",
        name: "profile",
        component: DashboardOverview,
      },
      {
        path: "/settings/preference",
        name: "preference",
        component: DashboardOverview,
      },
      {
        path: "/settings/security",
        name: "security",
        component: DashboardOverview,
      },
      {
        path: "/settings/roles",
        name: "roles",
        component: DashboardOverview,
      },
      {
        path: "/settings/workflows",
        name: "workflows",
        component: DashboardOverview,
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
      }
    ],
  },
  
  {
    path: "/login",
    component: Auth,
    children: [
      {
        path: "/login",
        name: "login",
        component: Login,

      },
      {
        path: "/forgot-password",
        name: "forgot-password",
        component: forgotPassword,
      },
      {
        path: "/reset-password",
        name: "reset-password",
        component: resetPassword,
      },
      {
        path: "/2fa-password",
        name: "2fa-password",
        component: twoFAPassword,
      }
    ],

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
