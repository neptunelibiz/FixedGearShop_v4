<template>
  <div>
    <loading :active.sync="status.isLoading"/>
    <front-header :carts="carts" :nav-class="['navbar-dark','bg-black']"
    :cartCurrentNumber="cartCurrentNumber"
    @delete-cart="deleteCart" @update-cart-qty="updateCartQty"/>
    <main class="container">
      <section class="l-section" v-if="cartCurrentNumber > 0">
        <h2 class="l-section__title">購物車內容</h2>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="table-responsive-lg mb-3">
              <table class="table table-hover text-nowrap text-center">
                <thead class="thead-light">
                  <th style="width: 5%">刪除</th>
                  <th>品名</th>
                  <th style="width: 10%">數量</th>
                  <th>單價</th>
                  <th>總計</th>
                </thead>
                <tbody>
                  <tr v-for="(cart,key) in carts.carts" :key="key">
                    <td class="align-middle">
                      <button type="button" class="btn btn-outline-danger btn-sm"
                      @click="deleteCart(cart.id)">
                        <i class="far fa-trash-alt"></i>
                      </button>
                    </td>
                    <td class="align-middle">
                      {{ cart.product.title }}
                      <div class="text-success" v-if="cart.coupon">
                        已套用優惠券
                      </div>
                    </td>
                    <td class="align-middle">
                      <div class="inputGroup">
                        <button class="btn inputGroup__minusBtn"
                        :disabled="cart.qty === 1"
                        @click="cart.qty--;
                        updateCartQty(cart.product_id, cart.qty, cart.id);">
                          <i class="fas fa-minus"></i>
                        </button>
                        <input type="text" class="form-control" v-model="cart.qty"
                        disabled>
                        <button class="btn inputGroup__plusBtn"
                        :disabled="cart.qty === 10"
                          @click="cart.qty++;
                          updateCartQty(cart.product_id, cart.qty, cart.id);">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                    </td>
                    <td class="align-middle text-right">{{ cart.total | currency}}</td>
                    <td class="align-middle text-right">{{ cart.final_total | currency}}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colspan="4" class="text-right">總計</td>
                    <td class="text-right">{{ carts.total | currency}}</td>
                  </tr>
                  <tr v-if="carts.final_total !== carts.total">
                    <td colspan="4" class="text-right text-success">折扣價</td>
                    <td class="text-right text-success">{{ carts.final_total | currency}}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div class="input-group mb-3">
              <input type="text" class="form-control" v-model="coupon_code"
              style="text-align-last: center;"
              placeholder="請輸入優惠碼">
              <div class="input-group-append">
                <button class="btn btn-outline-danger" type="button"
                @click="addCouponCode">
                  套用優惠碼
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="l-section" v-if="cartCurrentNumber > 0">
        <h2 class="l-section__title">結帳表單</h2>
        <div class="row justify-content-center">
          <ValidationObserver class="col-md-10" v-slot="{ invalid }">
            <form @submit.prevent="createOrder">
              <div class="form-group">
                <label for="useremail">Email <span>*</span></label>
                <ValidationProvider name="E-mail"
                rules="required|email" v-slot="{ errors, classes }">
                  <input type="email" class="form-control" id="useremail" :class="classes"
                  v-model="form.user.email" placeholder="請輸入 Email">
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="username">收件人姓名 <span>*</span></label>
                <ValidationProvider name="姓名"
                v-slot="{ errors, classes }">
                  <input type="text" class="form-control" id="username" :class="classes"
                    v-model="form.user.name" placeholder="輸入姓名" required>
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <ValidationProvider name="電話" :rules="{ regex: /[0-9]{9}/ }"
                v-slot="{ errors, classes }">
                  <label for="usertel">收件人電話 <span>*</span></label>
                  <input type="tel" class="form-control" id="usertel" :class="classes"
                  v-model="form.user.tel" placeholder="請輸入電話" required>
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="useraddress">收件人地址 <span>*</span></label>
                <ValidationProvider name="地址" :rules="{ regex: /[\u4E00-\u9FFF][0-9]/ }"
                v-slot="{ errors, classes }">
                  <input type="text" class="form-control" id="useraddress" :class="classes"
                  v-model="form.user.address" placeholder="請輸入地址" required>
                  <span class="text-danger">{{ errors[0] }}</span>
                </ValidationProvider>
              </div>
              <div class="form-group">
                <label for="comment">留言</label>
                <textarea name="" id="comment" class="form-control" cols="30" rows="10"
                v-model="form.message" />
              </div>
              <div class="text-right">
                <button class="btn btn-outline-danger" type="submit"
                :disabled="invalid">送出訂單</button>
              </div>
            </form>
          </ValidationObserver>
        </div>
      </section>
      <section class="l-section" v-else>
        <div class="l-sectionImage l-sectionImage--1">
          <div class="l-sectionImage__text bg-opacity-white text-dark">
            <h3>目前購物車內容是空的</h3>
            <P>請點擊下方的按鈕</P>
            <router-link to="/category" class="btn btn-danger px-3">
              前往產品
            </router-link>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
// mixins
import cart from '@/mixins/cart';
import cartOrder from '@/mixins/cartOrder';
// components
import FrontHeader from '@/components/Front/FrontHeader.vue';

export default {
  name: 'FrontCheckout',
  data() {
    return {
      status: {
        isLoading: false,
      },
    };
  },
  mixins: [
    cart,
    cartOrder,
  ],
  components: {
    FrontHeader,
  },
  created() {
    this.getCart();
  },
};
</script>

<style lang="scss" scoped>
.bg-opacity-white {
  background-color: rgba(white, .8);
  border-radius: 20px;
  padding: 2rem;
}
</style>
