<template>
  <div>
    <loading :active.sync="status.isLoading"/>
    <front-header :carts="carts" :nav-class="['navbar-dark','bg-dark']"
    :cartCurrentNumber="cartCurrentNumber"
    @delete-cart="deleteCart" @update-cart-qty="updateCartQty"/>
    <main class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent h5 border-bottom rounded-0 mb-5">
          <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
          <li class="breadcrumb-item"><router-link to="/category">產品</router-link></li>
        </ol>
      </nav>
      <div class="row">
        <div class="col-md-7">
          <img class="img-fluid" :src="product.imageUrl" alt="">
        </div>
        <div class="col-md-5">
          <h3 class="mb-5">{{product.title}}</h3>
          <h5>規格</h5>
          <p>{{product.description}}</p>
          <h5>評論</h5>
          <p>{{product.content}}</p>
          <div class="my-5 py-2 bg-light text-center">
            <span class="fas fa-truck mr-3"></span>
            <span>免運費</span>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// mixins
import getProduct from '@/mixins/getProduct';
import getProducts from '@/mixins/getProducts';
import cart from '@/mixins/cart';
import swiperData from '@/mixins/swiperData';
// components
import FrontHeader from '@/components/Front/FrontHeader.vue';

export default {
  name: 'FrontDetail',
  data() {
    return {
      status: {
        isLoading: false,
      },
    };
  },
  components: {
    FrontHeader,
  },
  mixins: [
    getProduct,
    getProducts,
    cart,
    swiperData,
  ],
  created() {
    this.detailId = this.$route.params.detailId;
    this.getProduct(this.detailId);
    this.getCart();
    this.getProducts();
  },
};
</script>
