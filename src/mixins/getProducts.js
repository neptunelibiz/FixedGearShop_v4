/**
 * 使用請注意 data 衝突
*/

export default {
  data() {
    return {
      allProducts: [],
      products: [],
      pagination: {
        total_pages: '',
        current_page: 1,
        has_pre: false,
        has_next: false,
        eachPageItem: 10,
      },
      searchProduct: '',
      categoryProduct: '',
    };
  },
  methods: {
    getProducts(page = 1) {
      const vm = this;
      const api = `${process.env.VUE_APP_API_PATH}/api/${process.env.VUE_APP_CUSTOM_PATH}/products/all`;
      vm.status.isLoading = true;
      vm.$http.get(api).then((response) => {
        if (response.data.success) {
          vm.allProducts = response.data.products;
          let tempProducts = [...vm.allProducts];
          // 搜尋有內容，變更 tempProducts
          if (vm.searchProduct) {
            tempProducts = vm.allProducts.filter(
              (element) => element.title.match(vm.searchProduct),
            );
          }
          // 類別有內容，變更 tempProducts
          if (vm.categoryProduct) {
            tempProducts = vm.allProducts.filter(
              (element) => element.category.match(vm.categoryProduct),
            );
          }
          // 當搜尋回傳陣列長度等於0，回饋使用者查詢失敗
          if (tempProducts.length === 0) {
            vm.$bus.$emit('message:push', '查詢失敗', 'danger');
            vm.searchProduct = '';
            vm.status.isLoading = false;
            return;
          }
          vm.pagination.current_page = page;
          vm.paginationProducts(tempProducts);
          setTimeout(() => {
            vm.status.isLoading = false;
          }, 500);
        }
      });
    },
    paginationProducts(item) {
      const vm = this;
      const allPageItem = item.length;
      vm.pagination.total_pages = Math.ceil(allPageItem / vm.pagination.eachPageItem);
      vm.pagination.has_pre = vm.pagination.current_page > 1;
      vm.pagination.has_next = vm.pagination.current_page < vm.pagination.total_pages;
      const minPageItem = (
        (vm.pagination.current_page * vm.pagination.eachPageItem)
          - vm.pagination.eachPageItem) + 1;
      const maxPageItem = vm.pagination.current_page * vm.pagination.eachPageItem;
      vm.products = []; // init
      item.forEach((element, index) => {
        const number = index + 1;
        if (number >= minPageItem && number <= maxPageItem) {
          vm.products.push(element);
        }
      });
    },
  },
};
