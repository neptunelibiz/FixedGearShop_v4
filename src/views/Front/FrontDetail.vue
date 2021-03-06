<template>
  <div>
    <loading :active.sync="status.isLoading">
      <template name="default">
        <div class="lds-ripple"><div></div><div></div></div>
      </template>
    </loading>
    <front-header :carts="carts" :nav-class="[ 'navbar-dark','bg-black' ]"
    :cartCurrentNumber="cartCurrentNumber"
    @delete-cart="deleteCart" @update-cart-qty="updateCartQty"/>
    <main class="container">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb bg-transparent border-bottom rounded-0 h5 mb-0">
          <li class="breadcrumb-item">
            <router-link to="/">首頁</router-link>
          </li>
          <li class="breadcrumb-item">
            <router-link to="/category">產品</router-link>
          </li>
          <li class="breadcrumb-item active">
            {{ product.category }}
          </li>
        </ol>
      </nav>
      <section class="row l-section">
        <div class="col-md-7">
          <img class="img-fluid mx-auto d-block" :src="product.imageUrl" alt="">
        </div>
        <div class="col-md-5">
          <h3 class="mb-5">{{ product.title }}</h3>
          <h5>規格</h5>
          <p>{{ product.description }}</p>
          <h5>說明</h5>
          <p>{{ product.content }}</p>
          <div class="my-4 py-2 bg-light text-center">
            <span class="fas fa-truck mr-3"></span>
            <span>免運費</span>
          </div>
          <div class="d-flex justify-content-between align-items-center py-3">
            <div>
              <h6 class="font-weight-bold" v-if="!product.price">
                {{ product.origin_price | currency }}
              </h6>
              <del class="small text-muted font-weight-bold" v-if="product.price">
                {{ product.origin_price | currency }}
              </del>
              <h5 class="text-danger font-weight-bold" v-if="product.price">
                {{ product.price | currency }}
              </h5>
            </div>
            <div class="text-muted">
              <span v-if="!product.price">
                小計 {{ product.origin_price * cartNumber | currency }}
              </span>
              <span v-if="product.price">
                小計 {{ product.price * cartNumber | currency }}
              </span>
            </div>
          </div>
          <div class="
          d-flex justify-content-between
          align-items-md-center flex-column flex-md-row">
            <div class="c-inputGroup mb-3 mr-md-3 mb-md-0">
              <button class="btn c-inputGroup__minusBtn"
              :disabled="cartNumber === 1"
              @click="cartNumber--">
                <i class="fas fa-minus"></i>
              </button>
              <input type="text" class="form-control"
              v-model="cartNumber" disabled>
              <button class="btn c-inputGroup__plusBtn"
              :disabled="cartNumber === 10"
                @click="cartNumber++">
                <i class="fas fa-plus"></i>
              </button>
            </div>
            <button type="button" class="btn btn-danger px-4 w-100"
              @click="addToCart(product.id,cartNumber)">
              加入購物車
            </button>
          </div>
        </div>
      </section>
      <div class="row l-section justify-content-center">
        <h2 class="l-section__title">其他產品</h2>
        <div class="col">
          <swiper class="swiper h-100"
          :options="swiperOptionMuch">
            <swiper-slide v-for="product in filterProducts" :key="product.id">
              <div class="card card--product">
                <a href="#" class="card-img"
                @click.prevent="toDetail(product.id); updateDetailId();">
                  <img :src="product.imageUrl" alt="" class="img-fluid">
                </a>
                <div class="card-body">
                  <h5 class="card-title text-truncate">{{ product.title }}</h5>
                  <div class="cardPrice">
                    <span class="cardPrice__title" v-if="product.price">
                      {{ product.price | currency }}
                    </span>
                    <span v-if="!product.price">
                      {{ product.origin_price | currency }}
                    </span>
                    <del class="cardPrice__subtitle" v-if="product.price">
                      {{ product.origin_price | currency }}
                    </del>
                  </div>
                </div>
                <button type="button" class="btn btn-danger"
                  @click="addToCart(product.id)">
                  加入購物車
                </button>
              </div>
            </swiper-slide>
          </swiper>
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
import toDetail from '@/mixins/toDetail';
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
    toDetail,
    swiperData,
  ],
  methods: {
    updateDetailId() {
      this.detailId = this.$route.params.detailId;
      this.getProduct(this.detailId);
    },
  },
  computed: {
    filterProducts() {
      const vm = this;
      const temp = [...this.allProducts];
      const filter = temp.filter((element) => (
        element.category === vm.product.category));
      return filter;
    },
  },
  created() {
    this.detailId = this.$route.params.detailId;
    this.getProduct(this.detailId);
    this.getCart();
    this.getProducts();
  },
};
</script>

<style lang="scss" scoped>
</style>
