import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../components/Back/BackLayout.vue'),
    redirect: '/dashboard/product',
    children: [
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/Back/BackProducts.vue'),
      },
      {
        path: 'order',
        name: 'Order',
        component: () => import('../views/Back/BackOrder.vue'),
      },
      {
        path: 'coupon',
        name: 'Coupon',
        component: () => import('../views/Back/BackCoupon.vue'),
      },
    ],
  },
];

const router = new VueRouter({
  routes,
  linkExactActiveClass: 'active',
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
