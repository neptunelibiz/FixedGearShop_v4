<template>
  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top"
    :class="{ 'navbar--dark': scrolled }">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img class="navbar-brand__img"
          :src="require('@/assets/images/WheelTalk_Logo.png')" alt="">
        </a>
        <div class="order-md-1 ml-auto">
          <button type="button" class="btn navbar-iconbtn shadow-none"
          data-toggle="modal" data-target="#SigninModal">
            <i class="fas fa-user-cog"/>
          </button>
          <button class="btn navbar-iconbtn shadow-none"
          data-toggle="modal" data-target="#cartModal">
            <i class="fas fa-shopping-cart"/>
            <span class="badge badge-primary" v-if="cartCurrentNumber> 0">
              {{cartCurrentNumber}}
            </span>
          </button>
        </div>
        <button class="navbar-toggler" type="button"
        data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link class="nav-link" to="/">首頁</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">產品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">作者</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <!-- Cart Modal -->
    <div class="modal fade" id="cartModal" tabindex="-1" role="dialog"
    aria-labelledby="cartModalLabel" aria-hidden="true">
      <div class="modal-dialog" :class="{'modal-lg': cartCurrentNumber > 0}"
      role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cartModalLabel">購物車</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="table-responsive-lg" v-if="cartCurrentNumber > 0">
              <table class="table text-center">
                <thead class="thead-light">
                  <th class="text-nowrap" style="width: 5rem">刪除</th>
                  <th style="min-width: 8rem">品名</th>
                  <th class="text-nowrap" style="width: 8rem">數量</th>
                  <th class="text-nowrap" style="width: 5rem">單價</th>
                  <th class="text-nowrap" style="width: 5rem">總計</th>
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
                      <div class="input-group input-group-sm">
                        <div class="input-group-prepend d-none d-md-block">
                          <button class="btn btn-primary"
                          :disabled="cart.qty === 1"
                          @click="cart.qty -= 1;
                          updateCartQty(cart.product_id, cart.qty, cart.id);">
                            <i class="fas fa-minus"></i>
                          </button>
                        </div>
                        <select class="form-control" v-model="cart.qty"
                        @change="updateCartQty(cart.product_id, cart.qty, cart.id)">
                          <option :value="num" v-for="num in 10" :key="num">{{num}}</option>
                        </select>
                        <div class="input-group-append d-none d-md-block">
                          <button class="btn btn-primary"
                          :disabled="cart.qty === 10"
                          @click="cart.qty += 1;
                          updateCartQty(cart.product_id, cart.qty, cart.id);">
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>
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
          </div>
          <div class="modal-footer" v-if="cartCurrentNumber > 0">
            <button type="button" class="btn btn-dark"
            data-dismiss="modal">取消</button>
            <router-link class="btn btn-primary" to="/cartorder"
            data-dismiss="modal">確定</router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- Signin Modal -->
    <div class="modal fade" id="SigninModal" tabindex="-1"
    role="dialog" aria-labelledby="SigninModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content bg-dark text-white">
          <div class="modal-header border-0">
            <h5 class="modal-title" id="SigninModalLabel">登入介面</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form class="formSignin" @submit.prevent="signin">
              <img class="mb-4 img-fluid" :src="require('@/assets/images/WheelTalk_Logo.png')"
              alt="" height="64">
              <label for="inputEmail" class="sr-only">電子郵件</label>
              <input type="email" id="inputEmail" v-model="user.username"
              class="form-control" placeholder="Email address" required>
              <label for="inputPassword" class="sr-only">密碼</label>
              <input type="password" id="inputPassword" v-model="user.password"
              class="form-control" placeholder="Password" required autocomplete>
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"> 記住我
                </label>
              </div>
              <button class="btn btn-lg btn-danger btn-block" type="submit">登入</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import $ from 'jquery';

export default {
  name: 'FrontHeader',
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      scrolled: false,
    };
  },
  props: [
    'carts',
    'cartCurrentNumber',
  ],
  methods: {
    signin() {
      const api = `${process.env.VUE_APP_API_PATH}/admin/signin`;
      const vm = this;
      vm.$http.post(api, vm.user).then((response) => {
        if (response.data.success) {
          vm.$router.push('/dashboard');
          $('#SigninModal').modal('hide');
        } else {
          vm.$bus.$emit('message:push', response.data.message, 'danger');
          $('#SigninModal').modal('hide');
        }
      });
    },
    deleteCart(id) {
      this.$emit('delete-cart', id);
    },
    updateCartQty(addId, qty, deleteId) {
      this.$emit('update-cart-qty', addId, qty, deleteId);
    },
    getProduct(search) {
      this.$emit('search-product', search);
    },
    onScroll() {
      // 獲取當前滾輪高度
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      // 假設 小於 0 回傳空值
      if (currentScrollPosition < 0) {
        return;
      }
      this.scrolled = currentScrollPosition > 40;
    },
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll);
  },
};
</script>

<style lang="scss" scoped>

.navbar.fixed-top.navbar--dark {
  background-color: rgba(black,.9);
  transition: all .8s ease-in-out;
}
// 根據 bootstrap 修改原有 className
.formSignin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin: 0 auto;
  .checkbox {
    font-weight: 400;
  }
  .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
  .form-control:focus {
    z-index: 2;
  }
  input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
select.form-control {
  background-image: none;
  appearance: none;
  text-align: center;
  text-align-last:center;
}
.navbar-brand__img {
  height: 16px;
  @media (min-width: 768px) {
    height: 32px;
  }
}
.navbar-nav > .nav-item {
  .nav-link {
    padding: .75rem 1rem;
    color: rgba(black,.5);
    &:hover, &:active, &.active {
      color: black;
      font-weight: 700;
    }
    @media (min-width: 768px) {
      color: rgba(white, .5);
      &:hover, &:active, &.active {
        color: white;
      }
    }
  }
}
.navbar-iconbtn {
  padding: .75rem 1rem;
  color: rgba(white, .5);
  &:hover, &:active, &.active {
    color: white;
    font-weight: 700;
  }
}

.navbar-toggler {
  border: none;
  cursor: pointer;
  &:focus{
    outline: none !important;
  }
}
@media (max-width: 767.98px) {
  .navbar-nav {
    background-color: #fff;
    border-radius: .25rem;
    text-align: right;
    padding: 1.5rem 3rem;
    .nav-link {
      border-bottom: 1px dashed rgba(0,0,0,.25);
    }
  }
}
</style>
