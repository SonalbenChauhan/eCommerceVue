import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Items from "./views/Items";
import CartPage from "./views/CartPage";

import Login from "./views/login";
import Createaccount from "./views/Createaccount";

import Itemdetails from "./views/Itemdetail";
import AddComment from "./views/AddComment";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/items",
      name: "items",
      component: Items
    },
    {
      path: "/login",
      name: "login",
      component: Login
    },
    {
      path: "/createaccount",
      name: "createaccount",
      component: Createaccount
    },
    {
      path:"/itemdetails/:id",
      name:"itemdetails",
      component: Itemdetails
    },{
      path: "/cartPage",
      name:"CartPage",
      component: CartPage
    },
    {
      path:"/itemdetails/:id/addcomment",
      name: "AddComment",
      component: AddComment
    }
  ]
});
