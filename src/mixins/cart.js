/**
 * getProduct 的附屬 mixins
 * 本檔案功能購物車增加、刪除、取得，需要搭配 getProduct
*/

export default {
  data() {
    return {
      carts: [],
      cartNumber: 1,
      cartCurrentNumber: 0,
    };
  },
  methods: {
    getCart() {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      vm.status.isLoading = true;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.carts = response.data.data;
          vm.cartCurrentNumber = vm.carts.carts.length;
        }
      });
    },
    addToCart(id, qty = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      const cart = {
        product_id: id,
        qty,
      };
      vm.$http.post(api, { data: cart }).then((response) => {
        if (response.data.success) {
          vm.cartNumber = 1; // shopping number init
          vm.getCart();
          vm.$bus.$emit('message:push', response.data.message, 'success');
        }
      });
    },
    deleteCart(id) {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart/${id}`;
      vm.$http.delete(api).then((response) => {
        if (response.data.success) {
          vm.getCart();
          vm.$bus.$emit('message:push', response.data.message, 'danger');
        }
      });
    },
    updateCartQty(addId, qty, deleteId) {
      const vm = this;
      let api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/cart`;
      const cart = {
        product_id: addId,
        qty,
      };
      vm.status.isLoading = true;
      vm.$http.post(api, { data: cart }).then((responseA) => {
        if (responseA.data.success) {
          api = `${api}/${deleteId}`;
          vm.$http.delete(api).then((responseB) => {
            if (responseB.data.success) {
              vm.getCart();
              vm.$bus.$emit('message:push', '寵物數量已更新', 'success');
            }
          });
        } else {
          vm.getCart();
          vm.$bus.$emit('message:push', '寵物數量更新失敗', 'danger');
        }
      });
    },
  },
};
