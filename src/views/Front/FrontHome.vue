<template>
  <div>
    <loading :active.sync="status.isLoading"/>
    <front-header :carts="carts" :nav-class="['navbar-dark','fixed-top']"
    :cartCurrentNumber="cartCurrentNumber"
    @delete-cart="deleteCart" @update-cart-qty="updateCartQty"/>
    <main>
      <front-home-video :container-style="'height: 70vh'"/>
      <section class="container l-section">
        <h2 class="l-section__title">分類導覽</h2>
        <div class="row">
          <div class="col-md-4" v-for="(category, index) in getCategory" :key="index">
            <figure class="p-sectionImage" :class="`p-sectionImage--${index + 1}`">
              <figcaption><a href="#" class="p-sectionImage__text h3">{{category}}</a></figcaption>
            </figure>
          </div>
        </div>
      </section>
      <section class="l-section">
        <h2 class="l-section__title">影片介紹</h2>
        <div class="bg-light">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-md-6 align-self-stretch">
                <iframe style="height: 100%; width: 100%; min-height: 320px;"
                src="https://www.youtube.com/embed/Pn6ie1zCkZU"></iframe>
              </div>
              <div class="col-md-6 l-section__about p-md-5 py-5">
                <p>
                  Fixed Gear 的真正興起要歸功於紐約的 Bike Messenger 們，
                  時間撥回上個世紀 70 年代末，美國的汽車數量和出行使用率呈
                  現出爆炸式的增長，導致了紐約等大城市的道路交通狀況愈發擁
                  堵。
                </p>
                <p>
                  爲了不影響送信時間並提升效率，Bike Messenger 逐漸成
                  爲各大公司主推的派送服務。郵差們開始改用騎車的方式運送郵
                  件，通過騎車不僅可以自由的穿梭在城市 CBD 的大街小巷之間
                  ，同時也避免了市內停車所帶來的限制、費用與罰款。
                </p>
                <p>
                  影片便講述了一位自行車郵差在曼哈頓街頭所經曆的「生死速遞」。
                </p>
                <div class="text-center text-md-left">
                  <a href="https://en.wikipedia.org/wiki/Premium_Rush" target="_blank"
                  class="btn btn-primary px-5">
                    了解更多
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container l-section">
        <div class="text-center mb-5">
          <h2 class="mb-3 l-section__title">新品上市</h2>
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-outline-primary"
            @click.prevent="categoryProduct = ''; searchProduct = ''; getProducts()">
              所有產品
            </button>
            <button type="button" class="btn btn-outline-primary"
            @click.prevent="categoryProduct = category; searchProduct = ''; getProducts()"
            v-for="(category, index) in getCategory" :key="index">
              {{category}}
            </button>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <swiper class="swiper h-100"
            :options="swiperOptionMuch">
              <swiper-slide v-for="product in filterProducts" :key="product.id">
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
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </section>
      <section class="l-section">
        <h2 class="l-section__title l-section__title--maginTop">現場體驗</h2>
        <div class="bg-light">
          <div class="container">
            <div class="row flex-md-row-reverse align-items-center">
              <div class="col-md-6">
                <figure class="p-sectionImage p-sectionImage--4"/>
              </div>
              <div class="col-md-6 l-section__about p-md-5 py-5">
                <h3 class="h4">
                  想體驗方式如下：
                </h3>
                <ul class="list-unstyled px-3">
                  <li>
                    <span class="far fa-clock mr-3 text-center" style="width: 16px;"/>
                    每週一、三下午14:00 - 17:00
                  </li>
                  <li>
                    <span class="fas fa-map-marker-alt mr-3 text-center" style="width: 16px;"/>
                    桃園市中壢區永嘉街25號3樓
                  </li>
                </ul>
                <p>
                  僅提供現場車款，不收取任何費用。
                </p>
                <div class="text-center text-md-left">
                  <a href="https://en.wikipedia.org/wiki/Premium_Rush" target="_blank"
                  class="btn btn-primary px-5">
                    預約體驗
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="container l-section">
        <div class="text-center mb-5">
          <h2 class="mb-3 l-section__title">專業推薦</h2>
        </div>
        <div class="row">
          <div class="col-md-4">
            <figure class="p-sectionImage p-sectionImage--4">
              <figcaption>
                <a href="http://www.wheeltalkfixed.com/2017/fgfs-portland-day-1/"
                class="p-sectionImage__text" target="_blank">
                  FGFS PORTLAND<br/>
                  <small>October 2, 2017</small>
                </a>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="p-sectionImage p-sectionImage--5">
              <figcaption>
                <a href="http://www.wheeltalkfixed.com/2018/fixed-gear-portland-this-is-a-sign/"
                class="p-sectionImage__text" target="_blank">
                  FIXED GEAR PORTLAND<br/>
                  <small>March 25, 2018</small>
                </a>
              </figcaption>
            </figure>
          </div>
          <div class="col-md-4">
            <figure class="p-sectionImage p-sectionImage--6">
              <figcaption>
                <a href="http://www.wheeltalkfixed.com/2017/mash-parallax-turning-of-the-tide/"
                class="p-sectionImage__text" target="_blank">
                  MASH PARALLAX<br/>
                  <small>October 25, 2017</small>
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// mixins
import getProducts from '@/mixins/getProducts';
import cart from '@/mixins/cart';
import toDetail from '@/mixins/toDetail';
import swiperData from '@/mixins/swiperData';
// components
import FrontHeader from '@/components/Front/FrontHeader.vue';
import FrontHomeVideo from '@/components/Front/FrontHomeVideo.vue';

export default {
  name: 'FrontHome',
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
    swiperData,
  ],
  components: {
    FrontHeader,
    FrontHomeVideo,
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
    filterProducts() {
      const temp = [...this.allProducts];
      // 空字串反轉 true
      if (!this.categoryProduct) {
        return temp;
      }
      const filter = temp.filter((element) => (element.category === this.categoryProduct));
      return filter;
    },
  },
  created() {
    this.getProducts();
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>

</style>
