<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <img :src="require('@/assets/images/WheelTalk_Logo.png')" alt="" height="32">
      </a>
      <button class="navbar-toggler" type="button"
      data-toggle="collapse" data-target="#navbarSupportedContent">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="order-md-1 ml-auto">
        <button type="button" class="btn shadow-none"
        data-toggle="modal" data-target="#SigninModal">
          <i class="fas fa-user-cog"/>
        </button>
      </div>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>
        </ul>
      </div>
    </nav>
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
    };
  },
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
  },
};
</script>

<style lang="scss" scoped>
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
</style>
