<template>
  <div>
    <loading :active.sync="status.isLoading"/>
    <front-header :carts="carts" :nav-class="['navbar-dark','fixed-top']"
    :cartCurrentNumber="cartCurrentNumber"
    @delete-cart="deleteCart" @update-cart-qty="updateCartQty"/>
    <main>
      <front-hero :container-style="'height: 60vh'"/>
      <div class="container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-transparent h5 border-bottom rounded-0 mb-5">
            <li class="breadcrumb-item"><router-link to="/">首頁</router-link></li>
            <li class="breadcrumb-item active">產品</li>
          </ol>
        </nav>
        <div class="row">
          <div class="col-md-2">
            <ul class="nav flex-md-column justify-content-center h5">
              <li class="nav-item">
                <a class="nav-link" href="#" :class="{'active': categoryProduct === ''}"
                  @click.prevent="categoryProduct = ''; searchProduct = ''; getProducts()">
                  所有產品
                </a>
              </li>
              <li class="nav-item" v-for='(category, index) in getCategory' :key="index">
                <a class="nav-link" href="#" :class="{'active': categoryProduct === category}"
                  @click.prevent="categoryProduct = category; searchProduct = ''; getProducts()">
                  {{category}}
                </a>
              </li>
            </ul>
          </div>
          <div class="col-md-10">
            <!-- init categoryProduct-->
            <form class="form-inline mb-3 mt-3 mt-md-0">
              <div class="input-group input-group-sm mb-3 mb-md-0 mr-3">
                <input class="form-control"
                type="text" placeholder="Search 請按 Enter"
                v-model="searchProduct"
                @keyup.enter="getProducts(1,searchProduct); categoryProduct = '';">
                <div class="input-group-append">
                  <button class="btn btn-dark"
                  @click="getProducts(1,searchProduct); categoryProduct = '';">
                    <i class="fas fa-search"></i>
                  </button>
                </div>
              </div>
              <select class="custom-select custom-select-sm"
              v-model="pagination.eachPageItem"
              @change="getProducts()">
                <option value="4">4</option>
                <option value="8">8</option>
                <option value="12">12</option>
              </select>
            </form>
            <div class="row">
              <div class="col-md-4 col-lg-3 mt-5 mt-md-0"
              v-for='product in products' :key="product.id">
                <div class="card card--product">
                  <a href="#" class="card-img" @click.prevent="toDetail(product.id)">
                    <img :src="product.imageUrl" alt="" class="img-fluid">
                  </a>
                  <div class="card-body">
                    <h5 class="card-title">{{product.title}}</h5>
                    <div class="cardPrice">
                      <span class="cardPrice__title" v-if="product.price">
                        {{product.price | currency}}
                      </span>
                      <span v-if="!product.price">
                        {{product.origin_price | currency}}
                      </span>
                      <del class="cardPrice__subtitle" v-if="product.price">
                        {{product.origin_price | currency}}
                      </del>
                    </div>
                  </div>
                  <button type="button" class="btn btn-danger"
                    @click="addToCart(product.id)">
                    加入購物車
                  </button>
                </div>
              </div>
              <div class="col-12 mt-5">
                <shared-pagination :pagesData="pagination" @current-page="getProducts"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// mixins
import getProducts from '@/mixins/getProducts';
import cart from '@/mixins/cart';
import toDetail from '@/mixins/toDetail';
// components
import FrontHeader from '@/components/Front/FrontHeader.vue';
import FrontHero from '@/components/Front/FrontHero.vue';
import SharedPagination from '@/components/Shared/SharedPagination.vue';

export default {
  name: 'FrontCategory',
  data() {
    return {
      status: {
        isLoading: false,
      },
    };
  },
  mixins: [
    getProducts,
    cart,
    toDetail,
  ],
  components: {
    FrontHeader,
    FrontHero,
    SharedPagination,
  },
  computed: {
    getCategory() {
      const temp = [];
      // 過濾重覆 category 值
      this.allProducts.forEach((element) => {
        if (!temp.includes(element.category)) {
          temp.push(element.category);
        }
      });
      // 字串排序
      return temp.sort(() => 0 - 1);
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
  .nav-link.active {
    color: #8d82a4;
  }
  .custom-select {
    min-width: 4rem;
    text-align-last:center;
  }
</style>
